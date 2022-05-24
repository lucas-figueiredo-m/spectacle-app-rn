import React, { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import Label from 'components/Label'
import { Category, Movie } from 'models/firebaseModels'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
// import useColorScheme from 'hooks/useColorScheme'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import MovieItem from './MovieItem'
import AddNewMovieItem from './AddNewMovieItem'
import Spacer from './Spacer'

interface Props {
  category: Category
}

const MovieList: React.FC<Props> = ({ category }) => {
  const styles = useThemedStyles(themedStyles)
  // const colors = useColorScheme()

  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const uid = auth().currentUser?.uid
    if (uid) {
      const unsubscribe = firestore()
        .collection('users')
        .doc(uid)
        .collection('categories')
        .doc(category.id)
        .collection('movies')
        .onSnapshot(
          querySnapshot => {
            const dataList = querySnapshot.docs.map(data => ({
              id: data.id,
              ...data.data()
            })) as Movie[]

            console.log('DATA: ', dataList)

            setMovies(dataList)
          },
          errorSnapshot => {
            console.log('ERROR: ', errorSnapshot)
          }
        )

      return () => {
        unsubscribe()
      }
    }
  }, [category.id])

  return (
    <View style={styles.root}>
      <Label.H2 t={category.name} style={styles.title} />
      <ScrollView horizontal contentContainerStyle={styles.listContainer} showsHorizontalScrollIndicator={false}>
        <AddNewMovieItem categoryId={category.id} />
        {movies.map(movie => (
          <>
            <Spacer.H />
            <MovieItem key={movie.id} movie={movie} />
          </>
        ))}
      </ScrollView>
    </View>
  )
}

const themedStyles = createThemedStyles(({ metrics, colors }) => ({
  root: {},

  title: {
    paddingHorizontal: metrics.sm,
    marginBottom: metrics.xs,
    color: colors.Common.White
  },

  listContainer: {
    paddingHorizontal: metrics.sm
  }
}))

export default MovieList
