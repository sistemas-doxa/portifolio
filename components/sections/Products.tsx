"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionWrapper } from "@/components/SectionWrapper"
import { Check, ArrowRight, Database, Globe, Smartphone, Wrench, Layout, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Sistemas Personalizados",
    description: "Desenvolvimento de sistemas sob medida: CRM, ERP e soluções corporativas completas para sua empresa.",
    benefits: [
      "Sistemas totalmente customizados",
      "Integração com ferramentas existentes",
      "Escalabilidade garantida"
    ],
    icon: Database
  },
  {
    title: "Landing Pages",
    description: "Páginas de conversão otimizadas para capturar leads e transformar visitantes em clientes.",
    benefits: [
      "Design focado em conversão",
      "Otimização para SEO",
      "Integração com ferramentas de marketing"
    ],
    icon: Layout
  },
  {
    title: "Sites Completos",
    description: "Desenvolvimento de sites institucionais e corporativos com design moderno e responsivo.",
    benefits: [
      "Design profissional e moderno",
      "Totalmente responsivo",
      "Performance otimizada"
    ],
    icon: Globe
  },
  {
    title: "Aplicativos Mobile",
    description: "Apps nativos para iOS e Android, desenvolvidos com as melhores tecnologias do mercado.",
    benefits: [
      "Performance nativa",
      "Interface intuitiva",
      "Disponível para iOS e Android"
    ],
    icon: Smartphone
  },
  {
    title: "Manutenção & Suporte",
    description: "Manutenção preventiva, correções e aprimoramentos para sistemas já existentes.",
    benefits: [
      "Suporte técnico especializado",
      "Atualizações regulares",
      "Melhorias contínuas"
    ],
    icon: Wrench
  },
  {
    title: "E-commerce & Loja Virtual",
    description: "Plataformas de vendas online completas com gestão de produtos, pagamentos e entregas.",
    benefits: [
      "Integração com gateways de pagamento",
      "Painel administrativo completo",
      "Otimizado para conversão"
    ],
    icon: ShoppingCart
  }
]

export function Products() {
  const sectionId = "produtos"
  const sectionClassName = "py-20 bg-background"
  
  return (
    <SectionWrapper id={sectionId} className={sectionClassName}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F1F3D] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas em desenvolvimento de software para impulsionar seu negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:scale-105 hover:shadow-xl hover:border-[#C5A059] transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0F1F3D] to-[#C5A059] flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-[#0F1F3D]">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-[#C5A059] flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contato"
                      className="inline-flex items-center text-[#C5A059] font-medium group-hover:gap-2 transition-all"
                    >
                      Saiba Mais
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
