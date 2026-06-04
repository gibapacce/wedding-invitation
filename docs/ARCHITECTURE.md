# ARCHITECTURE.md

# Visão Geral

O sistema será uma aplicação web mobile-first construída utilizando Next.js 15 e hospedada na Vercel.

A aplicação terá foco em conteúdo, experiência visual e interação dos convidados, sem necessidade de backend na versão inicial.

Toda a aplicação será baseada em conteúdo estático, utilizando integrações externas para:

* WhatsApp
* Google Maps
* QR Code PIX

Objetivos arquiteturais:

* Performance
* Simplicidade operacional
* Excelente experiência mobile
* SEO otimizado
* Fácil manutenção
* Baixo custo operacional

---

# Arquitetura de Alto Nível

```txt
┌─────────────────┐
│     Usuário     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│     Vercel      │
│   Next.js App   │
└────────┬────────┘
         │
         ├─────────────► Google Maps
         │
         ├─────────────► WhatsApp
         │
         └─────────────► PIX QR Code
```

---

# Stack Tecnológica

## Frontend

Framework

* Next.js 15

Linguagem

* TypeScript

Estilização

* Tailwind CSS

Animações

* Framer Motion
* GSAP

Galerias

* SwiperJS

Livro Interativo

* react-pageflip

Ícones

* Lucide React

Fontes

* Google Fonts
* Playfair Display
* Cormorant Garamond
* Inter

---

# Estratégia de Renderização

A aplicação utilizará preferencialmente:

* Server Components
* Static Generation

Client Components serão utilizados apenas quando necessário:

* Animações
* Countdown
* Swiper
* PageFlip
* Música
* Botões interativos

Objetivo:

* Melhor performance
* Menor bundle JavaScript
* Melhor SEO

---

# Estrutura de Pastas

```txt
src/

├── app/
│
├── components/
│   ├── sections/
│   │   ├── envelope/
│   │   ├── invitation/
│   │   ├── timeline/
│   │   ├── gallery/
│   │   ├── flipbook/
│   │   ├── countdown/
│   │   ├── payment-confirmation/
│   │   ├── gift-list/
│   │   └── footer/
│   │
│   └── ui/
│       ├── button/
│       ├── card/
│       ├── modal/
│       ├── divider/
│       └── typography/
│
├── config/
│   └── wedding.ts
│
├── content/
│   ├── timeline.ts
│   ├── gallery.ts
│   └── messages.ts
│
├── hooks/
├── lib/
├── types/
├── constants/
└── styles/
```

---

# Configuração Centralizada

Arquivo:

```txt
src/config/wedding.ts
```

Responsável por armazenar:

* Nome dos noivos
* Data do casamento
* Local
* Endereço
* Chave PIX
* Valor por participante
* Link WhatsApp
* Link Google Maps
* Lista de presentes

Objetivo:

Evitar informações espalhadas pela aplicação.

---

# Feature Modules

## Envelope Module

Responsável por:

* Tela inicial
* Animação de abertura
* Entrada da experiência

Dependências:

* Framer Motion

---

## Invitation Module

Responsável por:

* Convite principal
* Nome dos noivos
* Mensagem inicial

---

## Story Module

Responsável por:

* História do casal
* Timeline
* Fotografias

Dependências:

* Framer Motion
* GSAP

---

## Gallery Module

Responsável por:

* Carrossel
* Swipe horizontal
* Lightbox

Dependências:

* SwiperJS

---

## FlipBook Module

Responsável por:

* Livro de memórias
* Virada de páginas

Dependências:

* react-pageflip

---

## Event Module

Responsável por:

* Informações da cerimônia
* Informações da recepção
* Dress code
* Localização

---

## Payment Confirmation Module

Responsável por:

* Valor por participante
* QR Code PIX
* Chave PIX
* Cópia da chave PIX
* Instruções de confirmação
* CTA para WhatsApp

---

# Hierarquia de Componentes

```txt
HomePage

├── Envelope
├── Invitation
├── Timeline
├── Gallery
├── FlipBook
├── EventInfo
├── Countdown
├── PaymentConfirmation
├── GiftList
└── Footer
```

---

# Gerenciamento de Estado

Estratégia inicial:

```ts
useState()
useMemo()
useCallback()
```

Não utilizar:

* Redux
* MobX

Caso necessário futuramente:

* Zustand

---

# Fluxo Principal

```txt
Usuário
   ↓
Abre Convite
   ↓
Explora História
   ↓
Visualiza Evento
   ↓
Consulta Participação
   ↓
Realiza PIX
   ↓
Contato via WhatsApp
```

---

# Analytics

Ferramentas

* Google Analytics
* Microsoft Clarity

Eventos

```txt
envelope_opened
timeline_viewed
gallery_viewed
flipbook_viewed
payment_info_viewed
pix_key_copied
whatsapp_confirmation_clicked
gift_list_clicked
maps_opened
```

---

# Performance Strategy

## Imagens

Formatos:

* AVIF
* WebP

Uso obrigatório:

```tsx
<Image />
```

---

## Lazy Loading

Aplicar em:

* Timeline
* Galeria
* Livro de Memórias

---

## Dynamic Imports

Carregar sob demanda:

* GSAP
* Swiper
* React PageFlip
* Player de Música

---

## Metas

Lighthouse:

* Performance ≥ 90
* Accessibility ≥ 95
* Best Practices ≥ 95
* SEO ≥ 95

---

# Segurança

Aplicação estática.

Proteções:

* HTTPS obrigatório
* Sanitização de URLs
* Validação de links externos
* Proteção contra parâmetros inválidos

---

# Observabilidade

Monitoramento:

* Google Analytics
* Microsoft Clarity

Objetivo:

* Entender navegação
* Medir engajamento
* Identificar pontos de abandono

---

# Deploy

## Repositório

GitHub

## CI/CD

GitHub → Vercel

## Ambientes

Development

```txt
localhost:3000
```

Production

```txt
https://seudominio.com.br
```

---

# Estratégia de Evolução

## V1

* Convite Digital
* Timeline
* Galeria
* Livro Interativo
* Countdown
* Confirmação de Participação
* QR Code PIX
* WhatsApp
* Lista de Presentes

## V2

* Convites individualizados
* Área administrativa
* Painel de conteúdo

## V3

* Gestão de convidados
* Controle de mesas
* Mensagens dos convidados
* PWA instalável
* Área exclusiva para familiares

```
```
