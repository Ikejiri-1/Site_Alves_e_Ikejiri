"use client";

import Image, { StaticImageData } from "next/image";
import styles from "./mainimage.module.css";

interface MainImageProps {
  img: StaticImageData;
  title?: string;
  alt: string;
  description?: string;
}

export function MainImage({ img, title, alt, description }: MainImageProps) {
  return (
    <div className={styles.mainImageContainer}>
      <div className={styles.mainImage}>
        <Image
          src={img}
          alt={alt}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      {title && (
        <div className="main-image-title">
          <div className="slide-wrapper-title">{title}</div>
        </div>
      )}

      {description && (
        <div className="main-image-description">
          <div className="slide-wrapper-description">{description}</div>
        </div>
      )}
    </div>
  );
}
