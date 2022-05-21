import { useNavigation } from '@react-navigation/native'
import { MainRoutes, MainStackNavigationProps } from 'navigation/models/MainStackModels'
import { TabRoutes } from 'navigation/models/TabModels'
import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SplashScreen: React.FC = () => {
  const { navigate } = useNavigation<MainStackNavigationProps<MainRoutes.SplashScreen>>()

  useEffect(() => {
    setTimeout(() => {
      navigate(MainRoutes.TabNavigator, { screen: TabRoutes.MoviesListScreen })
    }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

export default SplashScreen
