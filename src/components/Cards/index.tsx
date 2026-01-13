import styles from "./card.module.css";

interface CardsProps {
  title?: string;
  content?: string;
}

export const Cards = ({ title, content }: CardsProps) => {
  return (
    <>
      <article className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
      </article>
    </>
  );
};
