import { useNavigation } from '@react-navigation/native'
import Screen from 'components/Screen'
import { MainRoutes, MainStackNavigationProps } from 'navigation/models/MainStackModels'
import { TabRoutes } from 'navigation/models/TabModels'
import React, { useEffect } from 'react'
import { Text } from 'react-native'

const SplashScreen: React.FC = () => {
  const { navigate } = useNavigation<MainStackNavigationProps<MainRoutes.SplashScreen>>()

  useEffect(() => {
    setTimeout(() => {
      navigate(MainRoutes.TabNavigator, { screen: TabRoutes.MoviesListScreen })
    }, 5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Screen>
      <Text>Hello world</Text>
    </Screen>
  )
}

export default SplashScreen
