import { MainImage } from "@/components/MainImage";
import img from "../../../assets/wpaper.webp";
import styles from "./transacao.module.css";
import Table from "@/components/Table";
import { Cards } from "@/components/Cards";

export default function Transaction() {
  const firstTableContent = [
    {
      id: 1,
      title: "Suspensão de atos de cobrança:",
      description:
        "Uma vez formalizado o acordo, suspendem-se leilões e bloqueios de contas. ",
    },
    {
      id: 2,
      title: "Uso de créditos:",
      description:
        "Em certos editais, é possível utilizar créditos de Prejuízo Fiscal e Base de Cálculo Negativa de CSLL para abater parte da dívida.",
    },
    {
      id: 3,
      title: "Prazos alongados:",
      description:
        "Possibilidade de pagamento em até 120 ou 145 meses, dependendo da modalidade e do perfil do contribuinte.",
    },
    {
      id: 4,
      title: "Descontos substanciais:",
      description:
        "Reduções que podem chegar a 65% ou até 70% (no caso de pessoas físicas, micro e pequenas empresas) sobre o valor total de multas, juros e encargos. ",
    },
  ];
  const headersRowsTableContent = {
    headers: [
      "Parcelamento Receita Federal (RFB).",
      "Transação PGFN (Dívida Ativa).",
    ],
    rows: [
      {
        label: "Fase do Débito",
        values: [
          "Administrativa (antes da inscrição).",
          "Judicial ou inscrita em Dívida Ativa.",
        ],
      },
      {
        label: "Descontos",
        values: [
          "Geralmente inexistentes ou limitados a editais raros.",
          "Altos descontos baseados na capacidade de (Capag).",
        ],
      },
      {
        label: "Flexibilidade",
        values: [
          "Regras rígidas e automáticas",
          "Possibilidade de Transação Individual ou por Adesão.",
        ],
      },
      {
        label: "Prazo",
        values: [
          "Geralmente até 60 meses.",
          "Até 120 ou 145 meses em modalidades específicas.",
        ],
      },
      {
        label: "Análise de Risco",
        values: [
          "Não considera a dificuldade financeira real.",
          "Avalia o grau de recuperabilidade do crédito (A, B, C ou D).",
        ],
      },
    ],
  };
  const cardContent = [
    {
      id: 1,
      title: "Diagnóstico Fiscal:",
      description:
        "Analisar se a dívida realmente é devida ou se há prescrição/nulidades antes de confessar o débito para parcelar. ",
    },
    {
      id: 2,
      title: "Cálculo de Capacidade de Pagamento:",
      description:
        'Questionar administrativamente o "Rating" (nota) atribuído pela PGFN se ele não condizer com a realidade financeira da empresa, visando aumentar os descontos.',
    },
    {
      id: 3,
      title: "Segurança Jurídica:",
      description:
        "Garantir que as cláusulas do acordo sejam cumpridas e evitar a rescisão por erros formais, o que acarretaria a perda dos benefícios.",
    },
    {
      id: 4,
      title: "Estratégia de Defesa:",
      description:
        "Em casos de execuções fiscais em curso, o advogado protege o seu patrimônio e coordena a transação com a suspensão do processo judicial de forma estratégica.",
    },
  ];
  return (
    <>
      <MainImage img={img} alt="" />
      <section>
        <h1>O que é a Transação Tributária?</h1>
        <h2>
          Diferente do parcelamento comum, onde apenas se divide a dívida em
          prestações, a Transação Tributária (regulamentada pela Lei nº
          13.988/2020) é um &ldquo;acordo&rdquo; entre o contribuinte e o
          Estado. Nela, o Fisco avalia a capacidade de pagamento do devedor e
          pode oferecer concessões significativas para encerrar o litígio.{" "}
        </h2>
        <h3>Os principais benefícios incluem: </h3>
        <Table types={firstTableContent} />
      </section>
      <section className={styles.pgfnContainer}>
        <div className={styles.tableContainer}>
          <h1>PGFN vs. Receita Federal: Onde estão as melhores vantagens?</h1>
          <h2>
            Muitos contribuintes acreditam que o parcelamento da Receita Federal
            (RFB) e da Procuradoria-Geral da Fazenda Nacional (PGFN) são iguais.
            No entanto, quando a dívida já foi inscrita em Dívida Ativa da União
            (PGFN), as oportunidades de negociação costumam ser muito
            superiores.
          </h2>
          <Table
            headers={headersRowsTableContent.headers}
            rows={headersRowsTableContent.rows}
          />
        </div>
        <div className={styles.textContainer}>
          <h1>A grande vantagem da PGFN:</h1>
          <p>
            O sistema de Transação da Procuradoria permite o &ldquo;ajuste de
            conta&rdquo; conforme a realidade do caixa da empresa. Se o Fisco
            entende que a dívida é de difícil recuperação, os descontos aumentam
            proporcionalmente, algo que raramente ocorre nos parcelamentos
            ordinários da Receita Federal.
          </p>
        </div>
      </section>
      <section>
        <h1>Por que o auxílio de um advogado é indispensável? </h1>

        <div className={styles.cardContainer}>
          <h2>
            Embora os portais (Regularize ou e-CAC) pareçam simples, a escolha
            da modalidade errada pode causar prejuízos financeiros ou a perda de
            prazos fatais. O papel do advogado especializado envolve:{" "}
          </h2>
          <div className={styles.cards}>
            {cardContent.map((c) => (
              <Cards key={c.id} title={c.title} content={c.description} />
            ))}
          </div>
        </div>
        <h3>
          Regularizar a situação fiscal da sua empresa não deve significar o
          sufocamento f inanceiro dela. Através da Transação Tributária, é
          possível encontrar o equilíbrio entre o pagamento do que é devido e a
          preservação do seu patrimônio.
        </h3>
        {/* BOTÂO CTA */}
      </section>
    </>
  );
}
