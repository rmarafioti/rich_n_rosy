"use client";

import Responsive_Image_Theme from "../components/Responsive_Image_Theme";
import ResponsiveImage from "../components/Responsive_Image";
import { icons, footer_icons } from "../data/photos";

import styles from "../styling/footer.module.css";

export default function Footer() {
  const illustrationLight = footer_icons.find((p) => p.id === 1);
  const illustrationDark = footer_icons.find((p) => p.id === 2);

  return (
    <>
      <footer>
        <section className={styles.left_section}>
          <Responsive_Image_Theme photoData={icons} className={styles.icon} />
          <div>
            <p className={styles.copy}>Rosy & Rich Get Hitched</p>
            <p className={styles.copy}>July 2026 Chicago</p>
            <p className={styles.copy}>Website by Marf Inc.</p>
          </div>
        </section>
        <ResponsiveImage
          initialPhoto={illustrationLight}
          secondaryPhoto={illustrationDark}
          initialClass={`${styles.heart} ${styles.heart_light}`}
          secondaryClass={`${styles.heart} ${styles.heart_dark}`}
        />
      </footer>
    </>
  );
}
