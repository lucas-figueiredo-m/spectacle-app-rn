/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import Router from 'navigation'
import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import 'locales'

const App: React.FC = () => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle='dark-content' />
      <Router />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})

export default App
