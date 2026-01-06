import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso - Doxa Sistemas",
  description: "Termos de Uso da Doxa Sistemas",
}

export default function TermosUso() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#0F1F3D] mb-8">
          Termos de Uso
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500 mb-8">
            Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site da Doxa Sistemas, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não deve utilizar nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">2. Uso do Site</h2>
            <p>Você concorda em utilizar o site apenas para fins legais e de acordo com estes termos. É proibido:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilizar o site de forma que viole qualquer lei ou regulamento</li>
              <li>Transmitir qualquer conteúdo malicioso, vírus ou código prejudicial</li>
              <li>Tentar obter acesso não autorizado a qualquer parte do site</li>
              <li>Interferir no funcionamento do site ou em sua segurança</li>
              <li>Copiar, reproduzir ou distribuir conteúdo do site sem autorização</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo do site, incluindo textos, gráficos, logos, ícones, imagens e software, é propriedade da Doxa Sistemas ou de seus licenciadores e está protegido por leis de direitos autorais e outras leis de propriedade intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">4. Formulários e Informações</h2>
            <p>
              Ao preencher formulários em nosso site, você concorda em fornecer informações precisas, atuais e completas. Você é responsável por manter a confidencialidade de quaisquer informações de conta que possamos fornecer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">5. Links para Sites de Terceiros</h2>
            <p>
              Nosso site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo ou práticas desses sites e não assumimos responsabilidade por eles. Recomendamos que você revise os termos de uso e políticas de privacidade de qualquer site de terceiros que visite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">6. Limitação de Responsabilidade</h2>
            <p>
              A Doxa Sistemas não se responsabiliza por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de usar nosso site, incluindo, mas não limitado a, perda de dados ou lucros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">7. Disponibilidade do Site</h2>
            <p>
              Não garantimos que o site estará sempre disponível ou livre de erros. Podemos interromper o acesso ao site para manutenção, atualizações ou por outras razões, sem aviso prévio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">8. Modificações dos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site. É sua responsabilidade revisar periodicamente estes termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">9. Lei Aplicável</h2>
            <p>
              Estes Termos de Uso são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes termos será resolvida nos tribunais competentes do Brasil.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1F3D] mt-8 mb-4">10. Contato</h2>
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
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

