import styles from "./page.module.css";
import sharedStyles from './ui/shared.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={sharedStyles.section}>
          <p className = {styles.intro}>Welcome! </p>
          <p className = {styles.intro}>I am a software engineer with 4+ years of experience building web applications (Microsoft, Washington Post). 
            I’m passionate about coding for impact, and finding the intersection between journalism, policy, and computational solutions. 
            I’m known for developing creative solutions in both front-end and back-end scenarios.</p>
      </div>
    </div>
  );
}
