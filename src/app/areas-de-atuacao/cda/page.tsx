import { MainImage } from "@/components/MainImage";
import img from "../../../assets/wpaper.webp";
import styles from "./cda.module.css";
import Table from "@/components/Table";

export default function CDA() {
  const tableContent = [
    {
      id: 1,
      title: "Tributários",
      description: "Impostos, taxas e contribuições de melhoria. ",
    },
    {
      id: 2,
      title: "Não Tributários",
      description: "Multas e outros valores devidos ao ente público.",
    },
  ];
  const effectRiskTable = [
    {
      id: 1,
      title: "Execução Fiscal",
      description:
        "Ajuizamento de ação judicial para penhora e expropriação de bens.",
    },
    {
      id: 2,
      title: "Bloqueio de Certidões",
      description:
        "Impedimento de obter a Certidão Negativa de Débitos (CND), inviabilizando licitações e financiamentos. ",
    },
  ];
  const CDAparagraphs = [
    {
      id: 1,
      content:
        "A inscrição é formalizada através da Certidão de Dívida Ativa (CDA). Este documento é de extrema importância pois contém a identificação do devedor, o valor exato do débito, juros, multas e demaisacréscimos legais.",
    },
    {
      id: 2,
      content:
        "De acordo com o Código de Processo Civil (Art. 784, IX), a CDA possui força para dar início direto à execução fiscal. Isso significa que a Fazenda Pública não precisa comprovar novamente a existência da dívida em juízo para começar a cobrança forçada.",
    },
  ];
  const deadLineTable = [
    {
      id: 1,
      title: "Decadência:",
      description:
        "É o prazo de 5 anos que o Estado tem para constituir o crédito tributário (contados do fato gerador). Se não o fizer, perde o direito de cobrar.",
    },
    {
      id: 2,
      title: "Prescrição:",
      description:
        "É o prazo de 5 anos para a Fazenda Pública cobrar judicialmente o crédito já constituído. A inscrição em Dívida Ativa atua como um marco que interrompe esse prazo, permitindo que o Estado ajuíze a execução fiscal. ",
    },
  ];
  const defenseTable = [
    {
      id: 1,
      title: "Embargos à Execução:",
      description:
        "Contestação da validade da CDA, alegando erros, prescrição ou decadência.",
    },
    {
      id: 2,
      title: "Exceção de Pré-Executividade:",
      description:
        "Permite questionar vícios formais (como falta de notificação) sem a necessidade de garantir o juízo com bens.",
    },
    {
      id: 3,
      title: "Ações Anulatórias:",
      description:
        "Discussão judicial da dívida, muitas vezes acompanhada do depósito integral do valor para suspender a cobrança. ",
    },
  ];
  return (
    <>
      <section>
        <MainImage
          img={img}
          alt=""
          title="Inscrição em dívida ativa"
          description=""
        />
        <div>
          <h1 className={styles.title}>O Que é a Dívida Ativa? </h1>
          <h2 className={styles.subtitle}>
            Ela compreende os créditos do Estado que não foram pagos
            voluntariamente no prazo determinado. Esses créditos podem ser:
          </h2>
          <Table types={tableContent} />
          <p>
            A inscrição ocorre quando o contribuinte, após ser notificado do
            lançamento do crédito tributário (seja de ofício, por declaração ou
            homologação), não realiza o pagamento no prazo legal.
          </p>
          <section>
            <h1>A Certidão de Dívida Ativa (CDA)</h1>
            {CDAparagraphs.map((c, index) => (
              <p key={index}>{c.content}</p>
            ))}
          </section>
          <section>
            <h1>Os Efeitos e Riscos da Inscrição</h1>
            <h2>
              Ignorar um débito inscrito em Dívida Ativa traz consequências
              severas que podem paralisar a atividade de uma empresa ou
              comprometer o patrimônio de uma pessoa física:
            </h2>
            <Table types={effectRiskTable} />
          </section>
          <section>
            <h1>Prazos Importantes: Decadência vs. Prescrição</h1>
            <h2>
              É fundamental que o contribuinte compreenda a diferença entre
              esses dois prazos legais:
            </h2>
            <Table types={deadLineTable} />
          </section>
          <section>
            <h1>Como se defender?</h1>
            <h2>
              Apesar do poder de cobrança do Estado, o contribuinte possui
              garantias legais de defesa em todas as fases. As principais
              ferramentas são:
            </h2>
            <Table types={defenseTable} />
          </section>
          <section>
            <h4>
              A inscrição em Dívida Ativa marca a transição da cobrança
              administrativa para a esfera judicial, conferindo à Fazenda
              Pública um instrumento de alta eficácia: a Certidão de Dívida
              Ativa (CDA). Esse documento possui força de título executivo,
              permitindo que o Estado inicie medidas de expropriação de bens sem
              a necessidade de um processo de conhecimento prévio.
            </h4>
            {/* Botão CTA */}
          </section>
        </div>
      </section>
    </>
  );
}
