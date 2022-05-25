import Router from 'navigation'
import React from 'react'
import { StatusBar } from 'react-native'
import 'locales'
import useColorScheme from 'hooks/useColorScheme'
import AuthListener from 'listeners/AuthListener'
import Toast from 'react-native-toast-message'
import { toastConfig } from 'utils/toastConfig'
import { Provider } from 'react-redux'
import store from 'store'

const App: React.FC = () => {
  const colors = useColorScheme()
  return (
    <Provider store={store}>
      <StatusBar barStyle='dark-content' backgroundColor={colors.Gradient[0]} />
      <AuthListener />
      <Router />
      <Toast config={toastConfig} />
    </Provider>
  )
}

export default App
