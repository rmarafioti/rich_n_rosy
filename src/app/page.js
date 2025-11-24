"use client";

import { engagement_photos_mobile, feature_photos } from "./data/photos";
import ResponsiveImage from "./components/Responsive_Image";
import Contact_Form from "./components/forms/Contact_Form";
import Image from "next/image";

import styles from "./styling/home.module.css";

export default function Home() {
  const heroSectionPhotoPC = feature_photos.find((p) => p.id === 6);
  const heroSectionPhotoMobile = engagement_photos_mobile.find(
    (p) => p.id === 5
  );
  const formPhoto = engagement_photos_mobile.find((p) => p.id === 12);

  return (
    <main className={styles.layout}>
      <div className={styles.header_container}>
        <h1 className={styles.title}>Rosy & Rich Get Hitched!</h1>
        <p className={styles.sub_title}>July 18th 2026</p>
        <p className={styles.copy}>
          Welcome to our wedding website! As we get closer to the big day,
          you&apos;ll find important information about the wedding ceremony and
          reception, travel tips, and more. We are so excited to celebrate with
          you!
        </p>
      </div>
      <ResponsiveImage
        pcPhoto={heroSectionPhotoPC}
        mobilePhoto={heroSectionPhotoMobile}
        pcClass={styles.image}
        mobileClass={styles.image_mobile}
      />
      <section className={styles.form_section}>
        <Contact_Form />
        <Image
          src={formPhoto.photo}
          alt={formPhoto.alt}
          width={formPhoto.width}
          height={formPhoto.height}
          className={styles.form_photo}
        />
      </section>
    </main>
  );
}
