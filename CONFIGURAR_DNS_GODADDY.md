# Configurar DNS do doxasistemas.online no GoDaddy para Resend

## ⚠️ IMPORTANTE: Registros que Você Precisa Adicionar

Baseado na tela do Resend, você precisa adicionar os seguintes registros:

---

## PARTE 1: Acessar o Painel DNS do GoDaddy

1. Acesse https://www.godaddy.com
2. Faça login na sua conta
3. No canto superior direito, clique no seu nome/perfil
4. Selecione **"Meus Produtos"** ou **"My Products"**
5. Na lista de produtos, encontre **"doxasistemas.online"**
6. Clique nos **3 pontinhos (⋯)** ao lado do domínio
7. Selecione **"Gerenciar DNS"** ou **"Manage DNS"**

Você verá uma tela com uma tabela de registros DNS.

---

## PARTE 2: Adicionar Registro DKIM (Domain Verification)

**Este é OBRIGATÓRIO para verificar o domínio!**

1. Na tabela de DNS, clique em **"+ Adicionar"** ou **"+ Add"**
2. Preencha os campos:
   - **Tipo:** Selecione **TXT**
   - **Nome:** Digite exatamente: `resend._domainkey`
   - **Valor/Conteúdo:** Cole o valor completo que aparece no Resend (começa com `p=MIGfMA0GCSqGSIb3DQEB...`)
     - **⚠️ IMPORTANTE:** Copie o valor COMPLETO, pode ser bem longo!
   - **TTL:** Deixe o padrão (geralmente 600 segundos ou 1 hora)
3. Clique em **"Salvar"** ou **"Save"**

**Status:** Este registro deve aparecer com um ✅ verde no Resend quando estiver correto.

---

## PARTE 3: Adicionar Registros SPF (Enable Sending)

**Você precisa adicionar 2 registros aqui:**

### Registro 1: MX

1. Clique em **"+ Adicionar"** ou **"+ Add"**
2. Preencha os campos:
   - **Tipo:** Selecione **MX**
   - **Nome:** Digite exatamente: `send`
   - **Valor/Conteúdo:** Cole o valor que aparece no Resend (algo como `feedback-smtp.sa-east-...`)
   - **Prioridade:** Digite `10`
   - **TTL:** Deixe o padrão
3. Clique em **"Salvar"** ou **"Save"**

### Registro 2: TXT (SPF)

1. Clique em **"+ Adicionar"** ou **"+ Add"**
2. Preencha os campos:
   - **Tipo:** Selecione **TXT**
   - **Nome:** Digite exatamente: `send`
   - **Valor/Conteúdo:** Cole o valor que aparece no Resend (algo como `v=spf1 include:amazons...`)
   - **TTL:** Deixe o padrão
3. Clique em **"Salvar"** ou **"Save"**

**⚠️ ATENÇÃO:** O nome é `send` (não `@`), e você precisa adicionar AMBOS os registros (MX e TXT).

---

## PARTE 4: Adicionar Registro DMARC (Opcional mas Recomendado)

1. Clique em **"+ Adicionar"** ou **"+ Add"**
2. Preencha os campos:
   - **Tipo:** Selecione **TXT**
   - **Nome:** Digite exatamente: `_dmarc` (com underscore no início)
   - **Valor/Conteúdo:** Cole o valor que aparece no Resend: `v=DMARC1; p=none;`
   - **TTL:** Deixe o padrão
3. Clique em **"Salvar"** ou **"Save"**

---

## PARTE 5: Verificar no Resend

1. Volte para https://resend.com/domains
2. Clique no domínio `doxasistemas.online`
3. Verifique se os registros aparecem com ✅ verde
4. O status do domínio deve mudar para **"Verified"** ou **"Verificado"**

**Tempo de propagação:** Pode levar de alguns minutos até 24 horas. Geralmente leva 1-2 horas.

---

## Resumo dos Registros

Você precisa adicionar **4 registros no total**:

1. ✅ **TXT** - Nome: `resend._domainkey` (DKIM - OBRIGATÓRIO)
2. ✅ **MX** - Nome: `send` - Prioridade: 10 (SPF - Enable Sending)
3. ✅ **TXT** - Nome: `send` (SPF - Enable Sending)
4. ✅ **TXT** - Nome: `_dmarc` (DMARC - Opcional mas recomendado)

---

## Dicas Importantes

- ⚠️ **Copie os valores EXATAMENTE** como aparecem no Resend
- ⚠️ **O nome `send` é diferente de `@`** - use exatamente `send`
- ⚠️ **O registro DKIM pode ser muito longo** - copie tudo, mesmo que pareça estranho
- ⚠️ **Não delete registros existentes** a menos que você saiba o que está fazendo
- ✅ **Aguarde a propagação** - pode levar até 24h, mas geralmente é mais rápido

---

## Como Saber se Está Funcionando

No Resend, você verá:
- ✅ Check verde ao lado do registro DKIM quando estiver correto
- ✅ Status do domínio mudando de "Pending" para "Verified"
- ✅ Seção "Enable Sending" com toggle verde (ativado)

---

## Problemas Comuns

### "O registro não aparece no Resend"
- Aguarde alguns minutos - DNS pode demorar para propagar
- Verifique se copiou o valor COMPLETO (especialmente o DKIM que é longo)
- Certifique-se de que salvou o registro no GoDaddy

### "Ainda está pendente após 24h"
- Verifique se todos os 4 registros foram adicionados
- Confirme que os nomes estão exatamente como mostrado (`send`, `resend._domainkey`, `_dmarc`)
- Verifique se os valores estão completos (sem cortes)

### "Erro ao salvar no GoDaddy"
- Verifique se não há espaços extras nos valores
- Certifique-se de que o tipo está correto (TXT ou MX)
- Para o registro MX, não esqueça de preencher a Prioridade (10)

---

## Quando Estiver Pronto

Assim que aparecer ✅ **"Verified"** no Resend:
- ✅ Emails de confirmação vão funcionar para qualquer cliente
- ✅ Emails vão aparecer como "Doxa Sistemas <noreply@doxasistemas.online>"
- ✅ Sistema totalmente funcional!

---

## Precisa de Ajuda?

Se tiver qualquer dúvida durante o processo, me avise que ajudo!
