"use client"

import { SectionWrapper } from "@/components/SectionWrapper"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um sistema personalizado?",
    answer: "O tempo de desenvolvimento varia conforme a complexidade do projeto. Landing pages ou sites simples podem ser entregues em menos de uma semana. Sistemas simples podem levar de 2 a 4 semanas, enquanto projetos mais complexos podem levar até 3 meses no máximo. Fazemos uma análise detalhada do seu projeto antes de fornecer um prazo estimado."
  },
  {
    question: "Vocês oferecem suporte após a entrega do projeto?",
    answer: "Sim! Oferecemos suporte técnico 24/7 para todos os nossos clientes. Incluímos manutenção preventiva, correções de bugs, atualizações de segurança e melhorias contínuas. Temos diferentes planos de suporte para atender às necessidades de cada cliente."
  },
  {
    question: "Os sistemas são responsivos e funcionam em dispositivos móveis?",
    answer: "Absolutamente! Todos os nossos sistemas são desenvolvidos com abordagem mobile-first, garantindo experiência otimizada em smartphones, tablets e desktops. Utilizamos as melhores práticas de design responsivo para garantir compatibilidade total."
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer: "Nosso processo é dividido em etapas: 1) Análise e planejamento, 2) Design e prototipagem, 3) Desenvolvimento, 4) Testes e validação, 5) Deploy e treinamento. Mantemos comunicação constante com o cliente em todas as etapas, com entregas parciais e feedback contínuo."
  },
  {
    question: "Vocês trabalham com integração de sistemas existentes?",
    answer: "Sim! Temos vasta experiência em integração de sistemas. Podemos integrar nossos sistemas com ERPs, CRMs, APIs de terceiros e outras ferramentas que sua empresa já utiliza, garantindo que tudo funcione de forma harmoniosa."
  },
  {
    question: "Qual a diferença entre um sistema personalizado e uma solução pronta?",
    answer: "Sistemas personalizados são desenvolvidos especificamente para atender às necessidades únicas do seu negócio, oferecendo funcionalidades sob medida. Soluções prontas são mais genéricas e podem não atender todas as suas necessidades específicas. Avaliamos cada caso para recomendar a melhor opção."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <SectionWrapper className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1F3D] mb-3 sm:mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:ring-offset-2"
              >
                <span className="text-base sm:text-lg font-semibold text-[#0F1F3D] pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-[#C5A059]" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

