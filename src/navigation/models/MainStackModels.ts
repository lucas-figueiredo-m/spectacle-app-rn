import { NavigatorScreenParams, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Category } from 'models/firebaseModels'
import { TabParamsList } from './TabModels'

export enum MainRoutes {
  SplashScreen = 'SPLASH_SCREEN',
  TabNavigator = 'TAB_NAVIGATOR',
  SignInScreen = 'SIGN_IN_SCREEN',
  SignUpScreen = 'SIGN_UP_SCREEN',
  AddNewTrackScreen = 'ADD_NEW_TRACK_SCREEN',
  AddNewMovieScreen = 'ADD_NEW_MOVIE_SCREEN',
  AddNewMovieCategoryScreen = 'ADD_NEW_MOVIE_CATEGORY_SCREEN'
}

export type MainStackParamList = {
  [MainRoutes.SplashScreen]: undefined
  [MainRoutes.TabNavigator]: NavigatorScreenParams<TabParamsList>
  [MainRoutes.SignInScreen]: undefined
  [MainRoutes.SignUpScreen]: undefined
  [MainRoutes.AddNewMovieScreen]: { category: Category }
  [MainRoutes.AddNewTrackScreen]: undefined
  [MainRoutes.AddNewMovieCategoryScreen]: undefined
}

export type MainStackScreenProps<T extends MainRoutes> = RouteProp<MainStackParamList, T>
export type MainStackNavigationProps<T extends MainRoutes> = StackNavigationProp<MainStackParamList, T>
