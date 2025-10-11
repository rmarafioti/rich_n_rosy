"use client";
import Link from "next/link";
import styles from "../styling/navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.nav_menu}>
        <Link href="/" className={styles.nav_link}>
          *menu icon
        </Link>
        <Link href="/section_one" className={styles.nav_link}>
          section one
        </Link>
        <Link href="/section_two" className={styles.nav_link}>
          section two
        </Link>
        <Link href="/section_three" className={styles.nav_link}>
          section three
        </Link>
        <Link href="/section_four" className={styles.nav_link}>
          section four
        </Link>
        <Link href="/section_five" className={styles.nav_link}>
          section five
        </Link>
      </div>
    </nav>
  );
}
