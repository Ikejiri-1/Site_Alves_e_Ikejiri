import { MainImage } from "@/components/MainImage";
import styles from "./sisbajud.module.css";
import img from "../../../assets/wpaper.webp";
import { Cards } from "@/components/Cards";
import Table from "@/components/Table";

interface Card {
  id: number;
  title: string;
  content: string;
}

interface Section {
  id: number;
  title: string;
  subtitle: string;
  cards: Card[];
}
export default function SISBAJUD() {
  const content: Section[] = [
    {
      id: 1,
      title: " A Regra dos 40 Salários Mínimos (Mudança Importante)",
      subtitle:
        "Historicamente, valores até 40 salários mínimos eram considerados impenhoráveis em qualquer conta. No entanto, uma decisão recente do STJ (Tema Repetitivo 1.235) mudou esse cenário em 2024/2025: a proteção não é mais automática. ",
      cards: [
        {
          id: 1,
          title: "Ação necessária:",
          content:
            "O devedor deve agora provocar o juiz ativamente, comprovando que aquele valor é essencial para sua reserva de dignidade ou subsistência. Se você não pedir o desbloqueio fundamentado, o dinheiro continuará retido. ",
        },
      ],
    },
    {
      id: 2,
      title: "Impenhorabilidade de Salários e Verbas Alimentares",
      subtitle:
        "Valores oriundos de salários, aposentadorias, pensões ou benefícios como o BPC/LOAS são protegidos por lei e não podem ser bloqueados pela teimosinha. ",
      cards: [
        {
          id: 2,
          title: "Como agir:",
          content:
            "É necessário apresentar extratos bancários e holerites que comprovem a origem do dinheiro bloqueado. Uma vez provada a natureza alimentar, o juiz deve determinar o desbloqueio imediato.",
        },
      ],
    },
    {
      id: 3,
      title: "Preservação do Capital de Giro (Empresas)",
      subtitle:
        "Para o empresário, a teimosinha pode paralisar a folha de pagamentos e fornecedores.",
      cards: [
        {
          id: 3,
          title: "Tese de defesa:",
          content:
            " É possível alegar o Princípio da Continuidade da Empresa. Se o bloqueio sistemático impedir a sobrevivência do negócio, o advogado pode solicitar a substituição da penhora ou a limitação do percentual bloqueado para garantir que a empresa continue operando.",
        },
      ],
    },
  ];

  const tableContent = [
    {
      id: 1,
      title: "Separação de Contas:",
      description:
        "Nunca misture dinheiro de despesas pessoais (salário) com movimentações empresariais ou de reserva.",
    },
    {
      id: 2,
      title: "Monitoramento Ativo:",
      description:
        "Ter uma assessoria jurídica que monitore o processo permite antecipar a ordem de bloqueio e preparar a defesa antes mesmo do saldo zerar.",
    },
    {
      id: 3,
      title: "Comprovação Documental:",
      description:
        "Mantenha sempre guardados os comprovantes de origem de cada valor depositado em suas contas.",
    },
  ];
  return (
    <>
      <MainImage img={img} alt="" title='SISBAJUD ( " Teimosinha " )' />
      <section>
        <h1>É possível &ldquo;fugir&rdquo; ou cancelar a Teimosinha?</h1>
        <h2>
          Embora o nome sugira algo inescapável, existem estratégias jurídicas
          legítimas para combater bloqueios abusivos ou ilegais.
          &ldquo;Fugir&rdquo; da teimosinha não significa burlar a lei, mas sim
          garantir que seus direitos fundamentais não sejam atropelados pela
          pressa do Fisco.
        </h2>
      </section>
      <section>
        <div className={styles.container}>
          {content.map((c) => (
            <div key={c.id} className={styles.sectionItem}>
              <div className={styles.text}>
                <h2>{c.title}</h2>
                <h3>{c.subtitle}</h3>
              </div>

              <div className={styles.cards}>
                {c.cards.map((card) => (
                  <Cards
                    key={card.id}
                    title={card.title}
                    content={card.content}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1>Excesso de Execução e Menor Onerosidade </h1>
        <h2>
          A execução deve ser feita de forma a causar o menor prejuízo possível
          ao devedor (Art. 805 do CPC). Se o credor já possui outros bens
          penhorados que garantem a dívida (como um imóvel), a ativação da
          teimosinha pode ser considerada um excesso e ser revogada.
        </h2>
        <h3>Dicas de Prevenção</h3>

        <Table types={tableContent} />
        <h4>
          A &ldquo;Teimosinha&rdquo; é uma ferramenta poderosa, mas não
          absoluta. O equilíbrio entre o interesse do credor e a dignidade do
          devedor é o que garante que a execução não se torne uma punição
          impagável.
        </h4>
        {/* Botão CTA */}
      </section>
    </>
  );
}
