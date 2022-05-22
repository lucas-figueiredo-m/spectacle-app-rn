import Toast from 'react-native-toast-message'
import { Translation } from 'types/common'
import useTranslation from './useTranslation'

export default () => {
  const t = useTranslation()

  const wifiDisconnected = () => {
    Toast.show({
      type: 'WifiToast',
      position: 'top',
      visibilityTime: 7500,
      autoHide: true,
      onPress: () => Toast.hide()
    })
  }

  const ShowError = (title: Translation, message: Translation) => {
    Toast.show({
      type: 'ErrorToast',
      text1: t(title),
      text2: t(message),
      position: 'top',
      visibilityTime: 7500,
      autoHide: true,
      onPress: () => Toast.hide()
    })
  }

  const ShowSuccess = (title: Translation, message: Translation) => {
    Toast.show({
      type: 'SuccessToast',
      text1: t(title),
      text2: t(message),
      position: 'top',
      visibilityTime: 7500,
      autoHide: true,
      onPress: () => Toast.hide()
    })
  }

  return {
    wifiDisconnected,
    ShowError,
    ShowSuccess
  }
}
