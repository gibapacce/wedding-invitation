# DESIGN_SYSTEM.md

# Visão Geral

O design deve transmitir:

* Elegância
* Sofisticação
* Leveza
* Romance
* Modernidade

Princípios:

* Mobile First
* Minimalista
* Poucos elementos por tela
* Muito espaço em branco
* Animações suaves
* Tipografia como protagonista

---

# Personalidade Visual

## Palavras-chave

* Delicado
* Atemporal
* Romântico
* Premium
* Editorial
* Cinematográfico

---

# Color System

## Background Principal

```css
#FAF7F4
```

Nome:

```txt
Ivory Mist
```

Uso:

* Fundo principal do site

---

## Surface

```css
#F4EEE8
```

Nome:

```txt
Soft Linen
```

Uso:

* Cards
* Containers
* Seções secundárias

---

## Primary

```css
#D8C3B5
```

Nome:

```txt
Rose Beige
```

Uso:

* Botões principais
* Destaques
* Ícones

---

## Secondary

```css
#C9D6C5
```

Nome:

```txt
Sage Mist
```

Uso:

* Detalhes decorativos
* Divisores
* Elementos secundários

---

## Accent

```css
#E8D8C3
```

Nome:

```txt
Champagne Blush
```

Uso:

* Hover
* Estados ativos
* Microinterações

---

## Text Primary

```css
#4E443D
```

Nome:

```txt
Warm Espresso
```

Uso:

* Títulos
* Textos importantes

---

## Text Secondary

```css
#7D736C
```

Nome:

```txt
Warm Gray
```

Uso:

* Descrições
* Conteúdo auxiliar

---

# Tailwind Tokens

```ts
colors: {
  background: "#FAF7F4",
  surface: "#F4EEE8",
  primary: "#D8C3B5",
  secondary: "#C9D6C5",
  accent: "#E8D8C3",
  text: "#4E443D",
  muted: "#7D736C"
}
```

---

# Typography

## Heading Font

Playfair Display

Uso:

* Nome dos noivos
* Títulos principais
* Datas importantes

---

## Body Font

Cormorant Garamond

Uso:

* Textos
* Mensagens
* Descrições

---

## UI Font

Inter

Uso:

* Botões
* Labels
* Informações técnicas

---

# Font Scale

## H1

```css
48px
font-weight: 600
```

---

## H2

```css
36px
font-weight: 600
```

---

## H3

```css
28px
font-weight: 500
```

---

## Body Large

```css
20px
font-weight: 400
```

---

## Body

```css
18px
font-weight: 400
```

---

## Small

```css
14px
font-weight: 400
```

---

# Spacing System

Base Unit

```css
8px
```

Escala

```txt
4
8
12
16
24
32
48
64
96
128
```

---

# Border Radius

## Small

```css
12px
```

---

## Medium

```css
20px
```

---

## Large

```css
32px
```

---

## Full

```css
9999px
```

Uso:

* Botões
* Avatares
* Tags

---

# Shadows

## Soft Shadow

```css
0 4px 20px rgba(0,0,0,0.06)
```

Uso:

* Cards
* Modais

---

## Floating Shadow

```css
0 12px 40px rgba(0,0,0,0.08)
```

Uso:

* Envelope
* Botões flutuantes

---

# Componentes Base

## Primary Button

Altura:

```css
52px
```

Cor:

```css
background: #D8C3B5
color: #4E443D
```

Hover:

```css
scale(1.02)
```

Tap:

```css
scale(0.98)
```

---

## Secondary Button

```css
background: transparent
border: 1px solid #D8C3B5
```

---

## Card

```css
background: #F4EEE8
border-radius: 20px
padding: 24px
```

---

# Motion Design

## Duração Padrão

```css
300ms
```

---

## Duração Longa

```css
700ms
```

---

## Easing Principal

```css
ease-out
```

---

# Animações

## Fade In

Uso:

* Textos
* Cards

---

## Slide Up

Uso:

* Timeline
* Informações

---

## Scale

Uso:

* Botões
* Fotos

---

## Page Flip

Uso:

* Livro de Memórias

---

## Envelope Open

Uso:

* Entrada da aplicação

---

# Ícones

Biblioteca:

```txt
Lucide React
```

Estilo:

* Outline
* Minimalista
* Stroke 1.5

---

# Imagens

Formato Preferencial

```txt
AVIF
```

Fallback

```txt
WebP
```

---

# Layout

## Largura Máxima

```css
480px
```

Objetivo:

Experiência mobile premium.

---

## Container

```css
padding-inline: 24px
```

---

# Glass Effect

Utilizar com moderação.

```css
backdrop-filter: blur(12px)
```

Permitido apenas em:

* Menu flutuante
* Botões de ação

---

# Regra Principal

Cada seção deve parecer uma página de um álbum de casamento.

O foco deve estar em:

1. Emoção
2. Fotografia
3. Tipografia
4. Movimento

Nunca em excesso de elementos visuais.
