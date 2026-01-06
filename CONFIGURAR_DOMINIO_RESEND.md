# Configurar Domínio doxasistemas.online no Resend

## Passo a Passo

### 1. Adicionar Domínio no Resend

1. Acesse https://resend.com/domains
2. Clique em "Add Domain"
3. No campo "Name", digite: **`doxasistemas.online`**
4. Selecione a região: **São Paulo (sa-east-1)**
5. Clique em "Add Domain"

### 2. Configurar DNS

O Resend vai mostrar os registros DNS que você precisa adicionar. Você precisará adicionar:

#### Registros SPF (TXT)
```
v=spf1 include:_spf.resend.com ~all
```

#### Registros DKIM (CNAME)
O Resend vai gerar alguns registros CNAME únicos, algo como:
```
resend._domainkey.doxasistemas.online
```

#### Registro DMARC (TXT)
```
v=DMARC1; p=none; rua=mailto:dmarc@doxasistemas.online
```

### 3. Onde Adicionar os Registros DNS

Dependendo de onde você comprou o domínio:

**Se foi no Registro.br:**
- Acesse https://registro.br
- Vá em "Meus Domínios" > "DNS"
- Adicione os registros conforme instruções do Resend

**Se foi em outro provedor (GoDaddy, Namecheap, etc):**
- Acesse o painel do seu provedor
- Vá em "DNS Management" ou "Gerenciamento de DNS"
- Adicione os registros conforme instruções do Resend

### 4. Aguardar Verificação

- Após adicionar os registros DNS, volte ao Resend
- O Resend vai verificar automaticamente (pode levar alguns minutos até 24h)
- Quando aparecer um ✅ verde, o domínio está verificado!

### 5. Atualizar o Código (Já Fiz!)

O código já está atualizado para usar `noreply@doxasistemas.online`.

### 6. Atualizar .env.local (Opcional)

Se quiser personalizar o email de envio, adicione no `.env.local`:

```env
RESEND_API_KEY=re_MjBfnAjq_JHiXe2HhJEbJuPSNvNqogSSY
CONTACT_EMAIL=doxxasistemas@gmail.com
FROM_EMAIL=noreply@doxasistemas.online
```

## Status Atual

✅ Código atualizado para usar `doxasistemas.online`
⏳ Aguardando você configurar o domínio no Resend
⏳ Aguardando verificação DNS

## Depois que Verificar

Assim que o domínio estiver verificado no Resend:
- ✅ Emails de confirmação vão funcionar para qualquer cliente
- ✅ Emails vão aparecer como "Doxa Sistemas <noreply@doxasistemas.online>"
- ✅ Mais profissional e confiável

## Dúvidas?

Se tiver problemas na configuração DNS, me avise que ajudo!

