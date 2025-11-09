"use client";

import { useState } from "react";
import { engagement_photos_pc } from "../data/photos";

const usePhotoGallery = (photos) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const currentImageObj = photos[currentIndex];

  // Check if current photo is horizontal (use PC version if available)
  const pcPhoto = engagement_photos_pc.find(
    (p) => p.name === currentImageObj?.name
  );
  const isHorizontal = pcPhoto !== undefined;

  // Get the appropriate photo to display (PC version for horizontal, mobile for vertical)
  const displayPhoto = isHorizontal ? pcPhoto : currentImageObj;

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return {
    handleNext,
    handlePrev,
    openModal,
    closeModal,
    displayPhoto,
    currentIndex,
    isOpen,
    isHorizontal,
    totalPhotos: photos.length,
  };
};

export default usePhotoGallery;
