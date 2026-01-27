"use client";

import { Cards } from "@/components/Cards";
import styles from "./areas.module.css";
import { MainImage } from "@/components/MainImage";
import img from "../../assets/wpaper.webp";
import { useState } from "react";

export default function AreasDeAtuacao() {
  type Card = {
    id: number;
    title: string;
    content: string;
    flippedTitle: string;
    flippedContent: string;
    flipped: boolean;
  };
  const [cards, setCards] = useState<Card[]>([
    {
      id: 1,
      title: "CDA",
      content: "",
      flippedTitle: "Titulo Virado",
      flippedContent: "",
      flipped: false,
    },
    {
      id: 2,
      title: "CDA",
      content: "",
      flippedTitle: "",
      flippedContent: "",
      flipped: false,
    },
    {
      id: 3,
      title: "CDA",
      content: "",
      flippedTitle: "",
      flippedContent: "",
      flipped: false,
    },
    {
      id: 4,
      title: "CDA",
      content: "",
      flippedTitle: "",
      flippedContent: "",
      flipped: false,
    },
    {
      id: 5,
      title: "CDA",
      content: "",
      flippedTitle: "",
      flippedContent: "",
      flipped: false,
    },
  ]);

  const toggleFlip = (id: number) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, flipped: !card.flipped } : card,
      ),
    );
  };

  return (
    <>
      <section className={styles.container}>
        <MainImage
          img={img}
          alt=""
          title="Areas de Atuação"
          description=""
        ></MainImage>
      </section>
      <section>
        <ul className={styles.cardContainer}>
          {cards.map((card) => (
            <Cards
              key={card.id}
              onClick={() => toggleFlip(card.id)}
              title={card.title}
              content={card.content}
              flippedTitle={card.flippedTitle}
              flippedContent={card.flippedContent}
              flipped={card.flipped}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
