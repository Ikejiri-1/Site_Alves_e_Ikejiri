import styles from "./card.module.css";

interface CardsProps {
  title?: string;
  content?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Cards = ({ title, content, children, className }: CardsProps) => {
  return (
    <>
      <article className={`${styles.card} ${className}`}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
        {children}
      </article>
    </>
  );
};
