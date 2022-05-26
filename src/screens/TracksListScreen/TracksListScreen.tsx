import Label from 'components/Label'
import Screen from 'components/Screen'
import useAppDispatch from 'hooks/useAppDispatch'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MusicThunks } from 'store/Music'
import AddTrackButton from './components/AddTrackButton'

const TracksListScreen: React.FC = () => {
  const dispatch = useAppDispatch()
  const styles = useThemedStyles(themedStyles)

  const onPress = () => {
    dispatch(MusicThunks.GetSpotifyToken())
  }
  return (
    <Screen>
      <View style={styles.heading}>
        <Label.H1 t='screens.tracksList.title' style={styles.title} />
      </View>
      <View style={styles.buttonContainer}>
        <AddTrackButton />
      </View>

      <TouchableOpacity onPress={onPress} style={styles.button} />
      <Text>Hello world</Text>
    </Screen>
  )
}

const themedStyles = createThemedStyles(({ colors, metrics }) => ({
  title: {
    color: colors.Common.White
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  heading: {
    padding: metrics.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: { width: 50, height: 50, backgroundColor: 'white' }
}))

export default TracksListScreen
