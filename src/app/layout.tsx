import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "../styles/globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Body and Health | Personal Trainer",
  description:
    "Landing page de referência para personal trainer com foco em performance, saúde e qualidade de vida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={archivo.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
