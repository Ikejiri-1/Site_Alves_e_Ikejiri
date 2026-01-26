import { Cards } from "../Cards";
import styles from "./why.module.css";

const data = [
  {
    id: 1,
    description: "Agilidade na resolução dos casos.",
  },
  {
    id: 2,
    description: "Transparência em cada etapa.",
  },
  {
    id: 3,
    description: "Atendimento personalizado.",
  },
  {
    id: 4,
    description:
      "Profissionais dedicados e com foco na entrega de serviço a nível de excelência.",
  },
];
export const WhyChooseUs = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Por que nos escolher?</h1>
      <div className={styles.content}>
        {data.map((d) => {
          return (
            <Cards key={d.id} className={styles.card}>
              <p className={styles.description}>{d.description}</p>
            </Cards>
          );
        })}
      </div>
    </section>
  );
};
