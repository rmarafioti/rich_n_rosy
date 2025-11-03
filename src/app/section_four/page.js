"use client";

import Image from "next/image";
import usePhotoGallery from "../components/usePhotoGallery";
import useVisibilityObserver from "../components/useVisibilityObserver";
import {
  engagement_photos_mobile,
  engagement_photos_pc,
  feature_photos,
} from "../data/photos";
import { IoChevronForwardCircle } from "react-icons/io5";
import { IoChevronBackCircle } from "react-icons/io5";

import styles from "../styling/gallery.module.css";

function VerticalPhotoCards({ currentPhoto, nextPhoto }) {
  return (
    <div className={styles.double_photo_layout}>
      <Image
        src={currentPhoto.photo}
        alt={currentPhoto.alt}
        width={currentPhoto.width}
        height={currentPhoto.height}
        className={styles.photo_vertical}
      />
      {nextPhoto && (
        <Image
          src={nextPhoto.photo}
          alt={nextPhoto.alt}
          width={nextPhoto.width}
          height={nextPhoto.height}
          className={styles.photo_vertical}
        />
      )}
    </div>
  );
}

function HorizontalPhotoCard({ photo }) {
  return (
    <div className={styles.single_photo_layout}>
      <Image
        src={photo.photo}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        className={styles.photo_horizontal}
      />
    </div>
  );
}

function MobilePhotoCard({ photo }) {
  const [ref, isVisible] = useVisibilityObserver(0.1);

  return (
    <div ref={ref} className={styles.mobile_photo_layout}>
      <Image
        src={photo.photo}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        className={`${styles.mobile_photo} ${isVisible ? styles.visible : ""}`}
      />
    </div>
  );
}

export default function SectionFour() {
  const headerPhoto = feature_photos.find((p) => p.name === "full_theatre");

  const { handleNext, handlePrev, currentImageObj, currentIndex } =
    usePhotoGallery(engagement_photos_mobile);

  const pcPhoto = engagement_photos_pc.find(
    (p) => p.name === currentImageObj?.name
  );

  const isHorizontal = pcPhoto;

  const nextImageObj =
    !isHorizontal && currentIndex < engagement_photos_mobile.length - 1
      ? engagement_photos_mobile[currentIndex + 1]
      : null;

  return (
    <main>
      <div className={styles.header_container}>
        <div className={styles.copy_container}>
          <h1 className={styles.heading}>Photo Gallery</h1>
          <p className={styles.copy}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className={styles.tap}>tap photos to view</p>
        </div>
        <div className={styles.mobile_gallery}>
          {engagement_photos_mobile.map((photo) => (
            <MobilePhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
      <Image
        src={headerPhoto.photo}
        alt={headerPhoto.alt}
        width={headerPhoto.width}
        height={headerPhoto.height}
        className={styles.header_photo}
      />
      {/*<section className={styles.photo_container}>
        <button className={styles.gallery_button} onClick={handlePrev}>
          <IoChevronBackCircle />
        </button>
        {/* Render vertical photos */}
      {/*{!isHorizontal && currentImageObj && (
          <VerticalPhotoCards
            currentPhoto={currentImageObj}
            nextPhoto={nextImageObj}
          />
        )}
        {/* Render horizontal photo*/}
      {/*{isHorizontal && pcPhoto && <HorizontalPhotoCard photo={pcPhoto} />}
        <button className={styles.gallery_button} onClick={handleNext}>
          <IoChevronForwardCircle />
        </button>
      </section>
      {/* mobile photo view */}
      <section></section>
    </main>
  );
}
