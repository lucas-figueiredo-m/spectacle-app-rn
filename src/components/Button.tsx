import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import React from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import { Translation } from 'types/common'
import Label from './Label'

interface Props {
  onPress: () => void
  label: Translation
  style?: StyleProp<ViewStyle>
}

const Button: React.FC<Props> = ({ onPress, label, style }) => {
  const styles = useThemedStyles(themedStyles)

  return (
    <TouchableOpacity onPress={onPress} style={[styles.root, style]}>
      <Label.H3 t={label} style={styles.label} />
    </TouchableOpacity>
  )
}

const themedStyles = createThemedStyles(({ colors, metrics }) => ({
  root: {
    backgroundColor: colors.Common.White,
    paddingVertical: metrics.sm,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: metrics.xs
  },
  label: {
    color: colors.Primary
  }
}))

export default Button
