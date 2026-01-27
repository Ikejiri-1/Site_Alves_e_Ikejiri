"use client";

import { Cards } from "@/components/Cards";
import styles from "./areas.module.css";
import { MainImage } from "@/components/MainImage";
import img from "../../assets/wpaper.webp";
import { JSX, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function AreasDeAtuacao() {
  type Card = {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    flippedTitle: string;
    flippedContent: string;
    flipped: boolean;
    href?: string;
    linkText?: string;
    icon?: JSX.Element;
    showIcon?: boolean;
  };
  const [cards, setCards] = useState<Card[]>([
    {
      id: 1,
      title: "CDA",
      subtitle: "Inscrição em Dívida Ativa: O Que Você Precisa Saber",
      content: "",
      flippedTitle: "Titulo Virado",
      flippedContent: "",
      flipped: false,
      linkText: "Saiba Mais",
      href: "/areas-de-atuacao/cda",
      showIcon: true,
    },
    {
      id: 2,
      title: "Execução Fiscal",
      subtitle: " Entenda o que é e quais os riscos de ignorar esta ação",
      content: "",
      flippedTitle: "",
      flippedContent: "",
      flipped: false,
      showIcon: true,
    },
    {
      id: 3,
      title: "Prescrição Intercorrente",
      subtitle: "Quando o Tempo Extingue a Execução Fiscal",
      content: "",
      flippedTitle: "",
      flippedContent: "",
      flipped: false,
      showIcon: true,
    },
    {
      id: 4,
      title: "SISBAJUD",
      subtitle:
        'O Bloqueio "Teimosinha" do SISBAJUD: Como se Proteger Legalmente ',
      content: "",
      flippedTitle: "",
      flippedContent: "",
      flipped: false,
      showIcon: true,
    },
    {
      id: 5,
      title: "Transação Tributária",
      subtitle:
        "Regularização de Dívidas: Transação Tributária e Parcelamentos Fiscais",
      content: "",
      flippedTitle: "",
      flippedContent: "",
      flipped: false,
      showIcon: true,
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
              className={styles.areaCard}
              key={card.id}
              onClick={() => toggleFlip(card.id)}
              title={card.title}
              subtitle={card.subtitle}
              flippedTitle={card.flippedTitle}
              flippedContent={card.flippedContent}
              flipped={card.flipped}
              linkText={card.linkText}
              href={card.href}
              showIcon={card.showIcon}
              icon={<ArrowRight size={30} />}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
