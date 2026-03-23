"use client";

import { wedding_info_photo, illustrations } from "../_data/photos";
import Image from "next/image";

import styles from "../_styling/wedding_info.module.css";

export default function Event() {
  const heat_of_chicago = illustrations.find((p) => p.id === 1);
  const water_tower = illustrations.find((p) => p.id === 2);
  const pier = illustrations.find((p) => p.id === 3);

  return (
    <main>
      <section className={styles.header_section}>
        <div className={styles.header}>
          <p className={styles.intro}>Come celebrate the wedding of</p>
          <h1 className={styles.title}>
            <span className={styles.kern}>R</span>osy Phinick &{" "}
            <span className={styles.kern_two}>R</span>ich Marafioti
          </h1>
        </div>
        <Image
          src={wedding_info_photo.src}
          alt={wedding_info_photo.alt}
          width={wedding_info_photo.width}
          height={wedding_info_photo.height}
          className={styles.wedding_info_photo}
          priority
        />
      </section>
      <article className={styles.main}>
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
          <Image
            src={heat_of_chicago.src}
            alt={heat_of_chicago.alt}
            width={heat_of_chicago.width}
            height={heat_of_chicago.height}
          />
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
          <Image
            src={water_tower.src}
            alt={water_tower.alt}
            width={water_tower.width}
            height={water_tower.height}
          />
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
          <Image
            src={pier.src}
            alt={pier.alt}
            width={pier.width}
            height={pier.height}
          />
        </section>
      </article>
    </main>
  );
}
