export const CommonPallete = {
  White: '#FFFFFF',
  Black: '#000000',
  Transparent: 'transparent'
}

type ThemedPallete = {
  Primary: string
  Secondary: string
  Contrast: string
  Gradient: string[]
}

const DarkPallete: ThemedPallete = {
  Primary: '',
  Secondary: '',
  Contrast: '',
  Gradient: ['#7CACD1', '#AD9BE2']
}

const LightPallete: ThemedPallete = {
  Primary: '',
  Secondary: '',
  Contrast: '',
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
