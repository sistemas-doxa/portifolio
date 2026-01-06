import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Doxa Sistemas - Soluções de Software que Transformam Negócios",
  description: "Desenvolvemos sistemas robustos e inovadores que elevam a performance da sua empresa, garantindo segurança, eficiência e resultados excepcionais.",
  keywords: "software empresarial, ERP, CRM, automação, sistemas, tecnologia",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main id="home">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

