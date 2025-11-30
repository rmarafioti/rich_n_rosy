"use client";

import Image from "next/image";

export default function ResponsiveImage({
  pcPhoto,
  mobilePhoto,
  pcClass,
  mobileClass,
}) {
  return (
    <>
      {pcPhoto && (
        <Image
          src={pcPhoto.photo}
          alt={pcPhoto.alt}
          width={pcPhoto.width}
          height={pcPhoto.height}
          className={pcClass}
          priority
        />
      )}
      {mobilePhoto && (
        <Image
          src={mobilePhoto.photo}
          alt={mobilePhoto.alt}
          width={mobilePhoto.width}
          height={mobilePhoto.height}
          className={mobileClass}
        />
      )}
    </>
  );
}
