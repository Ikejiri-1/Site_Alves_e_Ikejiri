"use client";
import styles from "./table.module.css";

interface TableType {
  title: string;
  description: string;
}

interface TableRow {
  label: string;
  values: string[];
}

interface TableProps {
  types?: TableType[];
  headers?: string[];
  rows?: TableRow[];
}

export default function Table({ types, headers, rows }: TableProps) {
  /* ---------- MODO ANTIGO ---------- */
  if (types && types.length > 0) {
    return (
      <div className={styles.container}>
        <table className={styles.table}>
          <tbody>
            {types.map((t, index) => (
              <tr key={index}>
                <td className={styles.titleCell}>{t.title}</td>
                <td>{t.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  /* ---------- MODO COMPARATIVO ---------- */
  if (headers && rows) {
    return (
      <div className={styles.container}>
        <table className={styles.tableHR}>
          <thead>
            <tr>
              <th className={styles.th}>Característica</th>
              {headers.map((h, i) => (
                <th key={i} className={styles.th}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className={styles.titleCell}>{row.label}</td>
                {row.values.map((v, i) => (
                  <td key={i}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}
