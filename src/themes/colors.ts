export const CommonPallete = {
  White: '#FFFFFF',
  Black: '#000000',
  Transparent: 'transparent',
  MediumGrey: '#666666'
}

type ThemedPallete = {
  Primary: string
  Secondary: string
  Contrast: string
  Gradient: string[]
  Negative: string
  Positive: string
}

const DarkPallete: ThemedPallete = {
  Primary: '#7CACD1',
  Secondary: '#AD9BE2',
  Contrast: '#A7E8BD',
  Negative: '#991111',
  Positive: '#4E6E58',
  Gradient: ['#7CACD1', '#AD9BE2']
}

const LightPallete: ThemedPallete = {
  Primary: '#7CACD1',
  Secondary: '#AD9BE2',
  Contrast: '#A7E8BD',
  Negative: '#991111',
  Positive: '#4E6E58',
  Gradient: ['#7CACD1', '#AD9BE2']
}

export const Colors = {
  light: {
    Common: CommonPallete,
    ...LightPallete
  },

  dark: {
    Common: CommonPallete,
    ...DarkPallete
  }
}

type ColorsThemeLight = typeof Colors.light
type ColorsThemeDark = typeof Colors.dark
type ColorsCommon = typeof CommonPallete

export interface ColorsType extends ColorsThemeLight, ColorsThemeDark {}
export interface ColorsPallete extends ColorsCommon, ThemedPallete {}
