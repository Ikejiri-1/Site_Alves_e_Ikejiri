import styles from "./card.module.css";

interface CardsProps {
  title?: string;
  content?: string;
}

export const Cards = ({ title, content }: CardsProps) => {
  return (
    <>
      <article className={styles.card}>
        <h3>{title}</h3>
        <p>{content}</p>
      </article>
    </>
  );
};
