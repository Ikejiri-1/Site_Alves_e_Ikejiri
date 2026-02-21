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
    flippedTitle: string;
    flippedContent: string;
    flipped: boolean;
    href?: string;
    icon?: JSX.Element;
    showIcon?: boolean;
  };
  const [cards, setCards] = useState<Card[]>([
    {
      id: 1,
      title: "CDA",
      subtitle: "Inscrição em Dívida Ativa: O Que Você Precisa Saber",
      flippedTitle: "CDA",
      flippedContent:
        "A inscrição em Dívida Ativa é uma etapa crucial do processo tributário que formaliza o crédito não pago pelo contribuinte e o transforma em um título executivo extrajudicial. Este procedimento é essencial para que o Estado (União, Estados ou Municípios) possa cobrar judicialmente os débitos e garantir a arrecadação de recursos. ",
      flipped: false,
      href: "/areas-de-atuacao/cda",
      showIcon: true,
    },
    {
      id: 2,
      title: "Execução Fiscal",
      subtitle: " Entenda o que é e quais os riscos de ignorar esta ação",
      flippedTitle: "Execução Fiscal",
      flippedContent:
        "Muitos empresários e pessoas físicas são surpreendidos pela chegada de uma citação judicial informando sobre uma Execução Fiscal. Por se tratar de um processo movido pelo Estado (União, Estados ou Municípios), ele possui ritos próprios e prazos muito mais curtos do que as ações cíveis comuns.",
      href: "/areas-de-atuacao/execucao-fiscal",
      flipped: false,
      showIcon: true,
    },
    {
      id: 3,
      title: "Prescrição Intercorrente",
      subtitle: "Quando o Tempo Extingue a Execução Fiscal",
      flippedTitle: "Prescrição Intercorrente",
      flippedContent:
        "Muitos contribuintes acreditam que, uma vez iniciada uma Execução Fiscal, a dívida durará para sempre. No entanto, o Direito brasileiro pune a inércia do Estado. Se a Fazenda Pública não conseguir localizar o devedor ou bens penhoráveis dentro de um determinado período, ocorre a chamada Prescrição Intercorrente, que resulta na extinção definitiva do processo e da dívida.",
      href: "/areas-de-atuacao/prescricao-intercorrente",
      flipped: false,
      showIcon: true,
    },
    {
      id: 4,
      title: "SISBAJUD",
      subtitle:
        'O Bloqueio "Teimosinha" do SISBAJUD: Como se Proteger Legalmente ',
      flippedTitle: "SISBAJUD",
      flippedContent:
        'Se você possui um processo de Execução em andamento já deve ter ouvido falar da "Teimosinha". Esta ferramenta do sistema SISBAJUD transformou a forma como a Justiça bloqueia contas bancárias, tornando o processo muito mais agressivo para o devedor.',
      flipped: false,
      showIcon: true,
    },
    {
      id: 5,
      title: "Transação Tributária",
      subtitle:
        "Regularização de Dívidas: Transação Tributária e Parcelamentos Fiscais",
      flippedTitle: "Transação Tributária",
      flippedContent:
        "Para empresas e indivíduos que possuem débitos com o Fisco, a busca pela regularidade fiscal é essencial para a manutenção das atividades, obtenção de certidões (CND) e participação em licitações. Hoje, o cenário jurídico brasileiro oferece ferramentas muito mais vantajosas do que os antigos parcelamentos convencionais, com destaque para a Transação Tributária.",
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
