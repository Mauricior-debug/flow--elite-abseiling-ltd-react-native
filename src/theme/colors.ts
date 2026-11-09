/**
 * Brand colours verified from the live Elite Abseiling logo and site.
 * Logo lime (~#d4d700 / sampled #f0f048), white type, dark field.
 * Live page background #0A0C11; CTA orange present as WP #ff6900 — using brand CTA #f97316.
 */
export const colors = {
  bg: '#1a1a1a',
  bgSecondary: '#333333',
  bgElevated: '#242424',
  text: '#ffffff',
  textMuted: '#cccccc',
  accent: '#d4d700',
  cta: '#f97316',
  ctaPressed: '#ea6a0c',
  border: '#3a3a3a',
  overlay: 'rgba(10, 12, 17, 0.55)',
  overlayHeavy: 'rgba(10, 12, 17, 0.78)',
  danger: '#ef4444',
  success: '#d4d700',
} as const;

export type ColorName = keyof typeof colors;
