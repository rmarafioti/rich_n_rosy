"use client";

import React from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

import styles from "../styling/modal.module.css";

export default function MessageSentModal({ isModalVisible, closeModal }) {
  return (
    <>
      {isModalVisible && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {/*<Image
              className={styles.mascot}
              src="https://res.cloudinary.com/do4shdwcc/image/upload/v1743860707/Poodle_GoodBoys_va3ted.svg"
              alt="good boys lopgo featuring an illsutarion of a dog with sunglasses"
              width={90}
              height={81}
            />*/}
            <div className={styles.modalSection}>
              <div className={styles.modalSectionTop}>
                <IoCloseOutline
                  onClick={closeModal}
                  className={styles.closeButton}
                  aria-label="close modal button"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
