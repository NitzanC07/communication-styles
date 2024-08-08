'use client';
import React, { useRef, useState } from 'react'

function ExamplePage() {
  const rangeInputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(0);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rangeInputRef.current) {
      const inputValue = Number(rangeInputRef.current.value)
      setValue(inputValue);
      
    }
  }

  return (
    <div>
        <h2>עמוד בדיקות</h2>
        <form onSubmit={submitForm}>
          <input type='range' min={-1} max={1} step={0.5} ref={rangeInputRef} />
          <button type='submit'>שלח</button>
        </form>
        <p>Value: {value}</p>
    </div>
  )
}

export default ExamplePage