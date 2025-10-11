"use client";
import Link from "next/link";
import styles from "../styling/navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <h1 className={styles.icon}>*menu icon</h1>
      <div className={styles.nav_menu}>
        <Link href="" className={styles.nav_link}>
          section one
        </Link>
        <Link href="" className={styles.nav_link}>
          section two
        </Link>
        <Link href="" className={styles.nav_link}>
          section three
        </Link>
        <Link href="" className={styles.nav_link}>
          section four
        </Link>
        <Link href="" className={styles.nav_link}>
          section five
        </Link>
      </div>
    </nav>
  );
}
