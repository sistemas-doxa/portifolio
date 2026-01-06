"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SectionWrapper } from "@/components/SectionWrapper"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [whatsappLink, setWhatsappLink] = useState<string | null>(null)
  const [clientName, setClientName] = useState<string>("")

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, (match, p1, p2, p3) => {
        if (p3) return `(${p1}) ${p2}-${p3}`
        if (p2) return `(${p1}) ${p2}`
        if (p1) return `(${p1}`
        return numbers
      })
    } else {
      return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, (match, p1, p2, p3) => {
        if (p3) return `(${p1}) ${p2}-${p3}`
        if (p2) return `(${p1}) ${p2}`
        if (p1) return `(${p1}`
        return numbers
      })
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setFormData({
      ...formData,
      phone: formatted
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === "phone") {
      handlePhoneChange(e as React.ChangeEvent<HTMLInputElement>)
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email || !formData.name || !formData.phone) {
      alert("Por favor, preencha todos os campos obrigatórios.")
      return
    }

    setIsLoading(true)
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "quote_request",
          timestamp: new Date().toISOString(),
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      if (response.ok) {
        const result = await response.json()
        setClientName(formData.name) // Salvar nome antes de limpar
        setSubmitted(true)
        setWhatsappLink(result.data?.whatsappLink || null)
        setFormData({ name: "", email: "", phone: "", message: "" })
        setTimeout(() => {
          setSubmitted(false)
          setWhatsappLink(null)
          setClientName("")
        }, 10000)
      } else {
        const errorData = await response.json()
        alert("Erro ao enviar. Tente novamente ou entre em contato diretamente.")
      }
    } catch (error) {
      window.location.href = `mailto:doxxasistemas@gmail.com?subject=Solicitação de Orçamento - ${formData.name}&body=Olá, meu nome é ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefone: ${formData.phone}%0D%0A%0D%0AMensagem: ${formData.message}`
    } finally {
      setIsLoading(false)
    }
  }

  const sectionId = "contato"
  const sectionClassName = "py-20 relative overflow-hidden"
  
  return (
    <SectionWrapper id={sectionId} className={sectionClassName}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059] via-[#C5A059]/90 to-[#0F1F3D]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para elevar o nível da sua tecnologia?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Agende uma demonstração gratuita e descubra como a Doxa pode transformar seus resultados.
          </p>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6"
            >
              <p className="mb-4 font-semibold text-lg">
              ✅ Solicitação enviada com sucesso!
              </p>
              <p className="mb-4">
                Recebemos sua solicitação e entraremos em contato em breve via email e WhatsApp.
              </p>
              {whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar no WhatsApp Agora
                </a>
              )}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type="text"
                name="name"
                placeholder="Seu nome *"
                value={formData.name}
                onChange={handleChange}
                className="bg-white/95 text-[#0F1F3D] placeholder:text-gray-500"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Seu melhor e-mail *"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/95 text-[#0F1F3D] placeholder:text-gray-500"
                required
              />
            </div>
            <Input
              type="tel"
              name="phone"
              placeholder="Telefone * (00) 00000-0000"
              value={formData.phone}
              onChange={handlePhoneChange}
              className="bg-white/95 text-[#0F1F3D] placeholder:text-gray-500"
              required
              maxLength={15}
            />
            <textarea
              name="message"
              placeholder="Conte-nos sobre seu projeto (opcional)"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md border border-input bg-white/95 px-3 py-2 text-sm text-[#0F1F3D] placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <Button
              type="submit"
              disabled={isLoading}
              variant="default"
              size="lg"
              className="bg-white text-[#0F1F3D] hover:bg-white/90 text-lg px-8 py-6 disabled:opacity-50 w-full md:w-auto"
            >
              {isLoading ? "Enviando..." : "Solicitar Orçamento Agora"}
            </Button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
