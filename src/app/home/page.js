"use client";

import Image from "next/image";
import { engagement_photos_mobile, feature_photos } from "../data/photos";
import Contact_Form from "../components/Contact_Form";

import styles from "../styling/home.module.css";

export default function Home() {
  const heroSectionPhotoPC = feature_photos.find(
    (p) => p.name === "watching_backs_of_heads"
  );
  const heroSectionPhotoMobile = engagement_photos_mobile.find(
    (p) => p.name === "walking_with_marquee"
  );

  return (
    <main>
      <div className={styles.header_container}>
        <h1 className={styles.title}>Rosy & Rich Get Hitched.</h1>
        <p className={styles.sub_title}>July 18th 2026</p>
        <p className={styles.copy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
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
