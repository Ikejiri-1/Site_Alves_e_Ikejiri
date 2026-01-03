"use client";
import styles from "./areas.module.css";
import { useEffect, useRef, useState } from "react";

const areas = [
  {
    id: 1,
    tabs: "TRIBUTÁRIO",
    content: [
      {
        id: 1.1,
        description:
          "Defesas em processos judiciais de <span>execução fiscal</span> nas esferas federal, estadual e municipal.",
      },
      {
        id: 1.2,
        description:
          "Assessoria e condução de parcelamneto de débitos fiscais para a obtenção de melhores condições de pagamento.",
      },
    ],
  },
  {
    id: 2,
    tabs: "CIVIL",
    content: [
      {
        id: 2.1,
        description:
          "Litígios que envolvam a posse e propriedade de bens móveis e ímoveis",
      },
      {
        id: 2.2,
        description: "Disputas contratuais",
      },
      {
        id: 2.3,
        description: "Ações indenizatórias",
      },
    ],
  },
  {
    id: 3,
    tabs: "FAMÍLIA",
    content: [
      {
        id: 3.1,
        description: "Divórcio",
      },
      {
        id: 3.2,
        description: "Reconhecimento e dissolução de união estável",
      },
      {
        id: 3.3,
        description: "Alimentos",
      },
      {
        id: 3.4,
        description: "Guarda e visita",
      },
      {
        id: 3.5,
        description: "Partilha de bens",
      },
      {
        id: 3.6,
        description: "Inventários",
      },
    ],
  },
  {
    id: 4,
    tabs: "PREVIDENCIÁRIO",
    content: [
      {
        id: 4.1,
        description:
          "Assessoria e condução de pedido de benefício de prestação continuada -BPC-LOAS",
      },
      {
        id: 4.2,
        description: "Planejamento previdenciário",
      },
    ],
  },
];
export const Areas = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!tabsRef.current || !indicatorRef.current) return;

    const activeTab = tabsRef.current.children[activeIndex + 1] as HTMLElement;

    indicatorRef.current.style.width = `${activeTab.offsetWidth}px`;
    indicatorRef.current.style.transform = `translateX(${activeTab.offsetLeft}px)`;
  }, [activeIndex]);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Áreas de Atuação</h1>

      <div className={styles.tabs} ref={tabsRef}>
        <span ref={indicatorRef} className={styles.indicator} />

        {areas.map((area, index) => (
          <button
            key={area.id}
            className={styles.tab}
            onClick={() => setActiveIndex(index)}
          >
            {area.tabs}
          </button>
        ))}
      </div>

      <div key={activeIndex} className={styles.content}>
        {areas[activeIndex].content.map((c) => (
          <p
            className={styles.description}
            key={c.id}
            dangerouslySetInnerHTML={{ __html: c.description }}
          />
        ))}
      </div>
    </section>
  );
};
