import styles from "./objectives.module.css";
const objectivesList = [
  {
    id: 1,
    description:
      "Nosso objetivo é entregar aos nossos clientes serviços a nível de excelência.",
  },
  {
    id: 2,
    description:
      "Todos os atendimentos são realizados de maneira criteriosa, proporcionando defesas totalmente personalizadas para cada caso.",
  },
  {
    id: 3,
    description:
      "Cada cliente recebe cuidado exclusivo para que todas as peculiaridades de seu caso sejam atendidas.",
  },
  {
    id: 4,
    description:
      "Trabalhamos com a qualidade técnica necessária e com total dedicação para sempre entregarmos o melhor resultado para nossos clientes.",
  },
];

export const Objectives = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        Defendemos os interesses dos nossos clientes com dedicação e eficiência
      </h1>
      <div className={styles.wrapper}>
        {objectivesList.map((o) => {
          return (
            <div key={o.id} className={styles.card}>
              <p className={styles.description}>{o.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
