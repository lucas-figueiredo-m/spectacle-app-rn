import { ImageStyle, StyleSheet, TextStyle, useColorScheme, ViewStyle } from 'react-native'
import { Colors, ColorsType } from 'themes/colors'
import { Fonts, FontsType } from 'themes/fonts'
import { Metrics, MetricsType } from 'themes/metrics'

type AppearanceProviderParams = {
  colors: ColorsType
  fonts: FontsType
  metrics: MetricsType
}

type AppearanceProvider<T> = (params: AppearanceProviderParams) => T

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }

interface ThemedStyleSheet<T> {
  dark: T
  light: T
}

export function useThemedStyles<T>(styles: ThemedStyleSheet<T>) {
  return styles[useColorScheme() || 'light']
}

export function createThemedStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  styles: AppearanceProvider<T>
): ThemedStyleSheet<T> {
  const light = StyleSheet.create(styles({ colors: Colors.light, fonts: Fonts, metrics: Metrics }))
  const dark = StyleSheet.create(styles({ colors: Colors.dark, fonts: Fonts, metrics: Metrics }))
  return { light, dark }
}
