import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { ToastConfig } from 'react-native-toast-message'

import wifiOff from 'assets/icons/wifi-off.svg'
import check from 'assets/icons/check-circle.svg'
import alert from 'assets/icons/alert-triangle.svg'

import SVG from 'components/SVG'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import useColorScheme from 'hooks/useColorScheme'
import Label from 'components/Label'

const themedStyles = createThemedStyles(({ colors }) => ({
  container: {
    height: 80,
    width: '90%',
    backgroundColor: colors.Common.White,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10
  },
  colorBar: {
    height: 80,
    width: '3%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  icon: {
    marginHorizontal: 10
  },
  content: {
    flex: 1
  }
}))

interface Props {
  onPress: () => void
  color: string
  title: string
  message: string
  icon: string
}

const ToastComponent: React.FC<Props> = ({ onPress, color, title, message, icon }) => {
  const styles = useThemedStyles(themedStyles)
  const colors = useColorScheme()
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.container}>
      <View style={[styles.colorBar, { backgroundColor: color }]} />
      <SVG style={styles.icon} xml={icon} color={colors.Common.MediumGrey} width={35} height={35} />
      <View style={styles.content}>
        <Label.H3 t={title} />
        <Label.P4 t={message} />
      </View>
    </TouchableOpacity>
  )
}

export const toastConfig: ToastConfig = {
  WifiToast: ({ onPress }) => {
    const colors = useColorScheme()
    return (
      <ToastComponent
        onPress={onPress}
        icon={wifiOff}
        color={colors.Negative}
        title='error.wifi.title'
        message='error.wifi.message'
      />
    )
  },
  ErrorToast: ({ onPress, text1, text2 }) => {
    const colors = useColorScheme()
    return (
      <ToastComponent
        onPress={onPress}
        icon={alert}
        color={colors.Negative}
        title={text1 || 'error'}
        message={text2 || 'undefined'}
      />
    )
  },
  SuccessToast: ({ onPress, text1, text2 }) => {
    const colors = useColorScheme()
    return (
      <ToastComponent
        onPress={onPress}
        icon={check}
        color={colors.Positive}
        title={text1 || 'error'}
        message={text2 || 'undefined'}
      />
    )
  }
}
