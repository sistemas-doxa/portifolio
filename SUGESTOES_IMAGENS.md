# Sugestões de Imagens para a Landing Page

## 📍 Onde Colocar as Imagens

Todas as imagens devem ser colocadas na pasta: **`public/images/`**

## 🎨 Sugestões de Imagens por Seção

### 1. Hero Section (Seção Principal)
**Localização atual**: Gradiente com padrão SVG (placeholder)

**Sugestões de imagens:**
- Dashboard de sistema moderno (tela de computador com gráficos/dados)
- Equipe trabalhando em tecnologia
- Interface de software elegante
- Conceito abstrato de tecnologia/conexão
- **Dimensões recomendadas**: 1200x800px
- **Nome sugerido**: `hero-image.png` ou `hero-background.png`

### 2. Seção de Produtos/Serviços
**Localização atual**: Ícones do Lucide React

**Sugestões para cada serviço:**

#### Sistemas Personalizados (CRM/ERP)
- Screenshot de dashboard de sistema
- Interface de gestão empresarial
- **Nome**: `sistema-crm-erp.png`

#### Landing Pages
- Exemplo de landing page bem convertida
- Design de página de captura
- **Nome**: `landing-page-example.png`

#### Sites Completos
- Screenshot de site institucional moderno
- Layout responsivo em diferentes dispositivos
- **Nome**: `site-institucional.png`

#### Aplicativos Mobile
- Mockup de app em celular
- Interface de aplicativo mobile
- **Nome**: `app-mobile.png`

#### Manutenção & Suporte
- Equipe de suporte técnico
- Processo de manutenção/atualização
- **Nome**: `suporte-tecnico.png`

#### E-commerce
- Loja virtual funcionando
- Carrinho de compras/checkout
- **Nome**: `ecommerce.png`

**Dimensões recomendadas para cards**: 400x300px ou 600x400px

### 3. Seção "Sobre Nós"
**Localização atual**: Background com padrão SVG

**Sugestões:**
- Equipe da Doxa Sistemas
- Escritório/ambiente de trabalho
- Conceito de inovação/tecnologia
- **Dimensões**: 1200x600px
- **Nome**: `sobre-nos-background.png`

### 4. Seção de Features (Diferenciais)
**Localização atual**: Gradiente com padrão SVG

**Sugestões:**
- Conceito de performance/velocidade
- Segurança de dados (cadeado/escudo)
- Design UI/UX moderno
- **Dimensões**: 800x600px
- **Nome**: `features-background.png`

### 5. Footer (Logos de Parceiros - Futuro)
**Quando tiver parceiros:**
- Logos em PNG com fundo transparente
- Tamanho: 200x80px (proporção pode variar)
- Nome: `parceiro-[nome].png`

## 🎯 Onde Encontrar Imagens

### Opções Gratuitas:
1. **Unsplash** (https://unsplash.com)
   - Busque por: "technology", "software", "dashboard", "business"
   - Filtre por cores que combinem com a paleta (#0F1F3D, #C5A059)

2. **Pexels** (https://pexels.com)
   - Busque por: "software development", "tech team", "business"

3. **Pixabay** (https://pixabay.com)
   - Imagens e ilustrações gratuitas

### Opções Premium:
1. **Shutterstock**
2. **Getty Images**
3. **Adobe Stock**

## 📐 Especificações Técnicas

### Formatos Recomendados:
- **PNG**: Para imagens com transparência (logos, ícones)
- **JPG/JPEG**: Para fotos e imagens complexas
- **SVG**: Para ilustrações vetoriais (escaláveis)
- **WebP**: Formato moderno e otimizado (Next.js suporta)

### Otimização:
- Use ferramentas como **TinyPNG** ou **Squoosh** para comprimir
- Mantenha arquivos abaixo de 500KB quando possível
- Next.js otimiza automaticamente imagens, mas é bom já começar otimizado

## 🔧 Como Usar as Imagens no Código

Após adicionar as imagens na pasta `public/images/`, você pode usá-las assim:

```tsx
import Image from "next/image"

<Image
  src="/images/nome-da-imagem.png"
  alt="Descrição da imagem"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

## 📝 Checklist de Imagens

- [ ] Logo da Doxa Sistemas (`logo-doxa.png`)
- [ ] Imagem para Hero Section
- [ ] Imagens para cards de serviços (6 imagens)
- [ ] Background para seção "Sobre Nós"
- [ ] Background para seção Features
- [ ] (Futuro) Logos de parceiros

