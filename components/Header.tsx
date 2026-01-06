"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/Logo"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#produtos", label: "Produtos" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#contato", label: "Contato" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setIsOpen(false)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const sectionId = href.replace("#", "")
    scrollToSection(sectionId)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#0F1F3D] hover:text-[#C5A059] transition-colors font-medium cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button 
            variant="gold" 
            size="lg"
            onClick={() => scrollToSection("contato")}
          >
            Falar com Especialista
          </Button>
        </div>

        <button
          className="md:hidden text-[#0F1F3D]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[73px] right-0 bottom-0 w-64 bg-white border-l border-gray-200 shadow-lg p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[#0F1F3D] hover:text-[#C5A059] transition-colors font-medium py-2 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant="gold" 
                className="mt-4"
                onClick={() => scrollToSection("contato")}
              >
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

