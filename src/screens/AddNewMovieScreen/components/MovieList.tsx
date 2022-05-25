import React from 'react'
import { View, FlatList } from 'react-native'
import Label from 'components/Label'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import MovieItem from './MovieItem'
import Spacer from './Spacer'
import { TMDBMovieItem } from 'store/Movie'
import { Category } from 'models/firebaseModels'

interface Props {
  movies: TMDBMovieItem[]
  title: string
  category: Category
}

const MovieList: React.FC<Props> = ({ movies, title, category }) => {
  const styles = useThemedStyles(themedStyles)
  // const colors = useColorScheme()

  return (
    <View style={styles.root}>
      <Label.H2 t={title} style={styles.title} />
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        horizontal
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Spacer.H />}
        renderItem={({ item }) => <MovieItem key={item.id} category={category} movie={item} />}
      />
    </View>
  )
}

const themedStyles = createThemedStyles(({ metrics, colors }) => ({
  root: {
    marginTop: metrics.xl
  },

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
