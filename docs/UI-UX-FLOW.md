# UI-UX-FLOW.md

## Objetivo

Definir a jornada completa do convidado desde o acesso ao convite até a confirmação de participação através da contribuição para o buffet.

A experiência deve ser emocional, intuitiva e semelhante à interação com um convite físico premium.

---

# Jornada Principal

```txt
Acesso
 ↓
Envelope
 ↓
Convite
 ↓
História do Casal
 ↓
Galeria de Fotos
 ↓
Livro de Memórias
 ↓
Informações do Evento
 ↓
Countdown
 ↓
Confirmação de Participação
 ↓
Contato com os Noivos
 ↓
Lista de Presentes
```

---

# FLOW 01 — Entrada

## Objetivo

Criar curiosidade e expectativa.

## Tela

Envelope fechado.

### Elementos

* Nome dos noivos
* Selo decorativo
* Texto de convite

### CTA

```txt
Abrir Convite
```

### Interação

Toque no envelope.

### Resultado

Animação de abertura.

---

# FLOW 02 — Convite Principal

## Objetivo

Gerar impacto emocional.

### Elementos

* Nome dos noivos
* Data do casamento
* Mensagem principal
* Foto de destaque

### Animação

Convite se desdobra como um papel físico.

### CTA

```txt
Conheça Nossa História
```

---

# FLOW 03 — História do Casal

## Objetivo

Storytelling emocional.

### Estrutura

```txt
Foto
Data
Título
Descrição
```

### Interações

* Scroll vertical
* Fade In
* Slide Up
* Zoom leve

### Exemplo

```txt
2018
Nos conhecemos

2021
Noivado

2026
Casamento
```

---

# FLOW 04 — Galeria de Fotos

## Objetivo

Fortalecer conexão emocional.

### Interação

Swipe horizontal.

### Funcionalidades

* Navegação por gesto
* Ampliação de imagem
* Lazy Loading

### Estados

Normal

```txt
Foto
```

Expandido

```txt
Lightbox
```

---

# FLOW 05 — Livro de Memórias

## Objetivo

Criar efeito "uau".

### Interação

Arrastar páginas.

### Estados

```txt
Página Atual
      ↓
Arrastando
      ↓
Página Virada
```

### Conteúdo

* Fotos
* Mensagens
* Curiosidades do casal

---

# FLOW 06 — Informações do Evento

## Objetivo

Disponibilizar todas as informações práticas.

### Seções

#### Cerimônia

* Data
* Horário
* Local

#### Recepção

* Data
* Horário
* Local

#### Dress Code

* Descrição
* Exemplos visuais opcionais

### CTA

```txt
Como Chegar
```

### Ação

Abrir Google Maps.

---

# FLOW 07 — Countdown

## Objetivo

Gerar expectativa para o evento.

### Exibição

```txt
120 Dias
10 Horas
42 Minutos
```

### Atualização

Automática em tempo real.

---

# FLOW 08 — Confirmação de Participação

## Objetivo

Explicar de forma clara como o convidado confirma sua participação.

### Estrutura

```txt
━━━━━━━━━━━━━━━━━━

CONFIRMAÇÃO DE PARTICIPAÇÃO

Valor por Pessoa

R$ XXX,XX

━━━━━━━━━━━━━━━━━━

Data Limite

DD/MM/AAAA

━━━━━━━━━━━━━━━━━━
```

### Mensagem

```txt
Sua participação será confirmada
mediante contribuição para o buffet.
```

---

# FLOW 09 — Pagamento PIX

## Objetivo

Facilitar o pagamento.

### Elementos

#### QR Code

Grande e centralizado.

#### Chave PIX

```txt
email@exemplo.com
```

### CTA

```txt
Copiar Chave PIX
```

### Feedback

```txt
Chave copiada com sucesso.
```

---

# FLOW 10 — Comunicação com os Noivos

## Objetivo

Finalizar o processo de confirmação.

### Mensagem

```txt
Após realizar o pagamento,
entre em contato com os noivos
para informar sua participação.
```

### CTA Principal

```txt
Falar com os Noivos
```

### Ação

Abrir WhatsApp.

### Mensagem Pré-preenchida

```txt
Olá!

Acabei de realizar o pagamento referente à participação no buffet do casamento.

Nome:
Quantidade de participantes:

Obrigado!
```

---

# FLOW 11 — Lista de Presentes

## Objetivo

Disponibilizar acesso rápido à lista.

### Layout

Cards ou botões.

Exemplos:

```txt
Amazon

Abrir Lista
```

```txt
iCasei

Abrir Lista
```

```txt
Lista dos Noivos

Abrir Lista
```

---

# FLOW 12 — Encerramento

## Objetivo

Finalizar a experiência de forma elegante.

### Conteúdo

```txt
Estamos ansiosos para celebrar
esse momento especial com você.
```

### Elementos

* Foto final do casal
* Mensagem de agradecimento

---

# Navegação Global

## Indicador de Progresso

Barra discreta no topo.

```txt
[■■■■□□□□]
```

Representa o progresso da experiência.

---

# Floating Actions

Posição:

Inferior direita.

### Ações

```txt
WhatsApp
```

```txt
Voltar ao Topo
```

```txt
Compartilhar Convite
```

---

# Estados de Loading

## Imagens

Placeholder suave.

## Galeria

Skeleton Loading.

## Livro

Página simulada.

---

# Microinterações

## Envelope

Hover:

Leve inclinação.

Tap:

Escala 0.98

---

## Botões

Hover:

Escala 1.05

Tap:

Escala 0.95

---

## Fotos

Hover:

Zoom suave.

---

# Acessibilidade

Todos os elementos interativos devem possuir:

* aria-label
* foco visível
* contraste AA
* suporte a leitores de tela

---

# Regra Principal de UX

O usuário nunca deve precisar procurar informações.

Toda a experiência deve funcionar como uma narrativa contínua.

Informações importantes devem estar acessíveis em:

* até 2 toques
* um único fluxo de scroll

O convite deve parecer uma experiência interativa e emocional, não um site institucional.
