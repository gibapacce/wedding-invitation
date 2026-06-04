# CONTENT_MODEL.md

# Objetivo

Definir todos os modelos de dados utilizados pelo convite.

---

# WeddingConfig

Configuração principal da aplicação.

```ts
interface WeddingConfig {
  brideName: string;
  groomName: string;

  weddingDate: string;

  heroImage: string;

  contributionAmount: string;

  pixKey: string;

  pixQrCodeImage: string;

  whatsappNumber: string;

  whatsappMessage: string;

  googleMapsUrl: string;

  venueName: string;

  venueAddress: string;

  dressCode: string;
}
```

---

# TimelineEvent

Evento da história do casal.

```ts
interface TimelineEvent {
  id: string;

  title: string;

  description: string;

  date: string;

  imageUrl: string;
}
```

Exemplo:

```ts
{
  id: "1",
  title: "Primeiro Encontro",
  description: "Foi aqui que tudo começou.",
  date: "2018-05-20",
  imageUrl: "/images/timeline/first-date.webp"
}
```

---

# GalleryImage

Imagem da galeria.

```ts
interface GalleryImage {
  id: string;

  imageUrl: string;

  alt: string;

  caption?: string;
}
```

---

# AlbumPage

Página do álbum interativo.

```ts
interface AlbumPage {
  id: string;

  title: string;

  text?: string;

  imageUrl?: string;
}
```

---

# WeddingInfo

Informações principais do evento.

```ts
interface WeddingInfo {
  date: string;

  ceremonyTime: string;

  receptionTime: string;

  venueName: string;

  address: string;

  googleMapsUrl: string;

  dressCode: string;

  additionalInfo?: string;
}
```

---

# GiftLink

Link para lista de presentes.

```ts
interface GiftLink {
  id: string;

  name: string;

  description?: string;

  url: string;

  logo?: string;
}
```

Exemplo:

```ts
{
  id: "1",
  name: "Amazon",
  url: "https://...",
  logo: "/images/gifts/amazon.svg"
}
```

---

# MusicTrack

Faixa de música ambiente.

```ts
interface MusicTrack {
  id: string;

  title: string;

  artist: string;

  fileUrl: string;
}
```

---

# AnalyticsEvent

Eventos rastreados.

```ts
type AnalyticsEvent =
  | "envelope_opened"
  | "timeline_viewed"
  | "gallery_viewed"
  | "flipbook_viewed"
  | "payment_info_viewed"
  | "pix_key_copied"
  | "whatsapp_confirmation_clicked"
  | "gift_list_clicked"
  | "maps_opened";
```

---

# Arquivos de Conteúdo

```txt
src/content/

gallery.ts
timeline.ts
messages.ts
album.ts
gift-list.ts
music.ts
```

---

# Arquivo Central de Configuração

```txt
src/config/

wedding.ts
```

Responsável por armazenar:

* Dados dos noivos
* Data do casamento
* PIX
* WhatsApp
* Google Maps
* Local
* Dress Code
* Imagem principal

```
```
