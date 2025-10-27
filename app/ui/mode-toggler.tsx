'use client';
import Image from "next/image";
import styles from "./mode-toggler.module.css";
import { useTheme } from "../context/theme-context";


export default function ModeToggler() {
  const { theme, changeTheme } = useTheme();
  const imageSrc = theme === 'dark' ? "/images/dark_mode.png" : "/images/light_mode.png";
  const imageAlt = theme === 'dark' ? "dark mode icon" : "light mode icon";
  return (
    <Image
      className={styles.image}
      src={imageSrc}
      alt={imageAlt}
      width={20}
      height={20}
      onClick={changeTheme}
    />
  );
}
