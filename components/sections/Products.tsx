"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionWrapper } from "@/components/SectionWrapper"
import { Check, ArrowRight, Database, Globe, Smartphone, Wrench, Layout, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { TiltCard } from "@/components/TiltCard"

const services = [
  {
    title: "Sistemas Personalizados",
    description: "Desenvolvimento de sistemas sob medida: CRM, ERP e soluções corporativas completas para sua empresa.",
    benefits: [
      "Sistemas totalmente customizados",
      "Integração com ferramentas existentes",
      "Escalabilidade garantida"
    ],
    icon: Database,
    badge: "Mais Popular"
  },
  {
    title: "Landing Pages",
    description: "Páginas de conversão otimizadas para capturar leads e transformar visitantes em clientes.",
    benefits: [
      "Design focado em conversão",
      "Otimização para SEO",
      "Integração com ferramentas de marketing"
    ],
    icon: Layout,
    badge: null
  },
  {
    title: "Sites Completos",
    description: "Desenvolvimento de sites institucionais e corporativos com design moderno e responsivo.",
    benefits: [
      "Design profissional e moderno",
      "Totalmente responsivo",
      "Performance otimizada"
    ],
    icon: Globe,
    badge: null
  },
  {
    title: "Aplicativos Mobile",
    description: "Apps nativos para iOS e Android, desenvolvidos com as melhores tecnologias do mercado.",
    benefits: [
      "Performance nativa",
      "Interface intuitiva",
      "Disponível para iOS e Android"
    ],
    icon: Smartphone,
    badge: "Novo"
  },
  {
    title: "Manutenção & Suporte",
    description: "Manutenção preventiva, correções e aprimoramentos para sistemas já existentes.",
    benefits: [
      "Suporte técnico especializado",
      "Atualizações regulares",
      "Melhorias contínuas"
    ],
    icon: Wrench,
    badge: null
  },
  {
    title: "E-commerce & Loja Virtual",
    description: "Plataformas de vendas online completas com gestão de produtos, pagamentos e entregas.",
    benefits: [
      "Integração com gateways de pagamento",
      "Painel administrativo completo",
      "Otimizado para conversão"
    ],
    icon: ShoppingCart,
    badge: "Recomendado"
  }
]

export function Products() {
  const sectionId = "produtos"
  const sectionClassName = "py-12 sm:py-16 md:py-20 bg-background"
  
  return (
    <SectionWrapper id={sectionId} className={sectionClassName}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1F3D] mb-3 sm:mb-4">
            Nossos Serviços
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Soluções completas em desenvolvimento de software para impulsionar seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
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
                <TiltCard>
                  <Card className="h-full hover:shadow-2xl hover:border-[#C5A059] transition-all duration-300 cursor-pointer group relative overflow-hidden">
                    {service.badge && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          service.badge === "Mais Popular" 
                            ? "bg-[#C5A059] text-white" 
                            : service.badge === "Novo"
                            ? "bg-[#4B9CD3] text-white"
                            : "bg-[#0F1F3D] text-white"
                        }`}>
                          {service.badge}
                        </span>
                      </div>
                    )}
                    <CardHeader className="p-4 sm:p-6">
                      <motion.div 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[#0F1F3D] to-[#C5A059] flex items-center justify-center mb-3 sm:mb-4"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </motion.div>
                      </motion.div>
                    <CardTitle className="text-xl sm:text-2xl text-[#0F1F3D]">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
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
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
