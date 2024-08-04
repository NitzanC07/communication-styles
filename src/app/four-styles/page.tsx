import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.div}>משימתי</div>
      <div className={styles.div}>מקדם</div>
      <div className={styles.div}>מנתח</div>
      <div className={styles.div}>תומך</div>
    </section>
  );
}
