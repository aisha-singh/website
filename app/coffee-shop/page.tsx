'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './coffee-shop.module.css';
import sharedStyles from "../ui/shared.module.css";

export default function Page() {
  const [response, setResponse] = useState('');

  const coffees = [
    { name: 'coffee1', src: '/images/coffee1.png', alt: 'overflowing latte' },
    { name: 'coffee2', src: '/images/coffee2.png', alt: 'cute latte' },
    { name: 'coffee3', src: '/images/coffee3.png', alt: 'matcha latte' },
  ];

  function onCoffeeClick(src: string) {
    if (src.includes('coffee1')) {
      setResponse("that one was my favorite too");
    } else {
      setResponse('nice choice');
    }
  }

  return (
    <div className={sharedStyles.section}>
        <p>welcome to the secret coffee shop :)</p>
        <p>choose your coffee: </p>
      <div className={styles.coffees}>
        {coffees.map((coffee) => (
            <Image key={coffee.name} className={styles.coffee} src={coffee.src} onClick={() => onCoffeeClick(coffee.src)} alt={coffee.alt} width={200} height={160}/>
        ))}
      </div>
      <div className={styles.response}>{response}</div>
      <Link href="/">back to homepage</Link>
    </div>
  );
}