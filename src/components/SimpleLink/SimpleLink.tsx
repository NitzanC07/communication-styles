import Link from 'next/link';
import styles from './styles.module.css';

interface LinkProps {
    href: string;
    text: String;
}

function SimpleLink({href, text}:LinkProps) {
  return (
    <Link className={styles.link} href={href}>{text}</Link>
  )
}

export default SimpleLink