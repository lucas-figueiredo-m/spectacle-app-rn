import { useRoute } from '@react-navigation/native'
import Screen from 'components/Screen'
import SearchInput from 'components/SearchInput'
import useAppDispatch from 'hooks/useAppDispatch'
import { MainRoutes, MainStackScreenProps } from 'navigation/models/MainStackModels'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MovieActions, movies, MovieThunks } from 'store/Movie'
import Header from './components/Header'
import MovieList from './components/MovieList'

const AddNewMovieScreen: React.FC = () => {
  const { params } = useRoute<MainStackScreenProps<MainRoutes.AddNewMovieScreen>>()
  const [query, setQuery] = useState<string>('')
  const dispatch = useAppDispatch()

  const { popular, topRated } = useSelector(movies)

  useEffect(() => {
    dispatch(MovieThunks.GetPopularMovies())
    dispatch(MovieThunks.GetTopRatedMovies())

    return () => {
      dispatch(MovieActions.clearData())
    }
  }, [dispatch])

  return (
    <Screen>
      <Header />
      <SearchInput value={query} onChangeText={setQuery} onClearText={() => setQuery('')} />
      <MovieList category={params.category} movies={popular.list} title='Populares' />
      <MovieList category={params.category} movies={topRated.list} title='Mais votados' />
    </Screen>
  )
}

export default AddNewMovieScreen
