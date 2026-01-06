"use client"

import { Logo } from "@/components/Logo"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#produtos", label: "Produtos" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#contato", label: "Contato" },
]

const legalLinks = [
  { href: "#", label: "Política de Privacidade" },
  { href: "#", label: "Termos de Uso" },
  { href: "#", label: "LGPD" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/doxasistemas/", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-[#0F1F3D] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo className="mb-4" variant="dark" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformando negócios através de soluções tecnológicas inovadoras
              e confiáveis.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#C5A059] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#C5A059] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A059] transition-colors flex items-center justify-center"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Doxa Sistemas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

