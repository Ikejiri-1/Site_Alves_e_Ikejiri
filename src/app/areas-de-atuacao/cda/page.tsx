import { MainImage } from "@/components/MainImage";
import img from "../../../assets/wpaper.webp";

export default function CDA() {
  return (
    <>
      <section>
        <MainImage
          img={img}
          alt=""
          title="Inscrição em dívida ativa"
          description=""
        />
        <h1>CDA</h1>
      </section>
    </>
  );
}
