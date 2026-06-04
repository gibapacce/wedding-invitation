# SPEC-001 — Convite Digital Interativo de Casamento

## Status

Draft

## Autor

Gilberto Pacce

---

# Objetivo

Desenvolver uma aplicação web mobile-first que funcione como um convite digital de casamento premium, proporcionando uma experiência emocional e interativa através de animações, storytelling visual e uma jornada digital completa contendo informações do evento, confirmação de participação e lista de presentes.

---

# Contexto

Convites digitais tradicionais normalmente consistem em páginas estáticas contendo informações do evento.

O objetivo deste projeto é elevar a experiência do usuário através de:

* Narrativa visual.
* Animações cinematográficas.
* Interação semelhante a um convite físico.
* Galeria de fotos.
* Livro virtual.
* Confirmação de participação através de contribuição para o buffet.
* Lista de presentes.

O sistema deverá funcionar prioritariamente em smartphones, mantendo compatibilidade com tablets e desktops.

---

# Metas do Produto

## M1

Criar uma experiência memorável para os convidados.

## M2

Centralizar todas as informações do casamento em uma única aplicação.

## M3

Permitir que os convidados obtenham todas as informações necessárias para confirmar sua participação através da contribuição do buffet e comunicação com os noivos.

## M4

Possuir carregamento rápido mesmo em conexões móveis.

## M5

Transmitir uma identidade visual sofisticada.

---

# Fora de Escopo

Não fazem parte da primeira versão:

* Área administrativa completa.
* Login de convidados.
* Chat em tempo real.
* Streaming ao vivo.
* Aplicativo nativo Android/iOS.
* Sistema de envio de convites.
* Processamento automático de pagamentos.
* Validação automática de PIX.
* Conciliação financeira.

---

# Personas

## Convidado

Idade: 20–70 anos

### Objetivos

* Obter informações do evento.
* Visualizar fotos.
* Encontrar localização.
* Obter instruções para confirmar sua participação.

### Necessidades

* Navegação simples.
* Boa experiência em celular.
* Poucos cliques.

---

# Requisitos Funcionais

## RF-001 — Abertura do Convite

### Descrição

Ao acessar o site, o usuário deverá visualizar um envelope fechado.

### Critérios de Aceite

* Envelope aparece centralizado.
* Exibe nome do casal.
* Exibe CTA para abertura.
* Ao tocar ocorre animação de abertura.

---

## RF-002 — Exibição do Convite

### Descrição

Após abertura do envelope, o convite principal deverá ser exibido.

### Conteúdo

* Nome dos noivos.
* Data.
* Mensagem principal.
* Local.

### Critérios de Aceite

* Transição suave.
* Tempo máximo de animação: 3 segundos.

---

## RF-003 — Timeline do Casal

### Descrição

Exibir linha do tempo com marcos importantes.

### Campos

* Data.
* Foto.
* Título.
* Descrição.

### Critérios de Aceite

* Navegação por scroll.
* Animação ao entrar na viewport.

---

## RF-004 — Galeria de Fotos

### Descrição

Permitir visualização de fotos do casal.

### Critérios de Aceite

* Swipe horizontal.
* Suporte a múltiplas imagens.
* Lazy loading.

---

## RF-005 — Livro Interativo

### Descrição

Permitir navegação através de páginas simulando um álbum físico.

### Critérios de Aceite

* Página pode ser arrastada.
* Efeito visual de dobra.
* Compatível com dispositivos móveis.

---

## RF-006 — Informações do Evento

### Campos

* Data.
* Horário.
* Endereço.
* Dress Code.
* Informações adicionais.

### Critérios de Aceite

* Fácil leitura.
* Botão para abrir rota no Google Maps.

---

## RF-007 — Countdown

### Descrição

Exibir contagem regressiva até o casamento.

### Critérios de Aceite

* Atualização automática.
* Considerar timezone local.

---

## RF-008 — Confirmação de Participação

### Descrição

Permitir que os convidados visualizem as informações necessárias para confirmar sua participação através da contribuição referente ao buffet.

### Conteúdo

* Valor por participante.
* Data limite para confirmação.
* QR Code PIX.
* Chave PIX.
* Instruções para comunicação com os noivos.

### Critérios de Aceite

* QR Code facilmente escaneável.
* Botão para copiar chave PIX.
* Instruções claras para confirmação.
* Layout compatível com dispositivos móveis.

---

## RF-008.1 — Comunicação com os Noivos

### Descrição

Após realizar a contribuição referente ao buffet, o convidado deverá ser direcionado para um canal de comunicação com os noivos.

### Critérios de Aceite

* Botão WhatsApp visível.
* Mensagem pré-preenchida.
* Funcionamento em Android e iPhone.

---

## RF-009 — Lista de Presentes

### Descrição

Exibir links para lista de presentes.

### Critérios de Aceite

* Abertura em nova aba.
* Fácil acesso.

---

# Requisitos Não Funcionais

## RNF-001 — Mobile First

A aplicação deverá ser desenvolvida priorizando telas móveis.

### Resoluções Alvo

* 320px
* 375px
* 390px
* 414px
* 430px

---

## RNF-002 — Performance

### Lighthouse

Performance ≥ 90

### First Contentful Paint

≤ 2 segundos

### Largest Contentful Paint

≤ 2.5 segundos

---

## RNF-003 — SEO

Metadados completos:

* Title
* Description
* OpenGraph
* WhatsApp Preview

---

## RNF-004 — Acessibilidade

Meta: WCAG AA

### Requisitos

* Contraste adequado.
* Navegação por teclado.
* Labels e descrições acessíveis para elementos interativos.

---

## RNF-005 — Segurança

* HTTPS obrigatório.
* Validação de links externos.
* Proteção contra manipulação de URLs.

---

# Arquitetura Técnica

## Frontend

* Next.js 15
* TypeScript
* Tailwind CSS
* Framer Motion
* GSAP
* SwiperJS
* React PageFlip

---

# Estrutura de Rotas

Aplicação Single Page

```txt
/
```

---

# Estrutura de Componentes

```txt
Envelope/
Invitation/
Timeline/
Gallery/
FlipBook/
Countdown/
PaymentConfirmation/
PixQRCode/
WhatsAppContact/
GiftList/
MusicPlayer/
FloatingActions/
```

---

# Modelo de Dados

## TimelineEvent

```typescript
interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}
```

---

# Persistência de Dados

A versão 1 não utiliza banco de dados.

Todas as informações são configuradas estaticamente através do projeto Next.js.

---

# Design System

## Paleta

Champagne — #F8F4EF

Gold — #E5D3B3

Dark Gold — #B08D57

Brown — #5A4634

### Tipografia

Heading:

Playfair Display

Body:

Cormorant Garamond

---

# Eventos Analíticos

* envelope_opened
* timeline_viewed
* payment_info_viewed
* pix_key_copied
* whatsapp_confirmation_clicked
* gift_list_clicked

---

# Deploy

## Repositório

GitHub

## CI/CD

GitHub → Vercel

## Produção

Domínio oficial do casamento

---

# Critérios de Sucesso

## Negócio

* 80% dos convidados acessam o convite.
* 70% dos convidados utilizam a área de confirmação de participação.

## Técnicos

* Lighthouse > 90.
* Tempo de carregamento < 3 segundos.
* Zero erros críticos em produção.

---

# Roadmap Futuro

## V2

* Painel administrativo.
* Convites individualizados.
* Lista de convidados.
* Controle de mesas.
* Integração com iCasei.
* Upload de mensagens dos convidados.
* PWA instalável.
