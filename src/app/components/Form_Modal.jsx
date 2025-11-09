"use client";

import React from "react";
import styles from "../styling/modal.module.css";

export default function Form_Modal({ isOpen, closeModal, children }) {
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
        <h2>Message Sent!</h2>
        <p>Thank you for reaching out. We'll get back to you soon!</p>
        <button onClick={closeModal} className={styles.close_button}>
          Close
        </button>
      </div>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
}
