"use client";

import styles from "../_styling/wedding_registry.module.css";

export default function Registry() {
  return (
    <main>
      <article className={styles.header_container}>
        <h1 className={styles.title}>Wedding Registry</h1>
        <p className={styles.sub_title}>
          Your presence at our wedding is a present in itself!
        </p>
        <p className={styles.copy}>
          {" "}
          If you are looking for gift ideas, we have created a registry with our
          wishlist. Thank you in advance for the love and generosity you have
          shown us, whether through our registry or in your own way.
        </p>
        <button className={styles.button}>Wedding Registry</button>
      </article>
    </main>
  );
}
