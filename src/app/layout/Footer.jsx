"use client";

import Responsive_Image_Theme from "../components/Responsive_Image_Theme";
import { icons, footer_icons } from "../data/photos";

import styles from "../styling/footer.module.css";

export default function Footer() {
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
        <Responsive_Image_Theme
          photoData={footer_icons}
          className={styles.heart}
        />
      </footer>
    </>
  );
}
