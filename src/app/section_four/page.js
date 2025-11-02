"use client";

import Image from "next/image";
import usePhotoGallery from "../components/usePhotoGallery";
import { engagement_photos_mobile, engagement_photos_pc } from "../data/photos";
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

export default function SectionFour() {
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
      <h1 className={styles.heading}>Photo Gallery</h1>
      <section className={styles.photo_container}>
        <button className={styles.gallery_button} onClick={handlePrev}>
          <IoChevronBackCircle />
        </button>
        {/* Render vertical photos */}
        {!isHorizontal && currentImageObj && (
          <VerticalPhotoCards
            currentPhoto={currentImageObj}
            nextPhoto={nextImageObj}
          />
        )}
        {/* Render horizontal photo*/}
        {isHorizontal && pcPhoto && <HorizontalPhotoCard photo={pcPhoto} />}
        <button className={styles.gallery_button} onClick={handleNext}>
          <IoChevronForwardCircle />
        </button>
      </section>
    </main>
  );
}
