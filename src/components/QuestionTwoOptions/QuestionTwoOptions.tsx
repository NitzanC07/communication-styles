"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { Economica } from "next/font/google";

interface Choices {
  queNumber: number;
  option1: String;
  option2: String;
  onSelect: (indexQue: number, valueQue: number) => void;
  reset: boolean;
  setReset: (reset: boolean) => void;
}

function QuestionTwoOptions({
  queNumber,
  option1,
  option2,
  onSelect,
  reset,
}: Choices) {
  const inputRange = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (reset) {
      if (inputRange.current) {
        inputRange.current.value = '0'
      }
    }
  }, [reset]);

  const handleClick = () => {
    const value = inputRange.current?.value;
    onSelect(queNumber, Number(value));
  };
  return (
    <section className={styles.choices}>
      <label className={styles.option1}>{option1}</label>
      <input
        className={styles.slider}
        ref={inputRange}
        type="range"
        id={`Question_${queNumber}`}
        onClick={handleClick}
        min={-1}
        max={1}
        step={1}
      />
      <label className={styles.option2}>{option2}</label>
    </section>
  );
}

export default QuestionTwoOptions;
