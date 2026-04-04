"use client";

import { wedding_info_photo, illustrations } from "../_data/photos";
import { food_and_drink, experiences, shopping } from "../_data/guideItems";
import Image from "next/image";

import styles from "../_styling/wedding_info.module.css";

function ListItem({ name, link }) {
  return (
    <ul className={styles.list_items}>
      <li>
        <a href={link} target="_blank">
          {name}
        </a>
      </li>
    </ul>
  );
}

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
              <a
                href="https://www.lonesomerose.com/"
                target="_blank"
                className={styles.link}
              >
                Lonesome Rose &#8226; 5310 N Clark St.
              </a>
              <p>6:30 - 9:30 pm</p>
            </div>
            <p className={styles.date}>
              The Big Day! &#8226; Saturday, July 18th
            </p>
            <div className={styles.info}>
              <a
                href="https://colvinhouseevents.com/"
                target="_blank"
                className={styles.link}
              >
                Colvin House &#8226; 5940 N Sheridan Rd.
              </a>
              <p>5 pm - 12 am</p>
            </div>
            <p className={styles.date}>
              Post Wedding Party &#8226; Sunday, July 19th
            </p>
            <div className={styles.info}>
              <p>Stay tuned for Sunday's plans!</p>
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
        <section className={styles.section} id="wedding_details">
          <div className={styles.schedule}>
            <h2 className={styles.sub_header}>Wedding Details</h2>
            <p className={styles.section_title}>Arrival:</p>
            <p className={styles.info}>
              We are so excited to celebrate with you! Colvin House is located
              in the Edgewater neighborhood on the far north side of Chicago.
              Please arrive at the venue at 4:30 pm, as the outdoor ceremony
              will begin promptly at 5:00. Street parking in the area is
              extremely limited, so we highly recommend using a rideshare
              service.{" "}
            </p>
            <p className={styles.section_title}>Wedding Day Information:</p>
            <p className={styles.info_variant}>
              Our ceremony and cocktail hour will be outdoors in Colvin
              House&apos;s courtyard. Dinner will be served inside the mansion
              so guests can enjoy the historic architecture. Our reception will
              be a mix of outdoor and indoors, with the DJ located in the
              courtyard until 10:00 pm. The party continues indoors until 12:00
              am (with snacks!).
            </p>
            <p className={styles.info}>
              Colvin House is a smaller venue. We are unable to accommodate
              plus-ones that were not indicated on invitations. While we love
              your little ones, with the exception of our child and his friend,
              this will be a child-free event.
            </p>
            <p className={styles.section_title}>Dress Code:</p>
            <p className={styles.info}>
              It&apos;s no secret that Rosy and Rich have a unique style, so our
              wedding will celebrate this. Our theme is eclectic glam/cocktail,
              so have fun with color, patterns, and texture. Colvin House is
              close to the lake breeze, but it will be summer in Chicago, so be
              sure to dress accordingly.
            </p>
          </div>
          <Image
            src={pier.src}
            alt={pier.alt}
            width={pier.width}
            height={pier.height}
            className={styles.illustration}
          />
        </section>
        <section className={styles.section_variant} id="travel_information">
          <Image
            src={heat_of_chicago.src}
            alt={heat_of_chicago.alt}
            width={heat_of_chicago.width}
            height={heat_of_chicago.height}
            className={styles.motel}
          />
          <div className={styles.travel}>
            <h3 className={styles.sub_header}>Travel Information</h3>
            <p className={styles.info_variant}>
              Flights to Chicago come into either O&apos;Hare or Midway
              Airports. Colvin House is located in the Edgewater neighborhood on
              the far north side of Chicago. There is a{" "}
              <a
                href="https://www.hilton.com/en/hotels/chiyohx-hampton-chicago-north-loyola-station/?SEO_id=GMB-AMER-HX-CHIYOHX&y_source=1_MzgxMDg4OS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"
                target="_blank"
              >
                Hampton Inn
              </a>{" "}
              near Loyola University, but there are not many hotel options close
              to our wedding venue. However, the rehearsal dinner and wedding
              venues are right off Lakeshore Drive, which is easily accessible
              from downtown Chicago.
            </p>
            <p className={styles.info}>
              Parking near Lonesome Rose and Colvin House is very limited,
              especially on the weekends, so we recommend using a rideshare
              service. Colvin House is close to the Thorndale Red Line stop for
              people using public transportation.
            </p>
          </div>
        </section>
        <section className={styles.section} id="neighborhood_guide">
          <div>
            <div className={styles.guide}>
              <h4 className={styles.sub_header}>Neighborhood Guide</h4>
              <p className={styles.info}>
                We love our neighborhood! If you are traveling, we highly
                recommend exploring Edgewater and Andersonville. Here are some
                of our favorite spots.
              </p>
            </div>
            <div className={styles.lists}>
              <div>
                <p className={styles.section_title}>Food and Drink</p>
                {food_and_drink.map((item) => (
                  <ListItem key={item.id} {...item} />
                ))}
              </div>
              <div>
                <p className={styles.section_title}>Experiences</p>
                {experiences.map((item) => (
                  <ListItem key={item.id} {...item} />
                ))}
              </div>
              <div>
                <p className={styles.section_title}>Shopping</p>
                {shopping.map((item) => (
                  <ListItem key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
          <Image
            src={water_tower.src}
            alt={water_tower.alt}
            width={water_tower.width}
            height={water_tower.height}
            className={styles.water_tower}
          />
        </section>
      </article>
    </main>
  );
}
