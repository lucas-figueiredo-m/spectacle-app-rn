import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import React from 'react'
import { View } from 'react-native'

const V: React.FC = () => {
  const styles = useThemedStyles(themedStyles)
  return <View style={styles.spacerVertical} />
}

const H: React.FC = () => {
  const styles = useThemedStyles(themedStyles)
  return <View style={styles.spacerHorizontal} />
}

const themedStyles = createThemedStyles(({ metrics, colors }) => ({
  spacerVertical: {
    height: metrics.sm,
    backgroundColor: colors.Common.White
  },
  spacerHorizontal: {
    width: metrics.md
  }
}))

export default {
  H,
  V
}
