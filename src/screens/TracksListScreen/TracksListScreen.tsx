import Label from 'components/Label'
import Screen from 'components/Screen'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import React from 'react'
import { View } from 'react-native'

import AddTrackButton from './components/AddTrackButton'

const TracksListScreen: React.FC = () => {
  const styles = useThemedStyles(themedStyles)

  return (
    <Screen>
      <View style={styles.heading}>
        <Label.H1 t='screens.tracksList.title' style={styles.title} />
      </View>
      <View style={styles.buttonContainer}>
        <AddTrackButton />
      </View>
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
