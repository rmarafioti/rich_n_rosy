"use client";

import { feature_photos, engagement_photos_mobile } from "../data/photos";
import ResponsiveImage from "../components/Responsive_Image";
import RSVP_Form from "../components/Rsvp_Form";

import styles from "../styling/rsvp.module.css";

export default function Rsvp() {
  const featurePhoto = feature_photos.find((p) => p.id === 8);
  const featurePhotoMobile = engagement_photos_mobile.find((p) => p.id === 10);
  return (
    <main>
      <article className={styles.header_container}>
        <RSVP_Form />
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
