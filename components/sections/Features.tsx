"use client"

import { SectionWrapper } from "@/components/SectionWrapper"
import { Zap, Shield, HeadphonesIcon } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

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
  const sectionClassName = "py-20 bg-white"
  
  return (
    <SectionWrapper className={sectionClassName}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F1F3D] mb-4">
            Por Que Escolher a Doxa?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recursos que fazem a diferença no dia a dia da sua empresa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#0F1F3D] to-[#4B9CD3] mb-6">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F1F3D] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-[#0F1F3D] mb-6">
              Tecnologia de Ponta para Resultados Reais
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Nossos sistemas são desenvolvidos com as mais modernas tecnologias do mercado,
              garantindo não apenas performance superior, mas também escalabilidade e
              adaptabilidade às necessidades do seu negócio.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Com uma arquitetura robusta e design intuitivo, transformamos processos
              complexos em soluções simples e eficientes, permitindo que sua equipe
              foque no que realmente importa: fazer seu negócio crescer.
            </p>
          </div>
          <div className="order-1 md:order-2 relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/features-background.png"
              alt="Tecnologia e Inovação"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F1F3D]/40 to-[#4B9CD3]/40"></div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
