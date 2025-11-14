import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/custom/navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Academia Digital PRO - Cursos e E-books",
  description: "Plataforma completa de cursos e e-books para marketing digital e vendas presenciais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-[#0a0a0a]">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
