"use client";

import ResponsiveImage from "../components/Responsive_Image";
import { icons, footer_icons } from "../data/photos";

import styles from "../styling/footer.module.css";

export default function Footer() {
  const iconLight = icons.find((p) => p.id === 1);
  const iconDark = icons.find((p) => p.id === 2);
  const illustrationLight = footer_icons.find((p) => p.id === 1);
  const illustrationDark = footer_icons.find((p) => p.id === 2);

  return (
    <>
      <footer>
        <ResponsiveImage
          initialPhoto={iconLight}
          secondaryPhoto={iconDark}
          initialClass={`${styles.icon} ${styles.icon_light}`}
          secondaryClass={`${styles.icon} ${styles.icon_dark}`}
        />
        <div>
          <p className={styles.copy}>Rosy & Rich Get Hitched</p>
          <p className={styles.copy}>July 2026 Chicago</p>
          <p className={styles.copy}>Website by Marf Inc.</p>
        </div>
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
