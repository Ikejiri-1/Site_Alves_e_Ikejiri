"use client";
import styles from "./areas.module.css";
import { useState } from "react";

const areas = [
  {
    id: 1,
    name: "Tributário",
    content: [
      {
        id: 1,
        description:
          "Defesas em processos judiciais de <span>execução fiscal</span> nas esferas federal, estadual e municipal.",
      },
    ],
  },
];
export const Areas = () => {
  const [activeArea, setActiveArea] = useState(areas[0]);

  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Áreas de Atuação</h1>
        <div className={styles.tabs}>
          {areas.map((area) => {
            return (
              <button
                key={area.id}
                className={`${styles.tab} ${
                  activeArea.id === area.id ? styles.active : ""
                }`}
                onClick={() => setActiveArea(area)}
              >
                {area.name}
              </button>
            );
          })}
        </div>
        <div className={styles.content}>
          {activeArea.content.map((c) => {
            return (
              <p
                key={c.id}
                dangerouslySetInnerHTML={{ __html: c.description }}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
