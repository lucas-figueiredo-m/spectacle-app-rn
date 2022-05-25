import React from 'react'
import Label from 'components/Label'
import { Movie } from 'models/firebaseModels'
import { useThemedStyles, createThemedStyles } from 'hooks/useThemedStyles'
import { View } from 'react-native'
import FastImage from 'react-native-fast-image'

interface Props {
  movie: Movie
}

const MovieItem: React.FC<Props> = ({ movie }) => {
  const styles = useThemedStyles(themedStyles)

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <FastImage style={styles.image} source={{ uri: movie.image }} />
      </View>
      <Label.H3 numberOfLines={2} t={movie.title} style={styles.add} />
    </View>
  )
}

const themedStyles = createThemedStyles(({ colors, metrics }) => ({
  root: {
    width: (180 * 3) / 4
  },
  container: {
    height: 180,
    width: (180 * 3) / 4
  },
  image: {
    height: 180,
    width: (180 * 3) / 4,
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: colors.Shades.ForegroundShade,
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    color: colors.Common.White,
    marginTop: metrics.sm,
    textAlign: 'center'
  }
}))

export default MovieItem
