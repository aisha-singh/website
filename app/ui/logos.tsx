import styles from "./logos.module.css";

const logos = [
  { text: 'linkedin logo', href: 'https://www.linkedin.com/in/aisha-singh99/', src: './images/linkedin.png'},
  { text: 'github logo', href: 'https://github.com/aisha-singh', src: './images/github.png'},
  { text: 'gmail logo', href: 'mailto:aishasingh2017@gmail.com', src: './images/gmail.png'},
];

export default function Logos() {
  return (
    <div className={styles.logoSection}>
      {logos.map((logo) => {
        return (
            <a key={logo.text} href={logo.href} target="_blank">
                <img src={logo.src} alt={logo.text} className={styles.logo} />
            </a>
        );
      })}
    </div>
  );
}
