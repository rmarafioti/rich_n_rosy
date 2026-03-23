"use client";

import Image from "next/image";
import Image_Gallery_Modal from "../_components/Image_Gallery_Modal";
import usePhotoGallery from "../_hooks/usePhotoGallery";
import useVisibilityObserver from "../_hooks/useVisibilityObserver";
import {
  illustrations,
  engagement_photos_mobile,
  full_theatre,
} from "../_data/photos";

import styles from "../_styling/gallery.module.css";

function MobilePhotoCard({ photo, onClick }) {
  const [ref, isVisible] = useVisibilityObserver(0.1);

  return (
    <div
      ref={ref}
      className={`${styles.mobile_photo_layout} ${photo.id === 1 ? styles.hide_on_mobile : ""}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        onClick={onClick}
        className={`${styles.mobile_photo} ${isVisible ? styles.visible : ""}`}
      />
    </div>
  );
}

export default function Gallery() {
  const {
    handleNext,
    handlePrev,
    openModal,
    closeModal,
    currentImageObj,
    currentIndex,
    isOpen,
    photos,
  } = usePhotoGallery(engagement_photos_mobile);

  const marquee_photo = engagement_photos_mobile.find((p) => p.id === 1);
  const popcorn = illustrations.find((p) => p.id === 4);

  return (
    <main>
      <article className={styles.header_container}>
        <section className={styles.copy_container}>
          <h1 className={styles.heading}>
            <span className={styles.kern}>P</span>hoto Gallery
          </h1>
          <p className={styles.tap}>
            <i>*tap photos to view</i>
          </p>
          <p className={styles.copy}>
            <a href="https://www.musicboxtheatre.com/" target="_blank">
              The Music Box Theatre
            </a>
            , first opened in 1929, is a Chicago institution that has stood the
            test of time. This historic theater has premiered our favorite
            movies, welcomed our favorite filmmakers, and become one of our
            favorite date spots.
          </p>
          <Image
            src={marquee_photo.src}
            alt={marquee_photo.alt}
            width={marquee_photo.width}
            height={marquee_photo.height}
            className={styles.marquee_photo}
          />
          <p className={styles.copy} id={styles.copy_bottom}>
            If you asked us to describe our perfect night, we&apos;d be at the
            Music Box with fresh popcorn, the sound of the organ, and
            experiencing the magic of the movies together. Shooting our
            engagement photos in this iconic place that we hold so close to our
            hearts was a dream come true.
          </p>
          <Image
            src={popcorn.src}
            alt={popcorn.alt}
            width={popcorn.width}
            height={popcorn.height}
            className={styles.popcorn}
          />
          <p className={styles.copy_tag}>
            Thank you to The Music Box Theatre and photographer{" "}
            <a href="https://www.jeffperlmancreative.com/" target="_blank">
              Jeff Perlman
            </a>{" "}
            for this unforgettable experience.
          </p>
        </section>
        <section className={styles.mobile_gallery}>
          {engagement_photos_mobile.map((photo, index) => (
            <MobilePhotoCard
              key={photo.id}
              photo={photo}
              onClick={() => openModal(index)}
            />
          ))}
        </section>
      </article>
      <Image
        src={full_theatre.src}
        alt={full_theatre.alt}
        width={full_theatre.width}
        height={full_theatre.height}
        className={styles.background_photo}
        sizes="100vw"
      />
      <Image_Gallery_Modal
        isOpen={isOpen}
        closeModal={closeModal}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={currentIndex}
        currentImageObj={currentImageObj}
        photos={photos}
      />
    </main>
  );
}
