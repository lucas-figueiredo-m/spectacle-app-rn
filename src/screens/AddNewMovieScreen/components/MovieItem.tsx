import React from 'react'
import { TMDBMovieItem } from 'store/Movie'
import { TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import useColorScheme from 'hooks/useColorScheme'
import Config from 'react-native-config'
import plus from 'assets/icons/plus-circle.svg'
import SVG from 'components/SVG'
import Label from 'components/Label'
import { Category } from 'models/firebaseModels'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import useToastMessage from 'hooks/useToastMessage'

interface Props {
  movie: TMDBMovieItem
  category: Category
}

const MovieItem: React.FC<Props> = ({ movie, category }) => {
  const styles = useThemedStyles(themedStyles)
  const colors = useColorScheme()

  const { ShowSuccess, ShowError } = useToastMessage()

  const onPress = async () => {
    const uid = auth().currentUser?.uid
    if (uid) {
      try {
        await firestore()
          .collection('users')
          .doc(uid)
          .collection('categories')
          .doc(category.id)
          .collection('movies')
          .add({
            title: movie.title,
            movieId: movie.id,
            image: `${Config.TMDB_IMAGE_URI}${movie.poster_path}`
          })

        ShowSuccess('screens.addNewMovie.veryGood', {
          key: 'screens.addNewMovie.addSuccess',
          options: { movie: movie.title, category: category.name }
        })
      } catch (error) {
        ShowError('error.common.error', 'error.common.notPossible')
      }
    }
  }

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <FastImage style={styles.image} source={{ uri: `${Config.TMDB_IMAGE_URI}${movie.poster_path}` }} />
        <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.button}>
          <SVG xml={plus} width={40} height={40} color={colors.Common.White} />
          <Label.H3 t='screens.moviesList.components.addMovieItem' style={styles.add} />
        </TouchableOpacity>
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
