"use client"

import { SectionWrapper } from "@/components/SectionWrapper"
import { Zap, Shield, HeadphonesIcon } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ProgressBar } from "@/components/ProgressBar"

const features = [
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Sistemas otimizados para máxima velocidade e eficiência, garantindo respostas instantâneas mesmo sob alta carga de trabalho.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Shield,
    title: "Segurança de Dados",
    description: "Proteção de nível empresarial com criptografia avançada, backups automáticos e conformidade com as principais normas de segurança.",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte 24/7",
    description: "Equipe especializada disponível a qualquer momento para garantir que sua operação nunca pare, com resposta rápida e eficiente.",
    color: "from-green-400 to-green-600"
  }
]

export function Features() {
  const sectionClassName = "py-12 sm:py-16 md:py-20 bg-white"
  
  return (
    <SectionWrapper className={sectionClassName}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1F3D] mb-3 sm:mb-4">
            Por Que Escolher a Doxa?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Recursos que fazem a diferença no dia a dia da sua empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#0F1F3D] to-[#4B9CD3] mb-4 sm:mb-6">
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F1F3D] mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                {feature.title === "Alta Performance" && (
                  <ProgressBar label="Velocidade" value={99} color="bg-yellow-500" />
                )}
                {feature.title === "Segurança de Dados" && (
                  <ProgressBar label="Proteção" value={100} color="bg-blue-500" />
                )}
                {feature.title === "Suporte 24/7" && (
                  <ProgressBar label="Disponibilidade" value={99.9} color="bg-green-500" />
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 grid md:grid-cols-2 gap-6 sm:gap-8 items-center"
        >
          <div className="order-2 md:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1F3D] mb-4 sm:mb-6">
              Tecnologia de Ponta para Resultados Reais
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              Nossos sistemas são desenvolvidos com as mais modernas tecnologias do mercado,
              garantindo não apenas performance superior, mas também escalabilidade e
              adaptabilidade às necessidades do seu negócio.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Com uma arquitetura robusta e design intuitivo, transformamos processos
              complexos em soluções simples e eficientes, permitindo que sua equipe
              foque no que realmente importa: fazer seu negócio crescer.
            </p>
          </div>
          <div className="order-1 md:order-2 relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src="/images/features.png"
              alt="Tecnologia e Inovação"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F1F3D]/40 to-[#4B9CD3]/40 z-10 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
