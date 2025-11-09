"use client";

import React from "react";
import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";
import { IoChevronForwardCircle } from "react-icons/io5";
import { IoChevronBackCircle } from "react-icons/io5";

import styles from "../styling/modal.module.css";

export default function Modal({
  isModalVisible,
  closeModal,
  photo,
  onNext,
  onPrev,
  currentIndex,
  totalPhotos,
  isHorizontal,
}) {
  if (!isModalVisible || !photo) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") onNext();
    if (e.key === "ArrowLeft") onPrev();
  };

  return (
    <div
      className={styles.modal}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className={styles.modalContent}>
        <IoCloseOutline
          onClick={closeModal}
          className={styles.closeButton}
          aria-label="close modal button"
        />

        <div className={styles.photo_container}>
          <div
            className={`${styles.single_photo_layout} ${
              isHorizontal ? styles.horizontal : styles.vertical
            }`}
          >
            <Image
              src={photo.photo}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className={`${styles.photo} ${
                isHorizontal ? styles.photo_horizontal : styles.photo_vertical
              }`}
              priority
            />
          </div>
        </div>
        <div className={styles.button_section}>
          <button
            className={styles.gallery_button}
            onClick={onPrev}
            aria-label="previous photo"
          >
            <IoChevronBackCircle />
          </button>
          <div className={styles.counter}>
            {currentIndex + 1} / {totalPhotos}
          </div>
          <button
            className={styles.gallery_button}
            onClick={onNext}
            aria-label="next photo"
          >
            <IoChevronForwardCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
