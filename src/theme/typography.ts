/**
 * Type pairing chosen for rope-access trade clarity:
 * Syne — architectural display presence without brochure condensed menus
 * Manrope — readable body at 17px+ on dark industrial fields
 */
export const fonts = {
  display: 'Syne_700Bold',
  displaySemi: 'Syne_600SemiBold',
  displayExtra: 'Syne_800ExtraBold',
  body: 'Manrope_400Regular',
  bodyMedium: 'Manrope_500Medium',
  bodySemi: 'Manrope_600SemiBold',
  bodyBold: 'Manrope_700Bold',
} as const;

export const type = {
  hero: {
    fontFamily: fonts.displayExtra,
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: -0.6,
  },
  h1: {
    fontFamily: fonts.displayExtra,
    fontSize: 34,
    lineHeight: 38,
    letterSpacing: -0.5,
  },
  h2: {
    fontFamily: fonts.display,
    fontSize: 26,
    lineHeight: 30,
    letterSpacing: -0.3,
  },
  h3: {
    fontFamily: fonts.displaySemi,
    fontSize: 20,
    lineHeight: 26,
  },
  body: {
    fontFamily: fonts.body,
    fontSize: 17,
    lineHeight: 26,
  },
  bodyStrong: {
    fontFamily: fonts.bodySemi,
    fontSize: 17,
    lineHeight: 26,
  },
  caption: {
    fontFamily: fonts.bodyMedium,
    fontSize: 14,
    lineHeight: 20,
  },
  label: {
    fontFamily: fonts.bodySemi,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.4,
  },
  button: {
    fontFamily: fonts.bodyBold,
    fontSize: 17,
    lineHeight: 22,
  },
} as const;
