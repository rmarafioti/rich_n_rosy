"use client";

import { feature_photos } from "../data/photos";
import ResponsiveImage from "../components/Responsive_Image";

import styles from "../styling/event.module.css";

export default function Event() {
  const featurePhoto = feature_photos.find((p) => p.id === 7);
  return (
    <main>
      <div className={styles.header_container}>
        <p className={styles.copy}>Celebrate the wedding of</p>
        <h2 className={styles.title}>Rosy Phinick</h2>
        <h2 className={styles.title}>& Rich Marafioti</h2>
        <h3 className={styles.sub_title}>Colvin House</h3>
        <p className={styles.sub_title}>5940 N Sheridan Rd.</p>
        <p className={styles.sub_title}>Chicago</p>
        <p className={styles.copy}>5:00 PM Ceremony with Reception to Follow</p>
        <p className={styles.copy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <ResponsiveImage
        pcPhoto={featurePhoto}
        /*mobilePhoto={heroSectionPhotoMobile}*/
        pcClass={styles.image}
        /*mobileClass={styles.image_mobile}*/
      />
    </main>
  );
}
