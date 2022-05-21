export enum FontFamily {
  Montserrat = 'Montserrat'
}

export enum FontSize {
  xxs = 8,
  xs = 10,
  sm = 12,
  md = 14,
  default = 16,
  lg = 18,
  xl = 20,
  xxl = 24,
  xxxl = 26,
  xxxxl = 30,
  title = 32
}

type FontWeightKeys =
  | 'black'
  | 'extraBold'
  | 'bold'
  | 'semibold'
  | 'medium'
  | 'regular'
  | 'thin'
  | 'light'
  | 'extraLight'

type FontWeightValues = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

type FontWeights = {
  [k in FontWeightKeys]: FontWeightValues
}

const weight: FontWeights = {
  black: '900',
  extraBold: '800',
  bold: '700',
  semibold: '600',
  medium: '500',
  regular: '400',
  thin: '300',
  light: '200',
  extraLight: '100'
}

export const Fonts = {
  families: {
    Montserrat: {
      family: FontFamily.Montserrat,
      weight
    }
  },
  sizes: {
    xxs: FontSize.xxs,
    xs: FontSize.xs,
    sm: FontSize.sm,
    md: FontSize.md,
    default: FontSize.default,
    lg: FontSize.lg,
    xl: FontSize.xl,
    xxl: FontSize.xxl,
    xxxl: FontSize.xxxl,
    xxxxl: FontSize.xxxxl,
    title: FontSize.title
  }
}

export type FontsType = typeof Fonts
