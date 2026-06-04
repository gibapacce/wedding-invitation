export const BREAKPOINTS = {
  xs: 320,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const COLORS = {
  background: "#FAF7F4",
  surface: "#F4EEE8",
  primary: "#D8C3B5",
  secondary: "#C9D6C5",
  accent: "#E8D8C3",
  text: "#4E443D",
  muted: "#7D736C",
} as const;

export const FONTS = {
  serif: '"Playfair Display", serif',
  body: '"Cormorant Garamond", serif',
  sans: '"Inter", sans-serif',
} as const;

export const ANIMATION_DURATION = {
  fast: 300,
  normal: 500,
  slow: 800,
  slower: 1200,
} as const;

export const Z_INDEX = {
  hide: -1,
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modal: 400,
  popover: 500,
  notification: 600,
  tooltip: 700,
} as const;
