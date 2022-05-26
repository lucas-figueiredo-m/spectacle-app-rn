import Label from 'components/Label'
import Screen from 'components/Screen'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import { Track } from 'models/firebaseModels'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

import TrackList from './components/TrackList'

const TracksListScreen: React.FC = () => {
  const styles = useThemedStyles(themedStyles)

  const [tracks, setTracks] = useState<Track[]>([])

  useEffect(() => {
    const uid = auth().currentUser?.uid
    if (uid) {
      const unsubscribe = firestore()
        .collection('users')
        .doc(uid)
        .collection('music')
        .onSnapshot(querySnapshot => {
          const dataList = querySnapshot.docs.map(data => ({
            id: data.id,
            ...data.data()
          })) as Track[]

          setTracks(dataList)
        })

      return () => {
        unsubscribe()
      }
    }
  }, [])

  return (
    <Screen>
      <View style={styles.heading}>
        <Label.H1 t='screens.tracksList.title' style={styles.title} />
      </View>
      <TrackList tracks={tracks} />
    </Screen>
  )
}

const themedStyles = createThemedStyles(({ colors, metrics }) => ({
  title: {
    color: colors.Common.White
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
