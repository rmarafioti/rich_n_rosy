"use client";

import { feature_photos, engagement_photos_mobile } from "../data/photos";
import ResponsiveImage from "../components/Responsive_Image";

import styles from "../styling/big_day.module.css";

export default function Event() {
  const featurePhoto = feature_photos.find((p) => p.id === 7);
  const featurePhotoMobile = engagement_photos_mobile.find((p) => p.id === 6);

  return (
    <main>
      <article className={styles.header_container}>
        <p className={styles.intro}>Come celebrate the wedding of</p>
        <h2 className={styles.title}>
          <span className={styles.kern}>R</span>osy Phinick &{" "}
          <span className={styles.kern_two}>R</span>ich Marafioti
        </h2>
        <p className={styles.date}>Saturday, July 18th 2026</p>
        <section className={styles.address_container}>
          <p className={styles.sub_title}>
            Colvin House &#8226; 5940 N Sheridan Rd. &#8226; Chicago
          </p>
          <p className={styles.mobile_sub_title}>Colvin House</p>
          <p className={styles.mobile_sub_title}>5940 N Sheridan Rd.</p>
          <p className={styles.mobile_sub_title}>Chicago</p>
        </section>
        <p className={styles.note}>
          5pm outdoor ceremony with reception to follow
        </p>
        <p className={styles.copy}>More information to come!</p>
      </article>
      <ResponsiveImage
        initialPhoto={featurePhoto}
        secondaryPhoto={featurePhotoMobile}
        initialClass={styles.image}
        secondaryClass={styles.image_mobile}
      />
      <p className={styles.mobile_note}>
        5pm outdoor ceremony with reception to follow
      </p>
      <p className={styles.mobile_copy}>More information to come!</p>
    </main>
  );
}
