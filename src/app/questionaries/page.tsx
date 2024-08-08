"use client";
import QuestionTwoOptions from "@/components/QuestionTwoOptions/QuestionTwoOptions";
import styles from "./page.module.css";
import { useState } from "react";

const questionaryA = [
  { queNumber: 1, option1: "שיטתי", option2: "אקראי" },
  { queNumber: 2, option1: "קר", option2: "חם" },
  { queNumber: 3, option1: "מחושב", option2: "ספונטני" },
  { queNumber: 4, option1: "מאורגן", option2: "בלתי מאורגן" },
  { queNumber: 5, option1: "חוסם (שומר בבטן)", option2: "מבטא" },
  { queNumber: 6, option1: "מתמקד במשימה", option2: "מתמקד ביחסי אנוש" },
  { queNumber: 7, option1: "בוחן", option2: "אימפולסיבי" },
  { queNumber: 8, option1: "מרוחק", option2: "קרוב" },
  { queNumber: 9, option1: "מאופק", option2: "מלא חיים" },
  { queNumber: 10, option1: "בשליטה עצמית", option2: "נינוח, משוחרר" },
  { queNumber: 11, option1: "מובנה", option2: "בלתי מובנה" },
  { queNumber: 12, option1: "מתבדל", option2: "מעורב עם הבריות" },
  { queNumber: 13, option1: "נוקשה", option2: "גמיש" },
  { queNumber: 14, option1: "מעונב", option2: "לא רשמי" },
  { queNumber: 15, option1: "שכלתני", option2: "רגשני" },
  { queNumber: 16, option1: "מתוח", option2: "רפוי" },
  { queNumber: 17, option1: "בלתי זמין", option2: "זמין" },
  { queNumber: 18, option1: "ממוקד", option2: "בלתי ממוקד" },
  { queNumber: 19, option1: "ממושמע", option2: "מפוזר" },
  { queNumber: 20, option1: "שגרתי", option2: "לא שועה למוסכמות" }
];

const questionaryB = [
  {queNumber: 1, option1: "מצטרף", option2: "לוקח פיקוד"},
  {queNumber: 2, option1: "מהסס", option2: "מוכן"},
  {queNumber: 3, option1: "מקבל בהבנה", option2: "מאתגר"},
  {queNumber: 4, option1: "מתבייש", option2: "מכריע"},
  {queNumber: 5, option1: "מופנם", option2: "מוחצן"},
  {queNumber: 6, option1: "שקט", option2: "רועש"},
  {queNumber: 7, option1: "משלים", option2: "יזם"},
  {queNumber: 8, option1: "עוקב", option2: "מנהיג"},
  {queNumber: 9, option1: "נסוג", option2: "אומר את שלו"},
  {queNumber: 10, option1: "מקשיב", option2: "דברן"},
  {queNumber: 11, option1: "מאופק", option2: "דוחף"},
  {queNumber: 12, option1: "שאלות", option2: "הצהרות"},
  {queNumber: 13, option1: "סמוי", option2: "גלוי"},
  {queNumber: 14, option1: "מסכים", option2: "מתווכח"},
  {queNumber: 15, option1: "נשלט", option2: "משתלט"},
  {queNumber: 16, option1: "כבד", option2: "מזרז"},
  {queNumber: 17, option1: "מבליע", option2: "מבטא"},
  {queNumber: 18, option1: "נמנע", option2: "ניגש"},
  {queNumber: 19, option1: "מצמצם", option2: "מתרחב"},
  {queNumber: 20, option1: "פורש", option2: "פועל"},
]

function QuestionaryModel() {
  const [questionsState, setQuestionState] = useState(
    Array(questionaryA.length).fill(0)
  );
  const [result, setResult] = useState(0);
  const [resultA, setResultA] = useState(0);

  const handleResponseUser = (queNumber: number, value: number): void => {
    const newQuestionState = [...questionsState];
    newQuestionState[queNumber - 1] = value;
    setQuestionState(newQuestionState);
    
    let totalScore = newQuestionState.reduce((acc, val) => acc + val, 0);
    setResult(totalScore);
  };
  
  const saveResult = () => {

    setResultA(result);
  };

  return (
    <form className={styles.questions}>
      <h2>שאלון ראשון</h2>
      {questionaryA.map((question, index) => (
        <QuestionTwoOptions
          key={question.queNumber}
          queNumber={question.queNumber}
          option1={question.option1}
          option2={question.option2}
          onSelect={(index, value) => handleResponseUser(index, value)}
        />
      ))}
      <button type="button" onClick={saveResult}>
        סיום
      </button>
      <span>תוצאת שאלון ראשון: {resultA}</span>
    </form>
  );
}

export default QuestionaryModel;
