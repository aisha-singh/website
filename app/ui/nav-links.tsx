'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from "./nav-links.module.css";

const links = [
  { name: 'home', href: '/'},
  {
    name: 'about',
    href: '/about'
  },
  { name: 'projects', href: '/projects'},
  { name: 'resume', href: '/resume'},
];

export default function NavLinks() {
  const pathname = usePathname();
  const displayedLinks = pathname === '/coffee-shop'
    ? [...links, { name: 'coffee shop', href: '/coffee-shop' }]
    : links;
  return (
    <nav className={styles.navBar}>
      {displayedLinks.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              styles.link,
              { [styles.selected]: pathname === link.href }
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
