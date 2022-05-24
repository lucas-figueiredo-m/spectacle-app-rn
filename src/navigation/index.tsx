import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainRoutes, MainStackParamList } from 'navigation/models/MainStackModels'
import SplashScreen from 'screens/SplashScreen/SplashScreen'
import TabNavigator from 'navigation/TabNavigator'
import { modalOptions } from 'navigation/config/config'
import SignInScreen from 'screens/SignInScreen/SignInScreen'
import SignUpScreen from 'screens/SignUpScreen/SignUpScreen'
import AddNewMovieScreen from 'screens/AddNewMovieScreen/AddNewMovieScreen'
import AddNewTrackScreen from 'screens/AddNewTrackScreen/AddNewTrackScreen'
import { rootNavigationRef } from 'hooks/useRootNavigator'
import AddNewMovieCategoryScreen from 'screens/AddNewMovieCategoryScreen/AddNewMovieCategoryScreen'

const Stack = createStackNavigator<MainStackParamList>()

const Router: React.FC = () => (
  <NavigationContainer ref={rootNavigationRef}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={MainRoutes.SplashScreen} component={SplashScreen} />
      <Stack.Screen name={MainRoutes.SignInScreen} component={SignInScreen} />
      <Stack.Screen name={MainRoutes.TabNavigator} component={TabNavigator} />

      <Stack.Group screenOptions={modalOptions}>
        <Stack.Screen name={MainRoutes.SignUpScreen} component={SignUpScreen} />
        <Stack.Screen name={MainRoutes.AddNewMovieScreen} component={AddNewMovieScreen} />
        <Stack.Screen name={MainRoutes.AddNewTrackScreen} component={AddNewTrackScreen} />
        <Stack.Screen name={MainRoutes.AddNewMovieCategoryScreen} component={AddNewMovieCategoryScreen} />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
)

export default Router
