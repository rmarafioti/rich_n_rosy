"use client";

import { wedding_info_photo } from "../data/photos";
import Responsive_Image_Layout from "../components/Responsive_Image_Layout";

import styles from "../styling/wedding_info.module.css";

export default function Event() {
  return (
    <main>
      <article className={styles.header_container}>
        <p className={styles.intro}>Come celebrate the wedding of</p>
        <h2 className={styles.title}>
          <span className={styles.kern}>R</span>osy Phinick &{" "}
          <span className={styles.kern_two}>R</span>ich Marafioti
        </h2>
        <section className={styles.schedule}>
          <p className={styles.date}>
            Friday, July 17th &#8226; The Night Before
          </p>
          <p>Lonesome Rose</p>
          <p>5310 N Clark St.</p>
          <p>6:30 - 9:30 pm</p>
          <p className={styles.date}>
            Saturday, July 18th &#8226; The Big Day!
          </p>
          <p>Colvin House</p>
          <p>5940 N Sheridan Rd.</p>
          <p>Arrive at 4:30 pm</p>
          <p>*Ceremony at 5 pm with dinner and dancing to follow</p>
          <p>Stay tuned for Sunday's plans!</p>
        </section>
      </article>
      <Responsive_Image_Layout
        photoData={wedding_info_photo}
        className={styles.image}
      />
    </main>
  );
}
