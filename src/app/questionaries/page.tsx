"use client";
import QuestionTwoOptions from "@/components/QuestionTwoOptions/QuestionTwoOptions";
import styles from "./page.module.css";
import questionaries from "../../../data/questionaries.json";
import { useState } from "react";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

function QuestionaryModel() {
  const router = useRouter();
  const [currentQuestionary, setCurrentQuestionary] = useState(
    questionaries.firstQuestionary
  );
  const [questionsState, setQuestionState] = useState(
    Array(currentQuestionary.questions.length).fill(0)
  );
  const [currentResult, setCurrentResult] = useState(0);
  const [result, setResult] = useState({ x: 0, y: 0 });
  const [reset, setReset] = useState(false);

  const handleResponseUser = (queNumber: number, value: number): void => {
    const newQuestionState = [...questionsState];
    newQuestionState[queNumber - 1] = value;
    setQuestionState(newQuestionState);

    let totalScore = newQuestionState.reduce((acc, val) => acc + val, 0);
    setCurrentResult(totalScore);
  };

  const saveResult = () => {
    if (currentQuestionary.subject === "מכוון משימות מול מכוון אנשים") {
      setResult((prevResult) => ({ ...prevResult, x: currentResult }));
      setCurrentQuestionary(questionaries.secondQuestionary);
      resetInputs();
    } else if (currentQuestionary.subject === "דומיננטי מול פאסיבי") {
      setResult((prevResult) => ({ ...prevResult, y: currentResult }));
      setCurrentQuestionary(questionaries.resultQuestionaries);
      resetInputs();
    }
  };

  const nextStage = () => {
    router.push(`/${result.x}xy${result.y}`);
  };

  const resetInputs = () => {
    setReset(true);
    setTimeout(() => {
      setQuestionState(Array(currentQuestionary.questions.length).fill(0));
      setCurrentResult(0);
      setReset(false);
    }, 0);
  };

  return (
    <>
      <form className={styles.questions}>
        <h2>{currentQuestionary.subject}</h2>
        {currentQuestionary.questions.map((question, index) => (
          <QuestionTwoOptions
            key={question.queNumber}
            queNumber={question.queNumber}
            option1={question.option1}
            option2={question.option2}
            onSelect={(index, value) => handleResponseUser(index, value)}
            reset={reset}
            setReset={() => setReset}
          />
        ))}
        {currentQuestionary.subject !== "תוצאת השאלונים" && (
          <Button onClick={saveResult} text={"שמור תוצאה"} />
        )}
      </form>
      {currentQuestionary.subject === "תוצאת השאלונים" && (
        <>
          <h3>ארבעה סגנונות תקשורת - רקע</h3>
          <ul>
            <li>משימתי</li>
            <li>תומך</li>
            <li>מנתח</li>
            <li>מקדם</li>
          </ul>
          <Button onClick={nextStage} text={"הבא"} />
        </>
      )}
    </>
  );
}

export default QuestionaryModel;
