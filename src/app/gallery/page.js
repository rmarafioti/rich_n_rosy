"use client";

import Image from "next/image";
import Image_Gallery_Modal from "../components/Image_Gallery_Modal";
import usePhotoGallery from "../hooks/usePhotoGallery";
import useVisibilityObserver from "../hooks/useVisibilityObserver";
import { engagement_photos_mobile, feature_photos } from "../data/photos";

import styles from "../styling/gallery.module.css";

function MobilePhotoCard({ photo, onClick }) {
  const [ref, isVisible] = useVisibilityObserver(0.1);

  return (
    <div ref={ref} className={styles.mobile_photo_layout}>
      <Image
        src={photo.photo}
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
  const headerPhoto = feature_photos.find((p) => p.id === 5);

  return (
    <main>
      <div className={styles.header_container}>
        <div className={styles.copy_container}>
          <h1 className={styles.heading}>
            <span className={styles.kern}>P</span>hoto Gallery
          </h1>
          <p className={styles.copy}>
            <a href="https://www.musicboxtheatre.com/" target="_blank">
              The Music Box Theatre
            </a>
            , first opened in 1929, is a Chicago institution that has stood the
            test of time. This historic theater has premiered our favorite
            movies, welcomed our favorite filmmakers, and become one of our
            favorite date spots. If you asked us to describe our perfect night,
            we&apos;d be at the Music Box with fresh popcorn, the sound of the
            organ, and experiencing the magic of the movies together. Shooting
            our engagement photos in this iconic place that we hold so close to
            our hearts was a dream come true.
          </p>
          <p className={styles.copy_tag}>
            Thank you to The Music Box Theatre and photographer{" "}
            <a href="https://www.jeffperlmancreative.com/" target="_blank">
              Jeff Perlman
            </a>{" "}
            for this unforgettable experience.
          </p>
          <p className={styles.tap}>tap photos to view</p>
        </div>
        <div className={styles.mobile_gallery}>
          {engagement_photos_mobile.map((photo, index) => (
            <MobilePhotoCard
              key={photo.id}
              photo={photo}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>
      <Image
        src={headerPhoto.photo}
        alt={headerPhoto.alt}
        width={headerPhoto.width}
        height={headerPhoto.height}
        className={styles.header_photo}
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
