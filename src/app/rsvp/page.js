"use client";

import { rsvp_photo } from "../data/photos";
import Responsive_Image_Layout from "../components/Responsive_Image_Layout";
import RSVP_Form from "../components/forms/Rsvp_Form";

import styles from "../styling/rsvp.module.css";

export default function Rsvp() {
  return (
    <main className={styles.page_body}>
      <div className={styles.content_wrapper}>
        <article className={styles.header_container}>
          <RSVP_Form />
        </article>
        <Responsive_Image_Layout
          photoData={rsvp_photo}
          className={styles.image}
        />
      </div>
    </main>
  );
}
