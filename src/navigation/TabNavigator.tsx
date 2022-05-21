import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabParamsList, TabRoutes } from 'navigation/models/TabModels'
import MoviesListScreen from 'screens/MoviesListScreen/MoviesListScreen'
import TracksListScreen from 'screens/TracksListScreen/TracksListScreen'
import SettingsScreen from 'screens/SettingsScreen/SettingsScreen'
import SVG from 'components/SVG'

import movie from 'assets/icons/film.svg'
import music from 'assets/icons/music.svg'
import settings from 'assets/icons/settings.svg'
import Label from 'components/Label'

const Tab = createBottomTabNavigator<TabParamsList>()

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => <SVG xml={movie} width={size} height={size} color={color} />,
          tabBarLabel: ({ color }) => <Label.H4 style={{ color }} t='tabNames.movies' />
        }}
        name={TabRoutes.MoviesListScreen}
        component={MoviesListScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => <SVG xml={music} width={size} height={size} color={color} />,
          tabBarLabel: ({ color }) => <Label.H4 style={{ color }} t='tabNames.musics' />
        }}
        name={TabRoutes.TracksListScreen}
        component={TracksListScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => <SVG xml={settings} width={size} height={size} color={color} />,
          tabBarLabel: ({ color }) => <Label.H4 style={{ color }} t='tabNames.settings' />
        }}
        name={TabRoutes.SettingsScreen}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
