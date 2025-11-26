"use client";

import ResponsiveImage from "../components/Responsive_Image";
import { icons } from "../data/photos";

import styles from "../styling/footer.module.css";

export default function Footer() {
  const iconLight = icons.find((p) => p.id === 1);
  const iconDark = icons.find((p) => p.id === 2);
  return (
    <>
      <footer>
        <ResponsiveImage
          pcPhoto={iconLight}
          mobilePhoto={iconDark}
          pcClass={`${styles.icon} ${styles.icon_light}`}
          mobileClass={`${styles.icon} ${styles.icon_dark}`}
        />
        <div>
          <p className={styles.copy}>Rosy & Rich Get Hitched</p>
          <p className={styles.copy}>July 2026 Chicago</p>
          <p className={styles.copy}>Website by Marf Inc.</p>
        </div>
      </footer>
    </>
  );
}
