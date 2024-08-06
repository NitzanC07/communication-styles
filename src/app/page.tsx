import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>מודל ארבעת סגנונות התקשורת</h2>
      <p className={styles.paragraph}>הסבר קצר מה זה אומר</p>
      <Link href="/questionaries">
        <button className={styles.btn}>התחל שאלון</button>
      </Link>
    </section>
  );
}
