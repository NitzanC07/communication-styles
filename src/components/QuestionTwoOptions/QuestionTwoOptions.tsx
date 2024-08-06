import styles from "./styles.module.css";

interface Choices {
  key: Number;
  option1: string;
  option2: string;
}

function QuestionTwoOptions(options: Choices) {
  return (
    <section className={styles.choices}>
      <option className={styles.option1} value="1" label={options.option1} />
      <input
        className={styles.slider}
        type="range"
        id="choice"
        name=""
        min={-1}
        max={1}
        step={1}
        list="values"
      />
      <option className={styles.option2} value="-1" label={options.option2} />
    </section>
  );
}

export default QuestionTwoOptions;
