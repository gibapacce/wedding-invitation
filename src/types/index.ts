export interface GiftList {
  name: string;
  url: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface EventLocation {
  name: string;
  address: string;
  city: string;
  state: string;
  time: string;
}

export interface WeddingConfig {
  brideName: string;
  groomName: string;
  weddingDate: string;
  ceremonyTime: string;
  receptionTime: string;
  ceremonyLocation: string;
  ceremonyAddress: string;
  receptionLocation: string;
  receptionAddress: string;
  pixKey: string;
  guestContribution: number;
  contributionDeadline: string;
  whatsappNumber: string;
  whatsappMessage: string;
  googleMapsLink: string;
  giftListLinks: GiftList[];
  dressCode: string;
  confirmationDeadline: string;
}
