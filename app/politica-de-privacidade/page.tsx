import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade - Doxa Sistemas",
  description: "Política de Privacidade da Doxa Sistemas",
}

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#0F1F3D] mb-8">
          Política de Privacidade
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500 mb-8">
            Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">1. Introdução</h2>
            <p>
              A Doxa Sistemas (&quot;nós&quot;, &quot;nosso&quot; ou &quot;empresa&quot;) respeita sua privacidade e está comprometida em proteger seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">2. Informações que Coletamos</h2>
            <p>Coletamos as seguintes informações quando você utiliza nosso site:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Informações de Contato:</strong> Nome, endereço de e-mail e número de telefone quando você preenche nosso formulário de contato</li>
              <li><strong>Informações Técnicas:</strong> Endereço IP, tipo de navegador, páginas visitadas e tempo de permanência no site</li>
              <li><strong>Cookies:</strong> Utilizamos cookies para melhorar sua experiência de navegação</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">3. Como Utilizamos suas Informações</h2>
            <p>Utilizamos suas informações pessoais para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder suas solicitações de contato e orçamento</li>
              <li>Enviar comunicações relacionadas aos nossos serviços</li>
              <li>Melhorar nosso site e serviços</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Prevenir fraudes e garantir a segurança</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">4. Compartilhamento de Informações</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Com seu consentimento explícito</li>
              <li>Para cumprir obrigações legais</li>
              <li>Com prestadores de serviços que nos auxiliam na operação do site (sob acordos de confidencialidade)</li>
              <li>Em caso de fusão, aquisição ou venda de ativos da empresa</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">5. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet é 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">6. Seus Direitos</h2>
            <p>De acordo com a LGPD, você tem os seguintes direitos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acesso aos seus dados pessoais</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Portabilidade dos dados</li>
              <li>Eliminação dos dados tratados com consentimento</li>
              <li>Revogação do consentimento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">7. Cookies</h2>
            <p>
              Utilizamos cookies para melhorar sua experiência. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">8. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">9. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas publicando a nova política nesta página e atualizando a data de &quot;Última atualização&quot;.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">10. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p><strong>Doxa Sistemas</strong></p>
              <p>Email: doxxasistemas@gmail.com</p>
              <p>Website: doxasistemas.online</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

