"use client"

import { SectionWrapper } from "@/components/SectionWrapper"
import { Target, Lightbulb, Handshake } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const values = [
  {
    icon: Target,
    title: "Precisão",
    description: "Cada linha de código é escrita com atenção aos detalhes, garantindo soluções que funcionam perfeitamente."
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Estamos sempre à frente, utilizando as tecnologias mais modernas para criar soluções de amanhã."
  },
  {
    icon: Handshake,
    title: "Parceria",
    description: "Seu sucesso é nosso sucesso. Trabalhamos lado a lado para alcançar resultados excepcionais."
  }
]

export function About() {
  const sectionId = "sobre"
  const sectionClassName = "py-20 bg-[#0F1F3D] relative overflow-hidden"
  
  return (
    <SectionWrapper id={sectionId} className={sectionClassName}>
      <div className="absolute inset-0">
        <Image
          src="/images/sobre-nos-background.png"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Sobre a Doxa Sistemas
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transformando ideias em soluções tecnológicas de excelência
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            A Doxa Sistemas nasceu da paixão por criar soluções que realmente fazem a diferença.
            Somos uma empresa especializada no desenvolvimento de software empresarial, com foco
            em qualidade, inovação e resultados mensuráveis.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Nossa missão é simplificar processos complexos, automatizar tarefas repetitivas e
            fornecer insights valiosos que impulsionam o crescimento dos nossos clientes. Acreditamos
            que a tecnologia deve ser um facilitador, não um obstáculo.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed">
            Com anos de experiência no mercado e uma equipe altamente qualificada, entregamos
            sistemas robustos, seguros e escaláveis que se adaptam às necessidades específicas
            de cada negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#C5A059]/20 mb-6">
                  <Icon className="h-10 w-10 text-[#C5A059]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
