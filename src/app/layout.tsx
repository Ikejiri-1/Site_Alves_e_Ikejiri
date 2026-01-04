import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Neuton } from "next/font/google";

const neuton = Neuton({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Alves & Ikejiri Advogados",
  description:
    "Página de advogados dedicada àqueles que precisam de ajuda em algumas áreas do direito, como tributário, civil etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <html lang="pt-br">
        <body className={neuton.className}>{children}</body>
      </html>
      <Footer />
    </>
  );
}
