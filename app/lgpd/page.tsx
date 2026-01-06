import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LGPD - Lei Geral de Proteção de Dados - Doxa Sistemas",
  description: "Informações sobre o tratamento de dados pessoais conforme a LGPD - Doxa Sistemas",
}

export default function LGPD() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#0F1F3D] mb-8">
          Lei Geral de Proteção de Dados (LGPD)
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500 mb-8">
            Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">1. Sobre a LGPD</h2>
            <p>
              A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) estabelece regras sobre o tratamento de dados pessoais. A Doxa Sistemas está comprometida em cumprir todas as disposições da LGPD e proteger seus dados pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">2. Dados que Coletamos</h2>
            <p>Coletamos e tratamos os seguintes dados pessoais:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dados de Identificação:</strong> Nome completo</li>
              <li><strong>Dados de Contato:</strong> E-mail e telefone</li>
              <li><strong>Dados de Navegação:</strong> Endereço IP, cookies, páginas visitadas</li>
              <li><strong>Dados Fornecidos Voluntariamente:</strong> Mensagens enviadas através de formulários</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">3. Base Legal para o Tratamento</h2>
            <p>Tratamos seus dados pessoais com base nas seguintes hipóteses legais da LGPD:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consentimento:</strong> Quando você preenche nossos formulários, você consente com o tratamento de seus dados</li>
              <li><strong>Execução de Contrato:</strong> Para cumprir obrigações contratuais</li>
              <li><strong>Legítimo Interesse:</strong> Para melhorar nossos serviços e comunicação</li>
              <li><strong>Cumprimento de Obrigação Legal:</strong> Quando exigido por lei</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">4. Finalidade do Tratamento</h2>
            <p>Utilizamos seus dados pessoais para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder suas solicitações e fornecer informações sobre nossos serviços</li>
              <li>Enviar comunicações relacionadas aos nossos produtos e serviços</li>
              <li>Melhorar nosso site e experiência do usuário</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Prevenir fraudes e garantir a segurança</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">5. Seus Direitos como Titular de Dados</h2>
            <p>Conforme a LGPD, você tem os seguintes direitos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Confirmação e Acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
              <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados</li>
              <li><strong>Anonimização, Bloqueio ou Eliminação:</strong> Solicitar a eliminação de dados desnecessários ou excessivos</li>
              <li><strong>Portabilidade:</strong> Solicitar a portabilidade dos dados para outro fornecedor</li>
              <li><strong>Eliminação:</strong> Solicitar a eliminação dos dados tratados com base em consentimento</li>
              <li><strong>Revogação do Consentimento:</strong> Revogar seu consentimento a qualquer momento</li>
              <li><strong>Informação sobre Compartilhamento:</strong> Saber com quem compartilhamos seus dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">6. Como Exercer seus Direitos</h2>
            <p>
              Para exercer qualquer um de seus direitos, entre em contato conosco através dos canais indicados abaixo. Responderemos sua solicitação no prazo de até 15 (quinze) dias, conforme previsto na LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">7. Compartilhamento de Dados</h2>
            <p>
              Não compartilhamos seus dados pessoais com terceiros, exceto nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Com seu consentimento explícito</li>
              <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade e proteção de dados)</li>
              <li>Para cumprir obrigações legais ou ordens judiciais</li>
              <li>Em caso de fusão, aquisição ou venda de ativos (com notificação prévia)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">8. Segurança dos Dados</h2>
            <p>
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, perda, destruição, alteração, comunicação ou difusão. Utilizamos tecnologias de segurança modernas e mantemos nossos sistemas atualizados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">9. Retenção de Dados</h2>
            <p>
              Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, ou pelo período exigido por lei. Após esse período, os dados serão eliminados de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">10. Transferência Internacional de Dados</h2>
            <p>
              Seus dados podem ser transferidos e armazenados em servidores localizados fora do Brasil. Quando isso ocorrer, garantimos que medidas adequadas de proteção sejam implementadas, conforme exigido pela LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">11. Encarregado de Proteção de Dados (DPO)</h2>
            <p>
              Para questões relacionadas à proteção de dados pessoais e exercício de seus direitos, você pode entrar em contato conosco através dos canais abaixo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">12. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta política periodicamente para refletir mudanças em nossas práticas ou por razões legais, operacionais ou regulatórias. Notificaremos sobre mudanças significativas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">13. Contato</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de seus dados pessoais, entre em contato:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p><strong>Doxa Sistemas</strong></p>
              <p>Email: doxxasistemas@gmail.com</p>
              <p>Website: doxasistemas.online</p>
              <p className="mt-4">
                <strong>Assunto:</strong> Solicitação LGPD - [Especifique seu direito]
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

