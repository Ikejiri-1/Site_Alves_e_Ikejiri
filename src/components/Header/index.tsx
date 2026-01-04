"use client";
import Image from "next/image";
import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  {
    id: 2,
    name: "Áreas de Atuação",
    path: "/areas-de-atuacao",
  },
];

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.heading}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo de um A cortado por um I, embaixo está escrito Alves & Ikejiri ADVOGADOS"
            className={styles.logo}
          ></Image>
        </Link>
        <nav className={styles.navBar}>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className={
                pathname === link.path
                  ? `${styles.link} ${styles.isActive}`
                  : styles.link
              }
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
