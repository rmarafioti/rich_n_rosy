"use client";

import React from "react";
import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";
import { IoChevronForwardCircle } from "react-icons/io5";
import { IoChevronBackCircle } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";

import styles from "../styling/modal.module.css";

export default function Gallery_Modal({
  isOpen,
  closeModal,
  onNext,
  onPrev,
  currentIndex,
  currentImageObj,
  photos,
}) {
  if (!isOpen || !currentImageObj) return null;

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
        <div className={styles.section}>
          <button
            className={styles.gallery_button}
            onClick={onPrev}
            aria-label="previous photo"
          >
            <IoChevronBackCircle />
          </button>
          <Image
            src={currentImageObj.photo}
            alt={currentImageObj.alt}
            width={currentImageObj.width}
            height={currentImageObj.height}
            className={styles.photo}
            priority
          />
          <button
            className={styles.gallery_button}
            onClick={onNext}
            aria-label="next photo"
          >
            <IoChevronForwardCircle />
          </button>
          <div className={styles.close_container}>
            <IoCloseOutline
              onClick={closeModal}
              className={styles.closeButton}
              aria-label="close modal button"
            />
          </div>
        </div>
        <div className={styles.indicator_section}>
          <div className={styles.indicators}>
            {photos.map((photo, index) => (
              <FaCircle
                key={photo.id}
                className={`${styles.indicator} ${
                  index === currentIndex ? styles.active : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
