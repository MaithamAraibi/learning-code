export type Palette = {
  bg: string;
  surface: string;
  text: string;
  subtext: string;
  primary: string;
  border: string;
  success: string;
  muted: string;
};

export const lightPalette: Palette = {
  bg: '#ffffff',
  surface: '#f8fafc',
  text: '#111827',
  subtext: '#475569',
  primary: '#0f766e',
  border: '#e2e8f0',
  success: '#0f766e',
  muted: '#9ca3af'
};

export const darkPalette: Palette = {
  bg: '#0b1220',
  surface: '#111827',
  text: '#f8fafc',
  subtext: '#94a3b8',
  primary: '#14b8a6',
  border: '#1f2937',
  success: '#14b8a6',
  muted: '#6b7280'
};
