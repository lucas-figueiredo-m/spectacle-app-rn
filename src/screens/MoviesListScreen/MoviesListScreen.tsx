import Screen from 'components/Screen'
import React from 'react'
import { Text } from 'react-native'
// import crashlytics from '@react-native-firebase/crashlytics'

const MoviesListScreen: React.FC = () => {
  // useEffect(() => {
  //   crashlytics().crash()
  // }, [])
  return (
    <Screen>
      <Text>Hello world</Text>
    </Screen>
  )
}

export default MoviesListScreen
