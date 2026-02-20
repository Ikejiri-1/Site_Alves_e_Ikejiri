import Link from "next/link";
import styles from "./card.module.css";
import { JSX } from "react";
import { CardButton } from "../CardButton";
import Image, { StaticImageData } from "next/image";

interface CardsProps {
  title?: string;
  subtitle?: string;
  content?: string;
  flippedTitle?: string;
  flippedContent?: string;
  className?: string;
  linkText?: string;
  flipped?: boolean;
  href?: string;
  onClick?: () => void;
  icon?: JSX.Element;
  showIcon?: boolean;
  img?: StaticImageData;
}

export const Cards = ({
  title,
  subtitle,
  content,
  flippedTitle,
  flippedContent,
  className,
  flipped,
  href,
  icon,
  showIcon,
  img,
  onClick,
}: CardsProps) => {
  return (
    <div className={styles.cardWrapper}>
      <article
        className={` ${styles.card} ${flipped ? styles.flipped : ""} ${className}`}
        onClick={onClick}
      >
        <div className={`${styles.face} ${styles.front}`}>
          {img && <Image src={img} alt="" className={styles.image} />}
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.subtitle}>{subtitle}</h4>
          <p className={styles.content}>{content}</p>
          {showIcon && <span className={styles.flipHint}>{icon}</span>}
        </div>

        <div className={`${styles.face} ${styles.back}`}>
          <h3 className={styles.title}>{flippedTitle}</h3>
          <p className={styles.content}>{flippedContent}</p>
          <CardButton className={styles.button}>
            <Link href={href ?? "/"} className={styles.link}>
              Saiba mais
            </Link>
          </CardButton>
        </div>
      </article>
    </div>
  );
};
