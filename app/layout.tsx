import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ScrollProgress } from "@/components/ScrollProgress"
import { ScrollToTop } from "@/components/ScrollToTop"
import { WhatsAppFloat } from "@/components/WhatsAppFloat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Doxa Sistemas - Soluções de Software que Transformam Negócios",
  description: "Desenvolvemos sistemas robustos e inovadores que elevam a performance da sua empresa, garantindo segurança, eficiência e resultados excepcionais.",
  keywords: "software empresarial, ERP, CRM, automação, sistemas, tecnologia",
  icons: {
    icon: [
      { url: "/images/logo-doxa.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo-doxa.png", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ScrollProgress />
        <Header />
        <main id="home">{children}</main>
        <ScrollToTop />
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  )
}

