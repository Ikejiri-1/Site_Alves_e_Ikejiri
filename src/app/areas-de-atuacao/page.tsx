"use client";

import { Cards } from "@/components/Cards";
import styles from "./areas.module.css";
import { MainImage } from "@/components/MainImage";
import img from "../../assets/wpaper.webp";

export default function AreasDeAtuacao() {
  const cardData = [
    {
      id: 1,
      title: "CDA",
      content: "",
      flippedContent: "",
      flipped: false,
    },
  ];

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
      <Cards />
    </>
  );
}
