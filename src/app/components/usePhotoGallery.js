"use client";

import { useState } from "react";
import { engagement_photos_pc } from "../data/photos";

const usePhotoGallery = (photos) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImageObj = photos[currentIndex];

  // Check if current photo is horizontal
  const pcPhoto = engagement_photos_pc.find(
    (p) => p.name === currentImageObj?.name
  );
  const isHorizontal = pcPhoto !== undefined;

  const handleNext = () => {
    setCurrentIndex((prev) => {
      // If current is horizontal, move by 1
      // If current is vertical (showing 2 photos), move by 2
      const step = isHorizontal ? 1 : 2;
      return (prev + step) % photos.length;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      // Need to check if the PREVIOUS photo was horizontal or vertical
      const prevIndex = (prev - 1 + photos.length) % photos.length;
      const prevPhoto = photos[prevIndex];
      const prevPcPhoto = engagement_photos_pc.find(
        (p) => p.name === prevPhoto?.name
      );
      const prevWasHorizontal = prevPcPhoto !== undefined;

      // If previous was horizontal, move by 1
      // If previous was vertical (showing 2 photos), move by 2
      const step = prevWasHorizontal ? 1 : 2;
      return (prev - step + photos.length) % photos.length;
    });
  };

  return { handleNext, handlePrev, currentImageObj, currentIndex };
};

export default usePhotoGallery;
