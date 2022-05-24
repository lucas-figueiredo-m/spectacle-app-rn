import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackParamList } from './MainStackModels'

export enum TabRoutes {
  MoviesListScreen = 'MOVIES_LIST_SCREEN',
  TracksListScreen = 'TRACKS_LIST_SCREEN',
  SettingsScreen = 'SETTINGS_SCREEN'
}

export type TabParamsList = {
  [TabRoutes.MoviesListScreen]: undefined
  [TabRoutes.TracksListScreen]: undefined
  [TabRoutes.SettingsScreen]: undefined
}

export type MoviesListScreenProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamsList>,
  StackNavigationProp<MainStackParamList>
>
