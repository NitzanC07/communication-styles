'use client';
import QuestionTwoOptions from "@/components/QuestionTwoOptions/QuestionTwoOptions";
import styles from "./page.module.css";
import { useState } from "react";

const questionaryA = [
  { queNumber: 1, option1: "אקראי", option2: "שיטתי" },
  { queNumber: 2, option1: "מחושב", option2: "ספונטני" },
  { queNumber: 3, option1: "מבטא", option2: "חוסם" },
  { queNumber: 4, option1: "בוחן", option2: "אימפולסיבי" },
  { queNumber: 5, option1: "מרוחק", option2: "קרוב" },
  { queNumber: 6, option1: "מאופק", option2: "מלא חיים" },
  { queNumber: 7, option1: "בשליטה עצמית", option2: "נינוח, משוחרר" },
  { queNumber: 8, option1: "מאורגן", option2: "בלתי מאורגן" },
  { queNumber: 9, option1: "מובנה", option2: "בלתי מובנה" },
  { queNumber: 10, option1: "נוקשה", option2: "גמיש" },
  { queNumber: 11, option1: "מעונב", option2: "לא רשמי" },
  { queNumber: 12, option1: "שכלתני", option2: "רגשני" },
  { queNumber: 13, option1: "בלתי זמין", option2: "זמין" },
  { queNumber: 14, option1: "ממוקד", option2: "בלתי ממוקד" },
  { queNumber: 15, option1: "שגרתי", option2: "לא שועה לסמכויות" },
  { queNumber: 16, option1: "ממושמע", option2: "מפוזר" },
];

function QuestionaryModel() {

  const [result, setResult] = useState(0);

  return (
    <section className={styles.questions}>
      <h2>שאלון ראשון</h2>
      {questionaryA.map((question) => (
        <QuestionTwoOptions
          key={question.queNumber}
          option1={question.option1}
          option2={question.option2}
        />
      ))}

      <div>תוצאה: {}</div>
    </section>
  );
}

export default QuestionaryModel;
