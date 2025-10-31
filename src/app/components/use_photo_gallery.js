import { useState } from "react";

const use_photo_gallery = (photos) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const currentImageObj = photos.length > 0 ? photos[currentIndex] : null;

  const imageUrl = currentImageObj ? currentImageObj.photo : "";

  return {
    currentIndex,
    setCurrentIndex,
    handleNext,
    handlePrev,
    currentImageObj,
    imageUrl,
  };
};

export default use_photo_gallery;
