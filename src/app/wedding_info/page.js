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
          <p className={styles.title}>
            <span className={styles.kern}>R</span>osy Phinick &{" "}
            <span className={styles.kern_two}>R</span>ich Marafioti
          </p>
          <div className={styles.event_schedule}>
            <h1 className={styles.event_header}>Event Schedule</h1>
            <p className={styles.date}>
              The Night Before &#8226; Friday, July 17th
            </p>
            <div className={styles.info}>
              <p>Lonesome Rose &#8226; 5310 N Clark St.</p>
              <p>6:30 - 9:30 pm</p>
            </div>
            <p className={styles.date}>
              The Big Day! &#8226; Saturday, July 18th
            </p>
            <div className={styles.info}>
              <p>Colvin House &#8226; 5940 N Sheridan Rd.</p>
              <p>5 pm - 12 am</p>
            </div>
            <p className={styles.date}>
              Post Wedding Party &#8226; Sunday, July 19th
            </p>
            <div className={styles.info}>
              <p>&#8226; Stay tuned for Sunday's plans!</p>
            </div>
          </div>
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
            <h2>Wedding Details</h2>
            <p className={styles.date}>Arrival:</p>
            <p>
              We are so excited to celebrate with you! Colvin House is located
              in the Edgewater neighborhood on the far north side of Chicago.
              Please arrive at the venue at 4:30 pm, as the outdoor ceremony
              will begin promptly at 5:00. Street parking in the area is
              extremely limited, so we highly recommend using a rideshare
              service.{" "}
            </p>
            <p className={styles.date}>Wedding Details:</p>
            <p>
              Our ceremony and cocktail hour will be outdoors in Colvin
              House&apos;s courtyard. Dinner will be served inside the mansion
              so guests can enjoy the historic architecture. Our reception will
              be a mix of outdoor and indoors, with the DJ located in the
              courtyard until 10:00 pm. The party continues indoors until 12:00
              am (with snacks!).
            </p>
            <p>
              Colvin House is a smaller venue. We are unable to accommodate
              plus-ones that were not indicated on invitations. While we love
              your little ones, with the exception of our child and his friend,
              this will be a child-free event.
            </p>
            <p className={styles.date}>Dress Code:</p>
            <p>
              It&apos;s no secret that Rosy and Rich have a unique style, so our
              wedding will celebrate this. Our theme is eclectic glam/cocktail,
              so have fun with color, patterns, and texture. Colvin House is
              close to the lake breeze, but it will be summer in Chicago, so be
              sure to dress accordingly.
            </p>
          </div>
          <Image
            src={heat_of_chicago.src}
            alt={heat_of_chicago.alt}
            width={heat_of_chicago.width}
            height={heat_of_chicago.height}
          />
        </section>
        <section className={styles.section} id="directions">
          <h3>Travel Information</h3>
          <p>
            Flights to Chicago come into either O&apos;Hare or Midway Airports.
            Colvin House is located in the Edgewater neighborhood on the far
            north side of Chicago. There is a Hampton Inn near Loyola
            University, but there are not many hotel options close to our
            wedding venue. However, the rehearsal dinner and wedding venues are
            right off Lakeshore Drive, which is easily accessible from downtown
            Chicago.
          </p>
          <p>
            Parking near Lonesome Rose and Colvin House is very limited,
            especially on the weekends, so we recommend using a rideshare
            service. Colvin House is close to the Thorndale Red Line stop for
            people using public transportation.
          </p>
          <Image
            src={water_tower.src}
            alt={water_tower.alt}
            width={water_tower.width}
            height={water_tower.height}
          />
        </section>
        <section className={styles.section} id="thingstodo">
          <h4>Neighborhood Guide</h4>
          <p>
            We love our neighborhood! If you are traveling, we highly recommend
            exploring Edgewater and Andersonville. Here are some of our favorite
            spots:
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
