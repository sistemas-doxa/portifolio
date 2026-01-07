"use client"

import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/SectionWrapper"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ParticlesBackground } from "@/components/ParticlesBackground"
import { ParallaxImage } from "@/components/ParallaxImage"

export function Hero() {
  const sectionClassName = "pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 min-h-[85vh] sm:min-h-screen flex items-center relative overflow-hidden"
  
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
      <ParticlesBackground />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#0F1F3D] via-[#0F1F3D] to-[#C5A059] bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
                Soluções de Software que{" "}
              </span>
              <span className="bg-gradient-to-r from-[#C5A059] via-[#4B9CD3] to-[#C5A059] bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
                Transformam Negócios
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Desenvolvemos sistemas robustos e inovadores que elevam a performance
              da sua empresa, garantindo segurança, eficiência e resultados excepcionais.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Button 
                variant="gold" 
                size="lg" 
                className="group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection("produtos")}
              >
                <span className="flex items-center gap-2">
                  Conheça Nossos Produtos
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg border-2 hover:bg-[#0F1F3D] hover:text-white transition-all"
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
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden">
              <ParallaxImage
                src="/images/hero-image.png"
                alt="Tecnologia e Inovação"
                className="h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F1F3D]/20 to-[#C5A059]/20 z-10"></div>
            </div>
          </motion.div>
        </div>

      </div>
    </SectionWrapper>
  )
}

