import { hitSlop } from 'constants/constants'
import React from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'

import SVG from './SVG'

interface Props {
  onPress: () => void
  icon: string
  color: string
  size: number
  style?: StyleProp<ViewStyle>
}

const IconButton: React.FC<Props> = ({ onPress, icon, size, color, style }) => {
  return (
    <TouchableOpacity style={style} hitSlop={hitSlop.sm} onPress={onPress}>
      <SVG xml={icon} width={size} height={size} color={color} />
    </TouchableOpacity>
  )
}

export default IconButton
