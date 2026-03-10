"use client";

import { wedding_info_photo } from "../_data/photos";
import Responsive_Image_Layout from "../_components/Responsive_Image_Layout";

import styles from "../_styling/wedding_info.module.css";

export default function Event() {
  return (
    <main>
      <article className={styles.header_container}>
        <div className={styles.header}>
          <p className={styles.intro}>Come celebrate the wedding of</p>
          <h1 className={styles.title}>
            <span className={styles.kern}>R</span>osy Phinick &{" "}
            <span className={styles.kern_two}>R</span>ich Marafioti
          </h1>
        </div>
        <section className={styles.section} id="eventschedule">
          <div className={styles.schedule}>
            <h2>Event Schdule</h2>
            <p className={styles.date}>
              Friday, July 17th &#8226; The Night Before
            </p>
            <div className={styles.info}>
              <p>Lonesome Rose</p>
              <p>&#8226; 5310 N Clark St.</p>
              <p>&#8226; 6:30 - 9:30 pm</p>
            </div>
          </div>
          <div className={styles.schedule}>
            <p className={styles.date}>
              Saturday, July 18th &#8226; The Big Day!
            </p>
            <div className={styles.info}>
              <p>Colvin House</p>
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
        <section className={styles.section} id="directions">
          <h3>Directions</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
        </section>
        <section className={styles.section} id="thingstodo">
          <h4>Things To Do</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
        </section>
      </article>
    </main>
  );
}
