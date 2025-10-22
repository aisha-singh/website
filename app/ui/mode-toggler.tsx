'use client';
import Image from "next/image";
import styles from "./mode-toggler.module.css";
import { useState } from "react";

export default function ModeToggler() {
  const [isDark, setIsDark] = useState(false);
  const imageSrc = isDark ? "/images/dark_mode.png" : "/images/light_mode.png";
  const imageAlt = isDark ? "dark mode icon" : "light mode icon";
  return (
    <Image
      className={styles.image}
      src={imageSrc}
      alt={imageAlt}
      width={20}
      height={20}
      onClick={() => { setIsDark(!isDark); } }
    />
  );
}
