import NavLinks from '@/app/ui/nav-links';
import Logos from '@/app/ui/logos';
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import ModeToggler from './mode-toggler';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className = {styles.topRow}>
        <div className={styles.placeholder}></div>
        <div className={styles.title}>
            aisha singh
        </div>
        <div className={styles.icons}> 
            <Link
            key="coffee shop"
            href={"/coffee-shop"}
            >
              <Image
                className={styles.logo}
                src="/images/cofficon.png"
                alt="coffee icon"
                width={20}
                height={20}
              />
            </Link>
            <ModeToggler/>
        </div>
      </div>
      <Logos />
      <NavLinks />
    </div>
  );
}
