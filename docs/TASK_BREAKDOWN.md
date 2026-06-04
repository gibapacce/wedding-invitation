# TASK_BREAKDOWN.md

# Objetivo

Transformar os requisitos do projeto em tarefas executáveis para desenvolvimento.

Prioridade:

1. Estrutura Base
2. Experiência Principal
3. Conteúdo
4. Polimento Visual
5. Deploy

---

# EPIC 01 — Foundation

Objetivo:

Criar a base técnica do projeto.

## Tarefas

### Setup

* [ ] Criar projeto Next.js 15
* [ ] Configurar TypeScript
* [ ] Configurar ESLint
* [ ] Configurar Prettier
* [ ] Configurar Tailwind CSS

### Estrutura

* [ ] Criar estrutura de pastas definida na arquitetura
* [ ] Criar pasta docs
* [ ] Criar pasta content
* [ ] Criar pasta config

### Design System

* [ ] Configurar paleta de cores
* [ ] Configurar fontes
* [ ] Configurar tokens Tailwind
* [ ] Configurar espaçamentos globais
* [ ] Configurar tipografia

### Configuração Central

* [ ] Criar wedding.ts
* [ ] Configurar dados do casal
* [ ] Configurar endereço
* [ ] Configurar links externos
* [ ] Configurar chave PIX

---

# EPIC 02 — Layout Base

Objetivo:

Criar estrutura principal da aplicação.

## Tarefas

### Layout

* [ ] Criar layout principal
* [ ] Criar container responsivo
* [ ] Criar sistema de seções
* [ ] Criar barra de progresso

### Navegação

* [ ] Implementar scroll suave
* [ ] Criar navegação por âncoras
* [ ] Criar botão voltar ao topo

### Responsividade

* [ ] Testar em 320px
* [ ] Testar em 375px
* [ ] Testar em 390px
* [ ] Testar em 430px

---

# EPIC 03 — Envelope

Objetivo:

Criar a entrada da experiência.

## Tarefas

### UI

* [ ] Criar componente Envelope
* [ ] Criar selo decorativo
* [ ] Criar botão de abertura

### Animação

* [ ] Implementar animação de abertura
* [ ] Implementar transição para convite
* [ ] Implementar estado aberto

### Analytics

* [ ] Registrar evento envelope_opened

---

# EPIC 04 — Convite Principal

Objetivo:

Apresentar os noivos e o evento.

## Tarefas

### Conteúdo

* [ ] Criar Hero Section
* [ ] Exibir nome dos noivos
* [ ] Exibir data do casamento
* [ ] Exibir mensagem principal

### Visual

* [ ] Adicionar imagem principal
* [ ] Adicionar animações de entrada
* [ ] Implementar CTA para próxima seção

---

# EPIC 05 — Timeline

Objetivo:

Contar a história do casal.

## Tarefas

### Estrutura

* [ ] Criar modelo TimelineEvent
* [ ] Criar fonte de dados timeline.ts

### UI

* [ ] Criar Timeline Section
* [ ] Criar Timeline Card
* [ ] Criar indicador visual de progresso

### Motion

* [ ] Implementar Fade In
* [ ] Implementar Slide Up
* [ ] Implementar animações on-scroll

### Analytics

* [ ] Registrar timeline_viewed

---

# EPIC 06 — Galeria

Objetivo:

Exibir fotografias do casal.

## Tarefas

### Estrutura

* [ ] Criar gallery.ts
* [ ] Configurar imagens

### UI

* [ ] Criar Gallery Section
* [ ] Criar Swiper
* [ ] Criar paginação

### Funcionalidades

* [ ] Implementar swipe
* [ ] Implementar zoom
* [ ] Implementar lightbox

### Performance

* [ ] Lazy loading
* [ ] Otimização de imagens

### Analytics

* [ ] Registrar gallery_viewed

---

# EPIC 07 — Livro de Memórias

Objetivo:

Criar experiência de álbum físico.

## Tarefas

### Estrutura

* [ ] Criar modelo de páginas
* [ ] Definir conteúdo do álbum

### UI

* [ ] Implementar react-pageflip
* [ ] Criar layout de página

### Motion

* [ ] Implementar virada de página
* [ ] Ajustar animações mobile

### Analytics

* [ ] Registrar flipbook_viewed

---

# EPIC 08 — Informações do Evento

Objetivo:

Centralizar informações importantes.

## Tarefas

### Cerimônia

* [ ] Data
* [ ] Horário
* [ ] Local

### Recepção

* [ ] Data
* [ ] Horário
* [ ] Local

### Dress Code

* [ ] Criar seção visual
* [ ] Adicionar descrição

### Localização

* [ ] Criar botão Google Maps
* [ ] Abrir rota externa

### Analytics

* [ ] Registrar maps_opened

---

# EPIC 09 — Countdown

Objetivo:

Criar expectativa para o evento.

## Tarefas

### UI

* [ ] Criar Countdown Section
* [ ] Criar Cards de tempo

### Lógica

* [ ] Calcular diferença de datas
* [ ] Atualização em tempo real
* [ ] Ajustar timezone

---

# EPIC 10 — Confirmação de Participação

Objetivo:

Orientar o convidado sobre a participação no buffet.

## Tarefas

### Conteúdo

* [ ] Exibir valor por participante
* [ ] Exibir data limite

### PIX

* [ ] Gerar QR Code PIX
* [ ] Exibir chave PIX
* [ ] Criar botão copiar chave

### Instruções

* [ ] Criar texto explicativo
* [ ] Criar aviso de comunicação com os noivos

### Analytics

* [ ] Registrar payment_info_viewed
* [ ] Registrar pix_key_copied

---

# EPIC 11 — WhatsApp

Objetivo:

Facilitar comunicação com os noivos.

## Tarefas

### Integração

* [ ] Criar link WhatsApp
* [ ] Criar mensagem pré-preenchida

### UI

* [ ] Criar botão principal
* [ ] Criar botão flutuante

### Analytics

* [ ] Registrar whatsapp_confirmation_clicked

---

# EPIC 12 — Lista de Presentes

Objetivo:

Disponibilizar acesso à lista.

## Tarefas

### Conteúdo

* [ ] Configurar links
* [ ] Criar cards de acesso

### UI

* [ ] Criar Gift List Section
* [ ] Criar CTA visual

### Analytics

* [ ] Registrar gift_list_clicked

---

# EPIC 13 — Música Ambiente

Objetivo:

Aumentar imersão emocional.

## Tarefas

### Player

* [ ] Criar Music Player
* [ ] Implementar play/pause

### UX

* [ ] Iniciar apenas após interação do usuário
* [ ] Salvar estado durante navegação

### Performance

* [ ] Carregar áudio sob demanda

---

# EPIC 14 — Microinterações

Objetivo:

Aumentar percepção de qualidade.

## Tarefas

### Botões

* [ ] Hover
* [ ] Active
* [ ] Focus

### Fotos

* [ ] Zoom suave

### Cards

* [ ] Fade In

### Scroll

* [ ] Progress Bar
* [ ] Scroll Reveal

---

# EPIC 15 — SEO

Objetivo:

Garantir compartilhamento e indexação.

## Tarefas

### Metadata

* [ ] Title
* [ ] Description
* [ ] Open Graph
* [ ] Twitter Card

### Compartilhamento

* [ ] Imagem de preview
* [ ] Preview WhatsApp

---

# EPIC 16 — Analytics

Objetivo:

Monitorar uso da aplicação.

## Tarefas

### Google Analytics

* [ ] Configurar GA4

### Clarity

* [ ] Configurar Microsoft Clarity

### Eventos

* [ ] envelope_opened
* [ ] timeline_viewed
* [ ] gallery_viewed
* [ ] flipbook_viewed
* [ ] payment_info_viewed
* [ ] pix_key_copied
* [ ] whatsapp_confirmation_clicked
* [ ] gift_list_clicked
* [ ] maps_opened

---

# EPIC 17 — Performance

Objetivo:

Atingir métricas Lighthouse.

## Tarefas

### Imagens

* [ ] Converter para AVIF
* [ ] Gerar WebP fallback

### Bundle

* [ ] Dynamic imports
* [ ] Remover código não utilizado

### Lighthouse

* [ ] Performance ≥ 90
* [ ] Accessibility ≥ 95
* [ ] Best Practices ≥ 95
* [ ] SEO ≥ 95

---

# EPIC 18 — Deploy

Objetivo:

Publicar o projeto.

## Tarefas

### GitHub

* [ ] Criar repositório
* [ ] Configurar branch main

### Vercel

* [ ] Criar projeto
* [ ] Configurar domínio

### Produção

* [ ] Testar links
* [ ] Testar Google Maps
* [ ] Testar WhatsApp
* [ ] Testar QR Code PIX
* [ ] Validar responsividade
* [ ] Validar Lighthouse

---

# Definition of Done

Uma funcionalidade será considerada concluída quando:

* Código implementado
* Responsivo
* Testado em mobile
* Sem erros de console
* Acessível
* Performance validada
* Aprovada visualmente
