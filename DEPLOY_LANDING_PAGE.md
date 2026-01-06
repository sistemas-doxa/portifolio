# Como Colocar a Landing Page no Ar - doxasistemas.online

## Opções de Hospedagem

### Opção 1: Vercel (Recomendado - Mais Fácil) ⭐
- ✅ Gratuito
- ✅ Otimizado para Next.js
- ✅ Deploy automático
- ✅ SSL grátis
- ✅ Configuração de domínio fácil

### Opção 2: Netlify
- ✅ Gratuito
- ✅ Fácil de usar
- ✅ SSL grátis

### Opção 3: Railway / Render
- ✅ Gratuito (com limites)
- ✅ Mais controle

---

## 🚀 DEPLOY NA VERCEL (Recomendado)

### Passo 1: Preparar o Projeto

1. Certifique-se de que tudo está funcionando localmente:
```bash
npm run build
```

Se der erro, corrija antes de fazer deploy.

### Passo 2: Criar Conta na Vercel

1. Acesse https://vercel.com
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"** (recomendado) ou use email
4. Faça login

### Passo 3: Fazer Deploy

**Opção A: Via GitHub (Recomendado)**

1. Crie um repositório no GitHub:
   - Acesse https://github.com
   - Clique em **"New repository"**
   - Nome: `doxa-landing-page` (ou qualquer nome)
   - Marque como **Private** (se quiser)
   - Clique em **"Create repository"**

2. No terminal, na pasta do projeto:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/doxa-landing-page.git
git push -u origin main
```

3. Na Vercel:
   - Clique em **"Add New..."** > **"Project"**
   - Importe o repositório do GitHub
   - A Vercel detecta automaticamente que é Next.js
   - Clique em **"Deploy"**

**Opção B: Via Vercel CLI (Mais Rápido)**

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. No terminal, na pasta do projeto:
```bash
vercel
```

3. Siga as instruções:
   - Login na Vercel
   - Aceite as configurações padrão
   - Pronto!

### Passo 4: Configurar Variáveis de Ambiente

1. Na Vercel, vá em **Settings** > **Environment Variables**
2. Adicione as variáveis:
   ```
   RESEND_API_KEY=re_MjBfnAjq_JHiXe2HhJEbJuPSNvNqogSSY
   CONTACT_EMAIL=doxxasistemas@gmail.com
   FROM_EMAIL=noreply@doxasistemas.online
   ```
3. Clique em **Save**

### Passo 5: Conectar Domínio doxasistemas.online

1. Na Vercel, vá em **Settings** > **Domains**
2. Clique em **"Add Domain"**
3. Digite: `doxasistemas.online`
4. A Vercel vai mostrar os registros DNS que você precisa adicionar no GoDaddy

### Passo 6: Configurar DNS no GoDaddy

1. Acesse o painel DNS do GoDaddy (como você já fez antes)
2. Adicione os registros que a Vercel mostrar:

**Registro A:**
- Tipo: **A**
- Nome: `@` (ou deixe vazio)
- Valor: IP que a Vercel fornecer (ex: `76.76.21.21`)

**Registro CNAME (para www):**
- Tipo: **CNAME**
- Nome: `www`
- Valor: `cname.vercel-dns.com` (ou o que a Vercel mostrar)

3. Aguarde a propagação (pode levar até 24h, mas geralmente é rápido)

### Passo 7: SSL Automático

A Vercel configura SSL automaticamente! Não precisa fazer nada.

---

## 🌐 DEPLOY NO NETLIFY (Alternativa)

### Passo 1: Criar Conta

1. Acesse https://netlify.com
2. Faça login com GitHub

### Passo 2: Fazer Deploy

1. Arraste a pasta do projeto para a área de deploy do Netlify
2. Ou conecte com GitHub (igual Vercel)

### Passo 3: Configurar Build

- **Build command:** `npm run build`
- **Publish directory:** `.next`

### Passo 4: Variáveis de Ambiente

Vá em **Site settings** > **Environment variables** e adicione:
```
RESEND_API_KEY=re_MjBfnAjq_JHiXe2HhJEbJuPSNvNqogSSY
CONTACT_EMAIL=doxxasistemas@gmail.com
FROM_EMAIL=noreply@doxasistemas.online
```

### Passo 5: Conectar Domínio

1. Vá em **Domain settings**
2. Adicione `doxasistemas.online`
3. Configure DNS conforme instruções do Netlify

---

## ✅ Checklist Antes do Deploy

- [ ] Projeto funciona localmente (`npm run dev`)
- [ ] Build funciona (`npm run build`)
- [ ] Variáveis de ambiente preparadas
- [ ] Domínio doxasistemas.online comprado
- [ ] Conta na Vercel/Netlify criada

---

## 🔧 Configurações Importantes

### Arquivo `.env.local` (NÃO vai para produção)

Crie um arquivo `.env.example` para documentar:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=doxxasistemas@gmail.com
FROM_EMAIL=noreply@doxasistemas.online
```

**⚠️ IMPORTANTE:** O `.env.local` NÃO deve ser commitado no git. As variáveis devem ser adicionadas diretamente na plataforma de deploy (Vercel/Netlify).

---

## 🚨 Problemas Comuns

### "Build failed"
- Verifique se todas as dependências estão no `package.json`
- Execute `npm install` localmente
- Verifique erros de TypeScript

### "Domain not working"
- Aguarde propagação DNS (pode levar até 24h)
- Verifique se os registros DNS estão corretos
- Use ferramentas como https://dnschecker.org para verificar

### "Emails não funcionam"
- Verifique se as variáveis de ambiente estão configuradas na Vercel/Netlify
- Confirme que o domínio está verificado no Resend
- Verifique os logs na Vercel/Netlify

---

## 📝 Após o Deploy

1. ✅ Teste o site em `doxasistemas.online`
2. ✅ Teste o formulário de orçamento
3. ✅ Verifique se os emails estão chegando
4. ✅ Teste em mobile
5. ✅ Verifique velocidade (PageSpeed Insights)

---

## 🎯 Recomendação Final

**Use a Vercel!** É a opção mais fácil e otimizada para Next.js. O processo é bem simples e rápido.

Quer que eu te ajude a fazer o deploy agora? Posso guiar passo a passo!

