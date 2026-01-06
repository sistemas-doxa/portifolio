# Configuração de Envio de Email

## Como Funciona

Quando um usuário clica em "Solicitar Orçamento Agora", o sistema envia um email formatado para o endereço configurado.

## Opção 1: Usar Resend (Recomendado)

1. Acesse https://resend.com e crie uma conta gratuita
2. Obtenha sua API Key
3. Crie um arquivo `.env.local` na raiz do projeto:

```env
RESEND_API_KEY=re_sua_api_key_aqui
CONTACT_EMAIL=contato@doxasistemas.com.br
```

4. O email será enviado automaticamente com um template HTML bonito

## Opção 2: Fallback Automático

Se o Resend não estiver configurado, o sistema abre automaticamente o cliente de email padrão do usuário com um template pré-preenchido.

## Template do Email

O email enviado inclui:
- Cabeçalho com gradiente da marca Doxa
- Informações da solicitação (data/hora, tipo, origem)
- Instruções de próximos passos
- Rodapé profissional

## Personalização

Para alterar o email de destino, edite a variável `CONTACT_EMAIL` no arquivo `.env.local`.

Para personalizar o template do email, edite o arquivo `app/api/send-email/route.ts`.

