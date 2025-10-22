import styles from "../projects/projects.module.css";

export default function Project({ 
  title,
  text,
  link
}: {
  title: string;
  text: string;
  link?: string;
}) {
  return (
    <div className={styles.project}>
      {link ? (
        <a href={link} target = '_blank' className={styles.title}>
          {title}
        </a>
      ) : (
        <div className={styles.title}>
          {title}
        </div>
      )}
        <div className={styles.text}>{text}</div>
    </div>
  );
}
