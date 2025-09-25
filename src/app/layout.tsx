import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@/styles/globals.scss';

export const metadata: Metadata = {
  metadataBase: new URL("https://ladding-malu-project.vercel.app"),
  title: {
    default: "Advogada Maria Luiza Munhoz | Direito Civil e Consultoria",
    template: "%s | Maria Luiza Munhoz",
  },
  description:
    "Atendimento jurídico especializado em direito civil, família e consultoria preventiva. Agende sua consulta.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://ladding-malu-project.vercel.app/",
    title: "Advogada Maria Luiza Munhoz",
    description:
      "Consultoria e atendimento jurídico com orientação segura e objetiva.",
    images: [{ url: "/banner.jpg", width: 1200, height: 630, alt: "Marca ML Munhoz" }],
    siteName: "Maria Luiza Munhoz",
    locale: "pt_BR",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
