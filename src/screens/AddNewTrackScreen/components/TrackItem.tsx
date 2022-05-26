import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Label from 'components/Label'
import SVG from 'components/SVG'
import { SpotifyMusicItem } from 'store/Music'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import useColorScheme from 'hooks/useColorScheme'
import FastImage from 'react-native-fast-image'
import plus from 'assets/icons/plus-circle.svg'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import useToastMessage from 'hooks/useToastMessage'

interface Props {
  track: SpotifyMusicItem
}

const TrackItem: React.FC<Props> = ({ track }) => {
  const styles = useThemedStyles(themedStyles)
  const colors = useColorScheme()

  const { ShowError, ShowSuccess } = useToastMessage()

  const onPress = async () => {
    const uid = auth().currentUser?.uid
    if (uid) {
      try {
        await firestore().collection('users').doc(uid).collection('music').add({
          title: track.name,
          trackId: track.id,
          image: track.album.images[0].url,
          artist: track.artists[0].name
        })

        ShowSuccess('screens.addNewTrack.veryGood', {
          key: 'screens.addNewTrack.addSuccess',
          options: { track: track.name }
        })
      } catch (error) {
        ShowError('error.common.error', 'error.common.notPossible')
      }
    }
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <View style={styles.content}>
        <FastImage source={{ uri: track.album.images[0].url }} style={styles.image} />
        <View style={styles.texts}>
          <Label.H3 t={track.name} />
          <Label.P4 t={track.artists[0].name} />
        </View>
      </View>
      <View style={styles.icon}>
        <SVG xml={plus} width={25} height={25} color={colors.Common.White} />
      </View>
    </TouchableOpacity>
  )
}

const themedStyles = createThemedStyles(({ metrics }) => ({
  root: {
    flexDirection: 'row',
    paddingHorizontal: metrics.md,
    alignItems: 'center',
    justifyContent: 'space-between'
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
