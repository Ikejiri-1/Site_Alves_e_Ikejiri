import { MainImage } from "@/components/MainImage";
import img from "../assets/wpaper.webp";
import { Objectives } from "@/components/Objectives";
import styles from "./page.module.css";
import { Areas } from "@/components/Areas";

export default function Home() {
  return (
    <>
      <section>
        <MainImage img={img} alt="" title="" description="" />
      </section>
      <section className={styles.objectivesSection}>
        <Objectives />
      </section>
      <section>
        <Areas />
      </section>
    </>
  );
}
