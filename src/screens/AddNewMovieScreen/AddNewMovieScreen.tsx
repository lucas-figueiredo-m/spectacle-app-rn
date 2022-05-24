import { useRoute } from '@react-navigation/native'
import Screen from 'components/Screen'
import { MainRoutes, MainStackScreenProps } from 'navigation/models/MainStackModels'
import React from 'react'
import { Text } from 'react-native'

const AddNewMovieScreen: React.FC = () => {
  const { params } = useRoute<MainStackScreenProps<MainRoutes.AddNewMovieScreen>>()
  return (
    <Screen>
      <Text>Hello world</Text>
    </Screen>
  )
}

export default AddNewMovieScreen
