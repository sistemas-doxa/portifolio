import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error("RESEND_API_KEY não configurada")
  }
  return new Resend(apiKey)
}

const createAdminEmail = (body: any) => {
  return {
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: 'Inter', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #0F1F3D 0%, #C5A059 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              background: #ffffff;
              padding: 30px;
              border: 1px solid #e0e0e0;
              border-top: none;
            }
            .info-box {
              background: #f8f9fa;
              border-left: 4px solid #C5A059;
              padding: 15px;
              margin: 20px 0;
              border-radius: 4px;
            }
            .info-item {
              margin: 10px 0;
              padding: 8px 0;
              border-bottom: 1px solid #e0e0e0;
            }
            .info-item:last-child {
              border-bottom: none;
            }
            .info-label {
              font-weight: 600;
              color: #0F1F3D;
              display: inline-block;
              width: 150px;
            }
            .message-box {
              background: #f8f9fa;
              padding: 15px;
              margin: 20px 0;
              border-radius: 4px;
              border: 1px solid #e0e0e0;
            }
            .footer {
              background: #0F1F3D;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 0 0 8px 8px;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🚀 Nova Solicitação de Orçamento</h1>
          </div>
          <div class="content">
            <p>Olá,</p>
            <p>Você recebeu uma nova solicitação de orçamento através do site da Doxa Sistemas.</p>
            
            <div class="info-box">
              <div class="info-item">
                <span class="info-label">Nome:</span>
                <span>${body.name || "Não informado"}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Email:</span>
                <span><a href="mailto:${body.email}">${body.email || "Não informado"}</a></span>
              </div>
              <div class="info-item">
                <span class="info-label">Telefone:</span>
                <span><a href="tel:${body.phone?.replace(/\D/g, "")}">${body.phone || "Não informado"}</a></span>
              </div>
              <div class="info-item">
                <span class="info-label">Data/Hora:</span>
                <span>${new Date(body.timestamp).toLocaleString("pt-BR")}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Origem:</span>
                <span>Landing Page - Seção CTA</span>
              </div>
            </div>

            ${body.message ? `
            <div class="message-box">
              <p><strong>Mensagem do cliente:</strong></p>
              <p>${body.message.replace(/\n/g, "<br>")}</p>
            </div>
            ` : ""}

            <p><strong>Próximos passos:</strong></p>
            <ul>
              <li>Entre em contato com o cliente o mais breve possível</li>
              <li>Apresente as soluções da Doxa Sistemas</li>
              <li>Agende uma demonstração se necessário</li>
            </ul>

            <p style="margin-top: 30px;">
              Atenciosamente,<br>
              <strong>Equipe Doxa Sistemas</strong>
            </p>
          </div>
          <div class="footer">
            <p>© 2025 Doxa Sistemas. Todos os direitos reservados.</p>
            <p>Este é um email automático, por favor não responda diretamente.</p>
          </div>
        </body>
      </html>
    `,
    text: `
Nova Solicitação de Orçamento - Doxa Sistemas

Você recebeu uma nova solicitação de orçamento através do site.

Nome: ${body.name || "Não informado"}
Email: ${body.email || "Não informado"}
Telefone: ${body.phone || "Não informado"}
Data/Hora: ${new Date(body.timestamp).toLocaleString("pt-BR")}
Origem: Landing Page - Seção CTA

${body.message ? `Mensagem do cliente:\n${body.message}\n` : ""}

Próximos passos:
- Entre em contato com o cliente o mais breve possível
- Apresente as soluções da Doxa Sistemas
- Agende uma demonstração se necessário

© 2025 Doxa Sistemas. Todos os direitos reservados.
    `
  }
}

const createWhatsAppLink = (body: any) => {
  const phoneNumber = "5561999013354" // (61) 999013354
  const message = encodeURIComponent(
    `Olá! Solicitei orçamento no site da Doxa Sistemas.\n\n` +
    `Meu nome é ${body.name}\n` +
    `Telefone: ${body.phone}\n` +
    `Email: ${body.email}${body.message ? `\n\nMensagem: ${body.message}` : ""}`
  )
  return `https://wa.me/${phoneNumber}?text=${message}`
}

const createConfirmationEmail = (body: any) => {
  const whatsappLink = createWhatsAppLink(body)
  
  return {
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: 'Inter', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #0F1F3D 0%, #C5A059 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              background: #ffffff;
              padding: 30px;
              border: 1px solid #e0e0e0;
              border-top: none;
            }
            .highlight-box {
              background: #f8f9fa;
              border-left: 4px solid #C5A059;
              padding: 20px;
              margin: 20px 0;
              border-radius: 4px;
            }
            .footer {
              background: #0F1F3D;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 0 0 8px 8px;
              font-size: 12px;
            }
            .contact-info {
              background: #f8f9fa;
              padding: 15px;
              margin: 20px 0;
              border-radius: 4px;
              text-align: center;
            }
            .whatsapp-button {
              display: inline-block;
              background: #25D366;
              color: white;
              padding: 12px 24px;
              text-decoration: none;
              border-radius: 6px;
              font-weight: 600;
              margin: 10px 0;
            }
            .whatsapp-button:hover {
              background: #20BA5A;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>✅ Solicitação Recebida!</h1>
          </div>
          <div class="content">
            <p>Olá, <strong>${body.name}</strong>!</p>
            
            <p>Recebemos sua solicitação de orçamento e ficamos muito felizes com seu interesse em nossos serviços.</p>

            <div class="highlight-box">
              <p><strong>📋 Resumo da sua solicitação:</strong></p>
              <p>Data/Hora: ${new Date(body.timestamp).toLocaleString("pt-BR")}</p>
              ${body.message ? `<p>Mensagem: ${body.message}</p>` : ""}
            </div>

            <p><strong>O que acontece agora?</strong></p>
            <ul>
              <li>Nossa equipe analisará sua solicitação</li>
              <li>Entraremos em contato em até 24 horas via <strong>email</strong></li>
              <li>Você também pode nos contatar diretamente pelo <strong>WhatsApp</strong></li>
              <li>Apresentaremos as melhores soluções para seu projeto</li>
            </ul>

            <div class="contact-info">
              <p><strong>📧 Email:</strong> doxxasistemas@gmail.com</p>
              <p><strong>📱 WhatsApp:</strong> (61) 99901-3354</p>
              <a href="${whatsappLink}" class="whatsapp-button" style="color: white; text-decoration: none;">
                💬 Falar no WhatsApp Agora
              </a>
            </div>

            <p style="margin-top: 30px;">
              Aguardamos ansiosamente para ajudar a transformar seus resultados!<br><br>
              Atenciosamente,<br>
              <strong>Equipe Doxa Sistemas</strong>
            </p>
          </div>
          <div class="footer">
            <p>© 2025 Doxa Sistemas. Todos os direitos reservados.</p>
            <p>Este é um email automático de confirmação.</p>
          </div>
        </body>
      </html>
    `,
    text: `
Solicitação Recebida - Doxa Sistemas

Olá, ${body.name}!

Recebemos sua solicitação de orçamento e ficamos muito felizes com seu interesse em nossos serviços.

Resumo da sua solicitação:
Data/Hora: ${new Date(body.timestamp).toLocaleString("pt-BR")}
${body.message ? `Mensagem: ${body.message}` : ""}

O que acontece agora?
- Nossa equipe analisará sua solicitação
- Entraremos em contato em até 24 horas via email
- Você também pode nos contatar diretamente pelo WhatsApp: (61) 99901-3354
- Apresentaremos as melhores soluções para seu projeto

Contato:
Email: doxxasistemas@gmail.com
WhatsApp: (61) 99901-3354
Link: ${whatsappLink}

Aguardamos ansiosamente para ajudar a transformar seus resultados!

Atenciosamente,
Equipe Doxa Sistemas

© 2025 Doxa Sistemas. Todos os direitos reservados.
    `
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, message: "Configuração de email não disponível" },
        { status: 500 }
      )
    }

    const resend = getResend()
    const body = await request.json()
    
    const adminEmail = createAdminEmail(body)
    const confirmationEmail = createConfirmationEmail(body)

    const fromEmail = process.env.FROM_EMAIL || "noreply@doxasistemas.online"
    
    const adminEmailResult = await resend.emails.send({
      from: `Doxa Sistemas <${fromEmail}>`,
      to: process.env.CONTACT_EMAIL || "doxxasistemas@gmail.com",
      reply_to: body.email || undefined,
      subject: `Nova Solicitação de Orçamento - ${body.name || "Cliente"}`,
      html: adminEmail.html,
      text: adminEmail.text,
    })

    if (adminEmailResult.error) {
      console.error("Erro ao enviar email para admin:", adminEmailResult.error)
      return NextResponse.json(
        { success: false, message: "Erro ao enviar email", error: adminEmailResult.error.message },
        { status: 500 }
      )
    }

    let confirmationSent = false
    
    if (body.email && body.email !== (process.env.CONTACT_EMAIL || "doxxasistemas@gmail.com")) {
      const confirmationEmailResult = await resend.emails.send({
        from: `Doxa Sistemas <${fromEmail}>`,
        to: body.email,
        subject: "✅ Solicitação Recebida - Doxa Sistemas",
        html: confirmationEmail.html,
        text: confirmationEmail.text,
      })

      if (confirmationEmailResult.error) {
        console.error("Erro ao enviar email de confirmação:", confirmationEmailResult.error)
        if (confirmationEmailResult.error.message?.includes("testing emails")) {
          console.warn("Resend em modo de teste - email de confirmação não enviado. Configure um domínio no Resend para enviar para outros emails.")
        }
      } else {
        confirmationSent = true
      }
    } else {
      console.warn("Email do cliente é o mesmo do admin ou não foi fornecido - email de confirmação não enviado")
    }

    const whatsappLink = createWhatsAppLink(body)

    return NextResponse.json({ 
      success: true, 
      message: confirmationSent 
        ? "Emails enviados com sucesso" 
        : "Solicitação recebida com sucesso. Nota: Email de confirmação não pôde ser enviado devido a limitações do serviço de teste.",
      data: {
        admin: adminEmailResult.data,
        confirmationSent,
        whatsappLink
      }
    })
  } catch (error) {
    console.error("Erro ao processar solicitação:", error)
    return NextResponse.json(
      { success: false, message: "Erro ao processar solicitação" },
      { status: 500 }
    )
  }
}
