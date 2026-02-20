import { MainImage } from "@/components/MainImage";
import styles from "./exec.module.css";
import img from "../../../assets/wpaper.webp";
import Table from "@/components/Table";
import { Cards } from "@/components/Cards";

export default function ExecFiscal() {
  const tableContent = [
    {
      id: 1,
      title: "Tributários",
      description:
        "Como o não pagamento de ICMS, IPTU, IPVA, ISS, IRPJ, entre outros.",
    },
    {
      id: 2,
      title: "Não Tributários",
      description:
        "Multas ambientais, multas de trânsito, multas administrativas ou contratuais.",
    },
  ];

  const execFiscCards = [
    {
      id: 1,
      title: "Bloqueio de Contas Bancárias (SISBAJUD):",
      content:
        "O sistema permite o rastreio e bloqueio imediato de valores em contas corrente, poupança e investimentos.",
    },
    {
      id: 2,
      title: "Penhora de Bens:",
      content:
        "Veículos (via RENAJUD), imóveis e até faturamento da empresa podem ser penhorados para garantir o pagamento da dívida. ",
    },
    {
      id: 3,
      title: "Inscrição em Cadastros de Inadimplentes:",
      content:
        " O nome do devedor pode ser incluído no CADIN (Cadastro Informativo de Créditos não Quitados do Setor Público) e em órgãos de proteção ao crédito como Serasa e SPC.",
    },
    {
      id: 4,
      title: "Responsabilidade dos Sócios:",
      content:
        "Em determinados casos de dissolução irregular da empresa ou infração à lei, o redirecionamento da execução pode atingir o patrimônio pessoal dos sócios e administradores (Art. 135 do CTN). ",
    },
  ];
  const importantTable = [
    {
      id: 1,
      title: "Prescrição e Decadência:",
      description: "Quando o Estado perde o prazo legal para cobrar a dívida. ",
    },
    {
      id: 2,
      title: "Nulidade da CDA:",
      description: "Erros formais no título que embasa a execução.",
    },
    {
      id: 3,
      title: "Excesso de Execução:",
      description:
        "Cobrança de valores maiores do que os devidos ou aplicação de juros abusivos.",
    },
    {
      id: 4,
      title: "Impenhorabilidade:",
      description:
        "Proteção de bens indispensáveis, como o bem de família ou ferramentas de trabalho.",
    },
  ];

  return (
    <>
      <MainImage img={img} alt="" title="Execução Fiscal" />
      <section>
        <h1>O que é a Execução fiscal?</h1>
        <h2>
          A execução fiscal é o procedimento judicial que a Fazenda Pública
          utiliza para cobrar créditos devidos ao erário. Esses créditos podem
          ser:
        </h2>
        <Table types={tableContent} />
        <p>
          O processo é fundamentado na Certidão de Dívida Ativa (CDA). Este
          documento goza de presunção de certeza e liquidez, o que significa que
          o Estado não precisa provar a dívida novamente no início da ação; cabe
          ao devedor apresentar sua defesa para contestar os valores ou a
          legalidade da cobrança.
        </p>
      </section>
      <section>
        <h1>O Prazo Crítico: 5 Dias</h1>
        <h2>
          Ao ser citado em uma execução fiscal, o executado tem o prazo de
          apenas 5 (cinco) dias para:
        </h2>
        <p>
          1. Efetuar o pagamento integral do débito (acrescido de juros,
          correção monetária e honorários);
        </p>
        <p>
          2. Garantir a execução mediante depósito em dinheiro, fiança bancária,
          seguro garantia ou indicação de bens à penhora.
        </p>
        <span>
          Atenção: Se nada for feito nesse curto período, o juiz poderá
          determinar imediatamente o bloqueio de valores e bens.
        </span>
      </section>
      <section>
        <h1>Os Riscos de Ignorar a Execução Fiscal</h1>
        <h2>
          O silêncio ou a inércia diante de uma execução fiscal pode gerar
          consequências severas e, muitas vezes, irreversíveis ao patrimônio:
        </h2>
        <div className={styles.cardsEF}>
          {execFiscCards.map((cards) => (
            <Cards
              key={cards.id}
              title={cards.title}
              content={cards.content}
              className={styles.EFCard}
            />
          ))}
        </div>
      </section>
      <section>
        <h1>A Importância da Defesa Técnica</h1>
        <h2>
          Diferente do que muitos acreditam, a Execução Fiscal nem sempre é
          absoluta. Existem diversas teses jurídicas que podem ser arguidas por
          um especialista, tais como:
        </h2>
        <Table types={importantTable} />
        <h3>
          As defesas mais comuns são os Embargos à Execução e a Exceção de Pré
          Executividade, cada uma com requisitos específicos que exigem análise
          técnica criteriosa.
        </h3>
        <span>
          Fugir da Execução Fiscal muito provavelmente é a pior das opções. A
          melhor delas é procurar um advogado de sua confiança para que atue
          estrategicamente na sua defesa, mitigando danos e buscando soluções
          eficazes.
        </span>
        {/* Botão CTA */}
      </section>
    </>
  );
}
