import useColorScheme from 'hooks/useColorScheme'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import React from 'react'
import { SafeAreaView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Screen: React.FC = ({ children }) => {
  const colors = useColorScheme()
  const styles = useThemedStyles(themedStyles)

  return (
    <LinearGradient style={styles.root} colors={colors.Gradient}>
      <SafeAreaView style={styles.root}>{children}</SafeAreaView>
    </LinearGradient>
  )
}

const themedStyles = createThemedStyles(() => ({
  root: {
    flex: 1
  }
}))

export default Screen
