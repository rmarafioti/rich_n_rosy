"use client";

import React from "react";
import Image from "next/image";
import { form_photo } from "../../data/photos";
import { IoCloseOutline } from "react-icons/io5";

import styles from "../../styling/form_modal.module.css";

export default function Form_Modal({ isOpen, closeModal, children }) {
  const formPhoto = form_photo;
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
  };

  return (
    <div
      className={styles.modal}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className={styles.success_modal}>
        <section className={styles.copy_section}>
          <div>
            <h2 className={styles.heading}>Message Sent!</h2>
            <p className={styles.message}>
              We look forward to reading your message.
            </p>
          </div>
          <div>
            <IoCloseOutline
              onClick={closeModal}
              className={styles.closeButton}
              aria-label="close modal button"
            />
          </div>
        </section>
        <Image
          src={formPhoto.src}
          alt={formPhoto.alt}
          width={formPhoto.width}
          height={formPhoto.height}
          className={styles.form_photo}
        />
      </div>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
}
