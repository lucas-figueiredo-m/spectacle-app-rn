import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Label from 'components/Label'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import FastImage from 'react-native-fast-image'
import useToastMessage from 'hooks/useToastMessage'
import { Track } from 'models/firebaseModels'

interface Props {
  track: Track
}

const TrackItem: React.FC<Props> = ({ track }) => {
  const styles = useThemedStyles(themedStyles)

  const { ShowError, ShowSuccess } = useToastMessage()

  const onPress = async () => {}

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <FastImage source={{ uri: track.image }} style={styles.image} />
        <View style={styles.texts}>
          <Label.H3 t={track.title} />
          <Label.P4 t={track.artist} />
        </View>
      </View>
    </View>
  )
}

const themedStyles = createThemedStyles(({ metrics, colors }) => ({
  root: {
    flexDirection: 'row',
    paddingHorizontal: metrics.md,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.Common.White,
    maxHeight: 80
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 90
  },
  icon: {
    flex: 10
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  texts: {
    marginLeft: metrics.xs,
    flex: 1
  }
}))

export default TrackItem
