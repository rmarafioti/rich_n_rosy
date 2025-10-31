"use client";

import Image from "next/image";
import usePhotoGallery from "../components/usePhotoGallery";
import { engagement_photos_mobile } from "../data/photos";

import styles from "../styling/gallery.module.css";

export default function section_four() {
  const { handleNext, handlePrev, currentImageObj } = usePhotoGallery(
    engagement_photos_mobile
  );

  return (
    <main>
      <h1>This is the photo gallery</h1>

      {/* Main Photo Display */}
      <section className={styles.photo_container}>
        {currentImageObj && (
          <Image
            src={currentImageObj.photo}
            alt="engagement photo"
            width={currentImageObj.width}
            height={currentImageObj.height}
            className={styles.photo}
          />
        )}
        {/* Navigation Buttons */}
        <div className={styles.button_container}>
          <button onClick={handlePrev}>&#8249;</button>
          <button onClick={handleNext}>&#8250;</button>
        </div>
      </section>
    </main>
  );
}
