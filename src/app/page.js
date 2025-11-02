"use client";

import Image from "next/image";
import { engagement_photos_mobile, engagement_photos_pc } from "./data/photos";
import Contact_Form from "./components/Contact_Form";

import styles from "./styling/landing_page.module.css";

export default function Home() {
  const heroSectionPhotoPC = engagement_photos_pc.find(
    (p) => p.name === "watching_backs_of_heads"
  );
  const heroSectionPhotoMobile = engagement_photos_mobile.find(
    (p) => p.name === "walking_with_marquee"
  );

  return (
    <main>
      <h1 className={styles.title}>Rosy & Rich Get Hitched.</h1>
      <p className={styles.sub_title}>July 18th 2026</p>
      {heroSectionPhotoPC && (
        <Image
          src={heroSectionPhotoPC.photo}
          alt={heroSectionPhotoPC.alt}
          width={heroSectionPhotoPC.width}
          height={heroSectionPhotoPC.height}
          className={styles.image}
        />
      )}
      {heroSectionPhotoMobile && (
        <Image
          src={heroSectionPhotoMobile.photo}
          alt={heroSectionPhotoMobile.alt}
          width={heroSectionPhotoMobile.width}
          height={heroSectionPhotoMobile.height}
          className={styles.image_mobile}
        />
      )}
      <Contact_Form />
    </main>
  );
}
