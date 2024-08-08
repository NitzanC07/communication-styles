import Link from "next/link";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import SimpleLink from "@/components/SimpleLink/SimpleLink";

export default function Home() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>מודל ארבעת סגנונות התקשורת</h2>
      <p className={styles.paragraph}>הסבר קצר מה זה אומר</p>
      <SimpleLink href="/questionaries" text="התחל שאלון" />
    </section>
  );
}
