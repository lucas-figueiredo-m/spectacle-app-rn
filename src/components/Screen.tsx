import useColorScheme from 'hooks/useColorScheme'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import React from 'react'
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface Props {
  style?: StyleProp<ViewStyle>
}

const Screen: React.FC<Props> = ({ children, style }) => {
  const colors = useColorScheme()
  const styles = useThemedStyles(themedStyles)

  return (
    <LinearGradient style={styles.root} colors={colors.Gradient}>
      <SafeAreaView style={[styles.root, style]}>{children}</SafeAreaView>
    </LinearGradient>
  )
}

const themedStyles = createThemedStyles(() => ({
  root: {
    flex: 1
  }
}))

export default Screen
