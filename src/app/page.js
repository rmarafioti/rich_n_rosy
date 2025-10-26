"use client";

import Image from "next/image";
import Contact_Form from "./components/Contact_Form";

import styles from "./styling/landing_page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.header}>
        <h1 className={styles.title}>Rosy & Rich Get Hitched.</h1>
        <p className={styles.sub_title}>July 18th 2026</p>
      </div>
      <Image
        src="https://res.cloudinary.com/dzpne110u/image/upload/v1761260843/wedding_website/engagement_photos/seats_watching_back_web_yidrxk.jpg"
        alt="website icon and home page button"
        width={4181}
        height={2779}
        className={styles.image}
      />
      <Image
        src="https://res.cloudinary.com/dzpne110u/image/upload/v1761505752/wedding_website/engagement_photos/marquee_walking_web_y5mkhb.jpg"
        alt="website icon and home page button"
        width={2424}
        height={3624}
        className={styles.image_mobile}
      />
      <Contact_Form />
    </main>
  );
}
