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

const themedStyles = createThemedStyles(({ metrics }) => ({
  spacerVertical: {
    height: metrics.lg
  },
  spacerHorizontal: {
    width: metrics.sm
  }
}))

export default {
  H,
  V
}
