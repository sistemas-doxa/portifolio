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
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
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

  const validateField = (name: string, value: string) => {
    let error = ""
    
    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Nome é obrigatório"
        } else if (value.trim().length < 2) {
          error = "Nome deve ter pelo menos 2 caracteres"
        }
        break
      case "email":
        if (!value.trim()) {
          error = "E-mail é obrigatório"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "E-mail inválido"
        }
        break
      case "phone":
        const numbers = value.replace(/\D/g, "")
        if (!value.trim()) {
          error = "Telefone é obrigatório"
        } else if (numbers.length < 10) {
          error = "Telefone inválido"
        }
        break
    }
    
    return error
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name
    setTouched({ ...touched, [fieldName]: true })
    
    const error = validateField(fieldName, e.target.value)
    setErrors({ ...errors, [fieldName]: error })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name
    
    if (fieldName === "phone") {
      handlePhoneChange(e as React.ChangeEvent<HTMLInputElement>)
    } else {
      setFormData({
        ...formData,
        [fieldName]: e.target.value
      })
    }

    if (touched[fieldName]) {
      const error = validateField(fieldName, e.target.value)
      setErrors({ ...errors, [fieldName]: error })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const newTouched: Record<string, boolean> = {}
    const newErrors: Record<string, string> = {}
    
    Object.keys(formData).forEach((key) => {
      if (key !== "message") {
        newTouched[key] = true
        const error = validateField(key, formData[key as keyof typeof formData])
        if (error) {
          newErrors[key] = error
        }
      }
    })
    
    setTouched(newTouched)
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length > 0) {
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
  const sectionClassName = "py-12 sm:py-16 md:py-20 relative overflow-hidden"
  
  return (
    <SectionWrapper id={sectionId} className={sectionClassName}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059] via-[#C5A059]/90 to-[#0F1F3D]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Pronto para elevar o nível da sua tecnologia?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 md:mb-12 leading-relaxed px-4">
            Agende uma demonstração gratuita e descubra como a Doxa pode transformar seus resultados.
          </p>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white bg-white/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 mx-4 sm:mx-0"
            >
              <p className="mb-3 sm:mb-4 font-semibold text-base sm:text-lg">
              ✅ Solicitação enviada com sucesso!
              </p>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                Recebemos sua solicitação e entraremos em contato em breve via email e WhatsApp.
              </p>
              {whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  Falar no WhatsApp Agora
                </a>
              )}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu nome *"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`bg-white/95 text-[#0F1F3D] placeholder:text-gray-500 ${
                    touched.name && errors.name ? "border-red-500 focus-visible:ring-red-500" : ""
                  }`}
                  required
                />
                {touched.name && errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail *"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`bg-white/95 text-[#0F1F3D] placeholder:text-gray-500 ${
                    touched.email && errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
                  }`}
                  required
                />
                {touched.email && errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <Input
                type="tel"
                name="phone"
                placeholder="Telefone * (00) 00000-0000"
                value={formData.phone}
                onChange={handlePhoneChange}
                onBlur={handleBlur}
                className={`bg-white/95 text-[#0F1F3D] placeholder:text-gray-500 ${
                  touched.phone && errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""
                }`}
                required
                maxLength={15}
              />
              {touched.phone && errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Conte-nos sobre seu projeto (opcional)"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                className="w-full rounded-md border border-input bg-white/95 px-3 py-2 text-sm text-[#0F1F3D] placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              variant="default"
              size="lg"
              className="bg-white text-[#0F1F3D] hover:bg-white/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 disabled:opacity-50 w-full sm:w-auto"
            >
              {isLoading ? "Enviando..." : "Solicitar Orçamento Agora"}
            </Button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
