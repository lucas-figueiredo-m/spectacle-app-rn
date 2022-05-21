import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text>Hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomeScreen
