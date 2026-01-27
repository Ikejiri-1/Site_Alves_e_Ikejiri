import styles from "./card.module.css";

interface CardsProps {
  title?: string;
  content?: string;
  flippedTitle?: string;
  flippedContent?: string;
  flipped?: boolean;
  onClick?: () => void;
}

export const Cards = ({
  title,
  content,
  flippedTitle,
  flippedContent,
  flipped,
  onClick,
}: CardsProps) => {
  return (
    <div className={styles.cardWrapper}>
      <article
        className={`${styles.card} ${flipped ? styles.flipped : ""}`}
        onClick={onClick}
      >
        <div className={`${styles.face} ${styles.front}`}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.content}>{content}</p>
        </div>

        <div className={`${styles.face} ${styles.back}`}>
          <h3 className={styles.title}>{flippedTitle}</h3>
          <p className={styles.content}>{flippedContent}</p>
        </div>
      </article>
    </div>
  );
};
