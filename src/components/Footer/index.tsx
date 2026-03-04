import styles from "./footer.module.css";

export const Footer = () => {
  const contacts = [
    {
      id: 1,
      contact: "(12) 98113-1591",
    },
    {
      id: 2,
      contact: "caio.ikejiri@adv.oabsp.org.br",
    },
    {
      id: 3,
      contact: "caioalves@adv.oabsp.org.br",
    },
  ];
  return (
    <footer className={styles.footer}>
      <figure className={styles.logo}></figure>
      <div>
        <ul className={styles.contactsList}>
          {contacts.map((c) => (
            <li key={c.id}>
              <p className={styles.contacts}>{c.contact}</p>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
