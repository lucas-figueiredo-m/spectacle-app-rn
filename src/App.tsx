import Router from 'navigation'
import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import 'locales'
import useColorScheme from 'hooks/useColorScheme'
import AuthListener from 'listeners/AuthListener'
import Toast from 'react-native-toast-message'
import { toastConfig } from 'utils/toastConfig'

const App: React.FC = () => {
  const colors = useColorScheme()
  return (
    <View style={styles.root}>
      <StatusBar barStyle='dark-content' backgroundColor={colors.Gradient[0]} />
      <AuthListener />
      <Router />
      <Toast config={toastConfig} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})

export default App
