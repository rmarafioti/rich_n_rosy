"use client";

import { wedding_info_photo } from "../data/photos";
import Responsive_Image_Layout from "../components/Responsive_Image_Layout";

import styles from "../styling/wedding_info.module.css";

export default function Event() {
  return (
    <main>
      <article className={styles.header_container}>
        <div className={styles.header}>
          <p className={styles.intro}>Come celebrate the wedding of</p>
          <h2 className={styles.title}>
            <span className={styles.kern}>R</span>osy Phinick &{" "}
            <span className={styles.kern_two}>R</span>ich Marafioti
          </h2>
        </div>
        <section>
          <div className={styles.schedule}>
            <p className={styles.date}>
              Friday, July 17th &#8226; The Night Before
            </p>
            <div className={styles.info}>
              <p>&#8226; Lonesome Rose</p>
              <p>&#8226; 5310 N Clark St.</p>
              <p>&#8226; 6:30 - 9:30 pm</p>
            </div>
          </div>
          <div className={styles.schedule}>
            <p className={styles.date}>
              Saturday, July 18th &#8226; The Big Day!
            </p>
            <div className={styles.info}>
              <p>&#8226; Colvin House</p>
              <p>&#8226; 5940 N Sheridan Rd.</p>
              <p>&#8226; Please arrive at 4:30 pm</p>
              <p>
                <i>Ceremony at 5 pm with dinner and dancing to follow</i>
              </p>
            </div>
          </div>
          <div className={styles.schedule}>
            <p className={styles.date}>
              Sunday, July 19th &#8226; Post Wedding Party
            </p>
            <div className={styles.info}>
              <p>&#8226; Stay tuned for Sunday's plans!</p>
            </div>
          </div>
        </section>
      </article>
      <Responsive_Image_Layout
        photoData={wedding_info_photo}
        className={styles.image}
      />
    </main>
  );
}
