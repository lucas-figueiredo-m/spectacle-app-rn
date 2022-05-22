import { useNavigation } from '@react-navigation/native'
import Screen from 'components/Screen'
import { MainRoutes, MainStackNavigationProps } from 'navigation/models/MainStackModels'
import { TabRoutes } from 'navigation/models/TabModels'
import React, { useEffect } from 'react'
import { Image } from 'react-native'
import logo from 'assets/img/logo.png'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'

const SplashScreen: React.FC = () => {
  const { navigate } = useNavigation<MainStackNavigationProps<MainRoutes.SplashScreen>>()

  const styles = useThemedStyles(themedStyles)

  useEffect(() => {
    setTimeout(() => {
      navigate(MainRoutes.TabNavigator, { screen: TabRoutes.MoviesListScreen })
    }, 5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Screen style={styles.root}>
      <Image source={logo} style={styles.image} />
    </Screen>
  )
}

const themedStyles = createThemedStyles(() => ({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain'
  }
}))

export default SplashScreen
