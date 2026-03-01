"use client";

import { big_day_photo } from "../data/photos";
import Responsive_Image_Layout from "../components/Responsive_Image_Layout";

import styles from "../styling/big_day.module.css";

export default function Event() {
  return (
    <main>
      <article className={styles.header_container}>
        <p className={styles.intro}>Come celebrate the wedding of</p>
        <h2 className={styles.title}>
          <span className={styles.kern}>R</span>osy Phinick &{" "}
          <span className={styles.kern_two}>R</span>ich Marafioti
        </h2>
        <p className={styles.date}>
          Friday, July 17th &#8226; The Night Before
        </p>
        <p className={styles.sub_title}>Lonesome Rose</p>
        <p className={styles.sub_title}>5310 N Clark St.</p>
        <p className={styles.sub_title}>6:30 - 9:30 pm</p>
        <p className={styles.date}>Saturday, July 18th &#8226; The Big Day!</p>
        <section className={styles.address_container}>
          <p className={styles.sub_title}>Colvin House</p>
          <p className={styles.sub_title}>5940 N Sheridan Rd.</p>
          <p className={styles.sub_title}>Arrive at 4:30 pm</p>
          <p className={styles.mobile_sub_title}>Colvin House</p>
          <p className={styles.mobile_sub_title}>5940 N Sheridan Rd.</p>
          <p className={styles.mobile_sub_title}>Chicago</p>
          <p className={styles.copy}>
            *Ceremony at 5 pm with dinner and dancing to follow
          </p>
        </section>
        <p className={styles.copy}>Stay tuned for Sunday's plans!</p>
      </article>
      <Responsive_Image_Layout
        photoData={big_day_photo}
        className={styles.image}
      />
      <p className={styles.mobile_note}>
        5pm outdoor ceremony with reception to follow
      </p>
      <p className={styles.mobile_copy}>More information to come!</p>
    </main>
  );
}
