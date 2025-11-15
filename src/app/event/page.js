"use client";

import { feature_photos, engagement_photos_mobile } from "../data/photos";
import ResponsiveImage from "../components/Responsive_Image";

import styles from "../styling/event.module.css";

export default function Event() {
  const featurePhoto = feature_photos.find((p) => p.id === 7);
  const featurePhotoMobile = engagement_photos_mobile.find((p) => p.id === 6);

  return (
    <main>
      <article className={styles.header_container}>
        <p className={styles.intro}>Come celebrate the wedding of</p>
        <h2 className={styles.title}>Rosy Phinick & Rich Marafioti</h2>
        <section className={styles.address_container}>
          <p className={styles.sub_title}>Colvin House</p>
          <p className={styles.sub_title}>5940 N Sheridan Rd.</p>
          <p className={styles.sub_title}>Chicago</p>
          <p className={styles.copy}>Ceremony with Reception to Follow</p>
        </section>
        <section className={styles.details_section}>
          <p className={styles.copy}>
            More details to come in XXXXX check back soon.
          </p>
        </section>
      </article>
      <ResponsiveImage
        pcPhoto={featurePhoto}
        mobilePhoto={featurePhotoMobile}
        pcClass={styles.image}
        mobileClass={styles.image_mobile}
      />
    </main>
  );
}
