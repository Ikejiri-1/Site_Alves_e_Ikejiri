import { MainImage } from "@/components/MainImage";
import img from "../assets/wpaper.webp";
import { Objectives } from "@/components/Objectives";
import styles from "./page.module.css";
import { Areas } from "@/components/Areas";
import { Cards } from "@/components/Cards";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const cardData = [
  {
    id: 1,
    title: "Consultoria Jurídica Especializada",
    content:
      " Oferecemos orientação jurídica especializada e totalmente personalizada para cada um de nossos clientes com o objetivo de assegurar a melhor tomada de decisão em cada cenário.",
  },
  {
    id: 2,
    title: "Atuação Extrajudicial e Administrativa",
    content:
      "Lidamos com soluções e procedimentos extrajudiciais e administrativos, desde a solução de conflitos a requerimentos em órgãos públicos.",
  },
  {
    id: 3,
    title: "Atuação no Contencioso",
    content:
      "Atuamos na resolução de disputas em processos judiciais de pessoas dísicas e jurídicas, defendendo seus interesses como autor, réu ou terceiro interessado, sempre em busca do melhor resultado.",
  },
];

export default function Home() {
  return (
    <>
      <section>
        <MainImage img={img} alt="" title="" description="" />
      </section>
      <section className={styles.objectivesSection}>
        <Objectives />
      </section>
      <section className={styles.cardsSection}>
        {cardData.map((c) => {
          return <Cards key={c.id} title={c.title} content={c.content}></Cards>;
        })}
      </section>
      <section>
        <Areas />
      </section>
      <section>
        <WhyChooseUs />
      </section>
    </>
  );
}
