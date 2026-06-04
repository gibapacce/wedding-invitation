# COMPONENTS.md

# Objetivo

Definir todos os componentes da aplicação, suas responsabilidades, dependências e contratos.

---

# Estrutura Geral

```txt
HomePage

├── EnvelopeSection
├── InvitationSection
├── TimelineSection
├── GallerySection
├── FlipBookSection
├── EventInfoSection
├── CountdownSection
├── PaymentConfirmationSection
├── GiftListSection
├── FooterSection

└── FloatingActions
```

---

# EnvelopeSection

## Objetivo

Criar a primeira impressão do convite simulando um envelope físico.

## Responsabilidades

* Exibir envelope fechado
* Exibir nome dos noivos
* Exibir CTA de abertura
* Executar animação de abertura
* Liberar acesso ao restante do conteúdo

## Dependências

* Framer Motion

## Props

```ts
interface EnvelopeSectionProps {
  onOpen: () => void;
}
```

## Estados

```ts
isOpen: boolean;
```

---

# InvitationSection

## Objetivo

Apresentar oficialmente o convite.

## Responsabilidades

* Nome dos noivos
* Mensagem principal
* Data do casamento
* Foto principal

## Props

```ts
interface InvitationSectionProps {
  brideName: string;
  groomName: string;
  weddingDate: string;
  message: string;
  heroImage: string;
}
```

---

# TimelineSection

## Objetivo

Contar a história do casal.

## Responsabilidades

* Exibir eventos cronológicos
* Animações durante scroll
* Exibir fotos e descrições

## Dependências

* GSAP
* Framer Motion

## Props

```ts
interface TimelineSectionProps {
  events: TimelineEvent[];
}
```

---

# TimelineCard

## Objetivo

Representar um único evento da timeline.

## Props

```ts
interface TimelineCardProps {
  event: TimelineEvent;
}
```

---

# GallerySection

## Objetivo

Exibir galeria de fotos.

## Responsabilidades

* Swipe horizontal
* Paginação
* Zoom
* Lightbox

## Dependências

* SwiperJS

## Props

```ts
interface GallerySectionProps {
  images: GalleryImage[];
}
```

---

# GalleryImageCard

## Objetivo

Exibir uma única imagem da galeria.

## Props

```ts
interface GalleryImageCardProps {
  image: GalleryImage;
}
```

---

# FlipBookSection

## Objetivo

Simular álbum físico de memórias.

## Responsabilidades

* Virar páginas
* Exibir fotos
* Exibir textos

## Dependências

* react-pageflip

## Props

```ts
interface FlipBookSectionProps {
  pages: AlbumPage[];
}
```

---

# EventInfoSection

## Objetivo

Exibir informações do evento.

## Responsabilidades

* Data
* Horário
* Endereço
* Dress code
* Google Maps

## Props

```ts
interface EventInfoSectionProps {
  event: WeddingInfo;
}
```

---

# MapsButton

## Objetivo

Abrir localização no Google Maps.

## Props

```ts
interface MapsButtonProps {
  url: string;
}
```

---

# CountdownSection

## Objetivo

Exibir contagem regressiva.

## Responsabilidades

* Dias
* Horas
* Minutos
* Segundos

## Props

```ts
interface CountdownSectionProps {
  targetDate: string;
}
```

---

# CountdownCard

## Props

```ts
interface CountdownCardProps {
  value: number;
  label: string;
}
```

---

# PaymentConfirmationSection

## Objetivo

Orientar participação dos convidados.

## Responsabilidades

* Exibir valor por pessoa
* Exibir QR Code PIX
* Exibir chave PIX
* Exibir instruções
* Exibir CTA WhatsApp

## Props

```ts
interface PaymentConfirmationSectionProps {
  contributionAmount: string;
  pixKey: string;
  qrCodeImage: string;
  whatsappLink: string;
}
```

---

# PixQRCode

## Objetivo

Exibir QR Code PIX.

## Props

```ts
interface PixQRCodeProps {
  imageUrl: string;
}
```

---

# PixKeyCard

## Objetivo

Exibir chave PIX e permitir cópia.

## Props

```ts
interface PixKeyCardProps {
  pixKey: string;
}
```

---

# WhatsAppButton

## Objetivo

Abrir WhatsApp com mensagem pré-preenchida.

## Props

```ts
interface WhatsAppButtonProps {
  whatsappLink: string;
}
```

---

# GiftListSection

## Objetivo

Exibir lista de presentes.

## Responsabilidades

* Exibir parceiros
* Abrir links externos

## Props

```ts
interface GiftListSectionProps {
  gifts: GiftLink[];
}
```

---

# GiftCard

## Props

```ts
interface GiftCardProps {
  gift: GiftLink;
}
```

---

# FloatingActions

## Objetivo

Disponibilizar ações rápidas.

## Responsabilidades

* WhatsApp
* Voltar ao topo

## Props

```ts
interface FloatingActionsProps {
  whatsappLink: string;
}
```

---

# FooterSection

## Objetivo

Encerramento da experiência.

## Responsabilidades

* Mensagem final
* Nome dos noivos
* Créditos opcionais

## Props

```ts
interface FooterSectionProps {
  brideName: string;
  groomName: string;
}
```

---

# Shared UI Components

## Button

```ts
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
}
```

## Card

```ts
interface CardProps {
  children: React.ReactNode;
}
```

## SectionTitle

```ts
interface SectionTitleProps {
  title: string;
  subtitle?: string;
}
```

## Container

```ts
interface ContainerProps {
  children: React.ReactNode;
}
```
