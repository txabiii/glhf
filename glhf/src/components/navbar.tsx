'use client'
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Navbar.module.scss'
import { useEffect } from "react";

const isBrowser = () => typeof window !== "undefined";
function scrollToTop() {
  if (!isBrowser()) return;
  setTimeout(() => {
    window.document.body.scrollIntoView({ behavior: "smooth" });
  }, 500);
}

export default function Navbar() {
   useEffect(() => {
    scrollToTop();
  },[]);

  return (
    <nav className={styles.navbar}>
      <Link href='/'>
        <Image src="/glhf.png" alt="glfh logo" width={56} height={56} />
      </Link>
      <ul className={styles.defaultLinks}>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
        <li><Link href='/stories'>Stories</Link></li>
      </ul>
      <input id="checkbox_toggle" type="checkbox" className={styles.menuCheckbox}/>
      <label className={styles.menuButton} htmlFor="checkbox_toggle">            
        <h1>☰</h1>
      </label>
      <div className={styles.menu}>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
          <li><Link href='/stories'>Stories</Link></li>
        </ul>
      </div>
    </nav>
  )
}