"use client";

import { feature_photos, engagement_photos_mobile } from "../data/photos";
import ResponsiveImage from "../components/Responsive_Image";
import RSVP_Form from "../components/forms/Rsvp_Form";

import styles from "../styling/rsvp.module.css";

export default function Rsvp() {
  const featurePhoto = feature_photos.find((p) => p.id === 8);
  const featurePhotoMobile = engagement_photos_mobile.find((p) => p.id === 10);
  return (
    <main className={styles.page_body}>
      <h1 className={styles.page_name}>Early RSVP</h1>
      <div className={styles.content_wrapper}>
        <article className={styles.header_container}>
          <RSVP_Form />
        </article>
        <ResponsiveImage
          initialPhoto={featurePhoto}
          secondaryPhoto={featurePhotoMobile}
          initialClass={styles.image}
          secondaryClass={styles.image_mobile}
        />
      </div>
    </main>
  );
}
