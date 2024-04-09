import type { Metadata } from "next";
import { saira } from "@/utils/changeFonts";
import "./globals.css";



export const metadata: Metadata = {
  title: "Criado pelo Mario Alberto",
  description: "Gerado através do Next.ts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${saira.className} bg-gray-300`}>{children}</body>
    </html>
  );
}
