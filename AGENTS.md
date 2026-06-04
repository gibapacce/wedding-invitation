# AGENTS.md

# Convite Digital Interativo de Casamento

## Objetivo

Construir uma aplicação web mobile-first que funcione como um convite digital de casamento premium, seguindo integralmente a documentação do projeto.

---

# Fonte da Verdade

Antes de iniciar qualquer tarefa, leia obrigatoriamente:

1. docs/SPEC.md
2. docs/ARCHITECTURE.md
3. docs/UI-UX-FLOW.md
4. docs/DESIGN_SYSTEM.md
5. docs/TASK_BREAKDOWN.md

Caso exista conflito entre documentos, utilizar a seguinte ordem de prioridade:

```txt
SPEC.md
↓
ARCHITECTURE.md
↓
UI-UX-FLOW.md
↓
DESIGN_SYSTEM.md
↓
TASK_BREAKDOWN.md
```

Nunca tomar decisões arquiteturais sem consultar esses documentos.

---

# Escopo do Projeto

O projeto é uma aplicação estática hospedada na Vercel.

Não existe backend.

Não existe banco de dados.

Não existe autenticação.

Não existe área administrativa.

Não existe API própria.

Integrações permitidas:

* WhatsApp
* Google Maps
* QR Code PIX

---

# Stack Obrigatória

Framework:

* Next.js 15+

Linguagem:

* TypeScript

Estilização:

* Tailwind CSS

Animações:

* Framer Motion
* GSAP

Galeria:

* SwiperJS

Livro Interativo:

* react-pageflip

Ícones:

* Lucide React

Utilitários:

* clsx
* tailwind-merge

---

# Bibliotecas Proibidas

Não instalar sem autorização explícita:

* Redux
* MobX
* Recoil
* jQuery
* Bootstrap
* Material UI
* Ant Design
* Chakra UI
* Styled Components
* Emotion

---

# Arquitetura

Utilizar App Router.

Estrutura obrigatória:

```txt
src/

├── app/
├── components/
│   ├── sections/
│   └── ui/
│
├── config/
├── content/
├── hooks/
├── lib/
├── types/
├── constants/
└── styles/
```

Não criar novas estruturas sem justificativa.

---

# Organização dos Componentes

## Sections

Representam seções completas da página.

Exemplos:

```txt
Envelope
Invitation
Timeline
Gallery
FlipBook
EventInfo
Countdown
PaymentConfirmation
GiftList
Footer
```

---

## UI Components

Componentes reutilizáveis.

Exemplos:

```txt
Button
Card
Modal
Divider
SectionTitle
Container
```

---

# Regras de Desenvolvimento

## Mobile First

Toda implementação deve começar pelo mobile.

Breakpoints maiores devem ser adicionados posteriormente.

Nunca desenvolver desktop-first.

---

## Responsividade

Validar no mínimo:

```txt
320px
375px
390px
414px
430px
768px
1024px
```

---

## Performance

Prioridades:

1. Performance
2. UX
3. Efeitos visuais

Nunca sacrificar performance por animações.

---

## Imagens

Utilizar:

```tsx
<Image />
```

do Next.js.

Formatos:

```txt
AVIF
WebP
```

---

## Lazy Loading

Aplicar em:

* Galeria
* Livro Interativo
* Imagens secundárias

---

## Dynamic Imports

Utilizar para:

* GSAP
* Swiper
* React PageFlip
* Player de Música

---

# Regras de Código

## TypeScript

Nunca utilizar:

```ts
any
```

Preferir tipos explícitos.

---

## Componentes

Preferir:

```tsx
function ComponentName()
```

ou

```tsx
export function ComponentName()
```

---

## Imports

Utilizar alias:

```ts
@/components
@/content
@/config
@/lib
```

Evitar imports relativos extensos.

---

## Comentários

Não adicionar comentários desnecessários.

O código deve ser autoexplicativo.

---

# Design System

Todo desenvolvimento visual deve seguir:

docs/DESIGN_SYSTEM.md

Não inventar:

* Novas cores
* Novas tipografias
* Novos espaçamentos

Sem aprovação explícita.

---

# Experiência do Usuário

O projeto deve transmitir:

* Elegância
* Sofisticação
* Romance
* Leveza
* Exclusividade

Referências visuais:

* Apple
* Airbnb
* Vogue Weddings
* Martha Stewart Weddings

Evitar:

* Visual corporativo
* Visual gamer
* Visual futurista
* Excesso de elementos decorativos

---

# Fluxo de Trabalho

Ao iniciar uma tarefa:

1. Ler documentação
2. Identificar item correspondente no TASK_BREAKDOWN.md
3. Implementar apenas a tarefa solicitada
4. Não avançar para tarefas futuras automaticamente

---

# Atualização de Tarefas

Ao concluir uma tarefa:

Atualizar:

```txt
docs/TASK_BREAKDOWN.md
```

Alterando:

```txt
[ ] tarefa
```

para

```txt
[x] tarefa
```

---

# Entregáveis Obrigatórios

Ao finalizar uma tarefa, apresentar:

## Resumo

O que foi implementado.

## Arquivos Alterados

Lista completa dos arquivos modificados.

## Decisões Técnicas

Justificativa das escolhas realizadas.

## Próximos Passos

Próximas tarefas recomendadas.

---

# Critérios de Qualidade

Não considerar uma tarefa concluída sem:

* TypeScript sem erros
* ESLint sem erros
* Build funcionando
* Responsividade validada
* Design System respeitado

---

# Critérios de Sucesso

A implementação deve manter:

Performance:

```txt
>= 90
```

Accessibility:

```txt
>= 95
```

Best Practices:

```txt
>= 95
```

SEO:

```txt
>= 95
```

---

# Regra Principal

Quando houver dúvida:

Não assumir.

Consultar a documentação existente.

A documentação sempre prevalece sobre interpretações próprias.
