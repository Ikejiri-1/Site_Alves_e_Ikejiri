import styles from "./presc.module.css";
import img from "../../../assets/wpaper.webp";
import { MainImage } from "@/components/MainImage";
import { Cards } from "@/components/Cards";
import Table from "@/components/Table";

export default function PrescIntercorrent() {
  const prescCardContent = [
    {
      id: 1,
      title: "Suspensão do Processo:",
      description:
        "Se a Fazenda Pública não encontrar o devedor ou bens para penhorar, o juiz suspende a execução por 1 (um) ano. Durante esse período, o prazo prescricional não corre.",
    },
    {
      id: 2,
      title: "Arquivamento Automático:",
      description:
        "Findo esse prazo de um ano sem que bens ou o devedor tenham sido localizados, o processo é arquivado automaticamente. ",
    },
    {
      id: 3,
      title: "Início da Contagem:",
      description:
        "É a partir deste arquivamento automático que começa a correr o prazo da prescrição intercorrente, que geralmente é de 5 (cinco) anos.",
    },
    {
      id: 4,
      title: "Reconhecimento da Prescrição:",
      description:
        " Se, após esses 5 anos, a Fazenda Pública não tiver diligenciado de forma efetiva (encontrando bens), o juiz deve declarar a prescrição e extinguir o processo. ",
    },
  ];

  const defenseTableContent = [
    {
      id: 1,
      title: "Extinção do Débito:",
      description:
        "O reconhecimento da prescrição extingue o crédito tributário, limpando o nome do devedor e liberando eventuais restrições.",
    },
    {
      id: 2,
      title: "Segurança Jurídica:",
      description:
        "Impede que o Estado cobre dívidas de décadas atrás, cujos documentos o contribuinte muitas vezes nem possui mais.",
    },
    {
      id: 3,
      title: "Economia:",
      description:
        "Evita o pagamento de multas e juros que, em processos muito antigos, costumam ultrapassar o valor do próprio imposto devido.",
    },
  ];
  const lawyerActionTableContent = [
    {
      id: 1,
      title: "Auditoria de Datas:",
      description:
        "Verificar exatamente quando ocorreu a ciência da não localização de bens e quando se iniciou o arquivamento automático.",
    },
    {
      id: 2,
      title: "Peticionamento Estratégico:",
      description:
        "Apresentar a Exceção de Pré-Executividade ou os Embargos à Execução demonstrando que o prazo de 5 anos já transcorreu sem interrupções válidas.",
    },
    {
      id: 3,
      title: "Combater Movimentações Inúteis: ",
      description:
        "O STJ entende que pedidos da Fazenda Pública que não resultam na localização de bens (como simples pedidos de novos bloqueios sem provas) não interrompem o prazo prescricional. ",
    },
  ];
  return (
    <>
      <MainImage img={img} alt="" />
      <section>
        <h1>Como funciona o prazo da Prescrição Intercorrente?</h1>

        <div className={styles.cardPrescContainer}>
          <div>
            <h2 className={styles.cardContainerTitle}>
              O rito da prescrição intercorrente segue uma cronologia rigorosa
              prevista no Art. 40 da Lei nº 6.830/80 (LEF) e detalhada pelo
              Superior Tribunal de Justiça (STJ):
            </h2>
          </div>
          <div className={styles.cardContainer}>
            {prescCardContent.map((c, index) => (
              <Cards key={index} title={c.title} content={c.description} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <h1>O Marco Decisivo: Tema 566 do STJ</h1>
        <h2>
          Um ponto crucial que o contribuinte deve saber é que a contagem do
          prazo de prescrição independe de uma decisão formal do juiz ou de uma
          intimação da Fazenda Pública.
        </h2>
        <p>
          De acordo com o STJ, o prazo de um ano de suspensão começa
          automaticamente na data em que a Fazenda é cientificada de que não
          foram encontrados bens ou o devedor. Isso evita que o processo fique
          &ldquo;eterno&ldquo; por falta de movimentação do Judiciário ou do
          Fisco.
        </p>
      </section>
      <section>
        <h1>Por que esta é uma das melhores defesas para o contribuinte?</h1>
        <h2>
          A prescrição intercorrente é uma tese de &ldquo; ordem pública
          &ldquo;. Seus principais benefícios são:
        </h2>
        <Table types={defenseTableContent} />
      </section>
      <section>
        <h1>O Papel do Advogado</h1>
        <h2>
          Identificar a prescrição intercorrente exige uma análise minuciosa da
          linha do tempo do processo:
        </h2>
        <Table types={lawyerActionTableContent} />
      </section>
    </>
  );
}
