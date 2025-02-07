import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Girls in STEM",
  description: "Website feito para divulgação do grupo de pesquisa 'Girls in STEM', por Aléxia Cazale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
