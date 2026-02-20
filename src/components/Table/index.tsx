"use client";

import styles from "./table.module.css";

interface TableType {
  title: string;
  description: string;
}

interface TableProps {
  types?: TableType[];
}

export default function Table({ types = [] }: TableProps) {
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
