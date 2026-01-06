"use client"

import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/SectionWrapper"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  const sectionClassName = "pt-32 pb-20 min-h-screen flex items-center"
  
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
  }
  
  return (
    <SectionWrapper className={sectionClassName}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0F1F3D] mb-6 leading-tight">
              Soluções de Software que{" "}
              <span className="text-[#C5A059]">Transformam Negócios</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Desenvolvemos sistemas robustos e inovadores que elevam a performance
              da sua empresa, garantindo segurança, eficiência e resultados excepcionais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="gold" 
                size="lg" 
                className="group"
                onClick={() => scrollToSection("produtos")}
              >
                Conheça Nossos Produtos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("sobre")}
              >
                Saiba Mais
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-image.png"
                alt="Tecnologia e Inovação"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F1F3D]/20 to-[#C5A059]/20"></div>
            </div>
          </motion.div>
        </div>

      </div>
    </SectionWrapper>
  )
}

