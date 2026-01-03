import styles from "./card.module.css";

interface CardsProps {
  children: React.ReactNode;
}

export const Cards = ({ children }: CardsProps) => {
  return (
    <>
      <article className={styles.card}>{children}</article>
    </>
  );
};
