import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import { Track } from 'models/firebaseModels'
import React from 'react'
import { View } from 'react-native'
import FastImage from 'react-native-fast-image'

interface Props {
  tracks: Track[]
}

const HeadingImage: React.FC<Props> = ({ tracks }) => {
  const styles = useThemedStyles(themedStyles)

  if (tracks.length === 0) {
    return <></>
  }

  if (tracks.length < 4) {
    return (
      <View style={styles.imageContainer}>
        <FastImage source={{ uri: tracks[0].image }} style={styles.bigImage} />
      </View>
    )
  }

  return (
    <View style={styles.imageContainer}>
      <FastImage source={{ uri: tracks[0].image }} style={styles.smallImage} />
      <FastImage source={{ uri: tracks[1].image }} style={styles.smallImage} />
      <FastImage source={{ uri: tracks[2].image }} style={styles.smallImage} />
      <FastImage source={{ uri: tracks[3].image }} style={styles.smallImage} />
    </View>
  )
}

const themedStyles = createThemedStyles(() => ({
  bigImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  smallImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  imageContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'red',
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
}))

export default HeadingImage
