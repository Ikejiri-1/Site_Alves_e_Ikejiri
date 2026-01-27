"use client";

import { Cards } from "../Cards";
import styles from "./why.module.css";
import agil from "../../../public/assets/agil.png";
import foco from "../../../public/assets/foco.png";
import pessoas from "../../../public/assets/pessoas-de-negocio.png";
import saudacao from "../../../public/assets/saudacao-de-duas-maos-de-empresarios.png";

const data = [
  {
    id: 1,
    description: "Agilidade na resolução dos casos.",
    icon: agil,
  },
  {
    id: 2,
    description: "Transparência em cada etapa.",
    icon: foco,
  },
  {
    id: 3,
    description: "Atendimento personalizado.",
    icon: pessoas,
  },
  {
    id: 4,
    description:
      "Profissionais dedicados e com foco na entrega de serviço a nível de excelência.",
    icon: saudacao,
  },
];
export const WhyChooseUs = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Por que nos escolher?</h1>
      <div className={styles.content}>
        {data.map((d) => {
          return (
            <Cards
              img={d.icon}
              key={d.id}
              className={styles.card}
              subtitle={d.description}
            ></Cards>
          );
        })}
      </div>
    </section>
  );
};
