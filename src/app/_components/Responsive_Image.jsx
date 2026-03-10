"use client";

import Image from "next/image";

export default function ResponsiveImage({
  initialPhoto,
  secondaryPhoto,
  initialClass,
  secondaryClass,
}) {
  return (
    <>
      {initialPhoto && (
        <Image
          src={initialPhoto.src}
          alt={initialPhoto.alt}
          width={initialPhoto.width}
          height={initialPhoto.height}
          className={initialClass}
          sizes="100vw"
          priority
        />
      )}
      {secondaryPhoto && (
        <Image
          src={secondaryPhoto.src}
          alt={secondaryPhoto.alt}
          width={secondaryPhoto.width}
          height={secondaryPhoto.height}
          className={secondaryClass}
          priority
        />
      )}
    </>
  );
}
