"use client";

import Image from "next/image";
import Modal from "../components/Modal";
import usePhotoGallery from "../components/usePhotoGallery";
import useVisibilityObserver from "../components/useVisibilityObserver";
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
    displayPhoto,
    currentIndex,
    isOpen,
    isHorizontal,
    totalPhotos,
  } = usePhotoGallery(engagement_photos_mobile);
  const headerPhoto = feature_photos.find((p) => p.id === 5);

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
      />
      <Modal
        isModalVisible={isOpen}
        closeModal={closeModal}
        photo={displayPhoto}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={currentIndex}
        totalPhotos={totalPhotos}
        isHorizontal={isHorizontal}
      />
    </main>
  );
}
