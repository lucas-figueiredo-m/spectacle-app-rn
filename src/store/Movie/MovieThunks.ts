import { createAsyncThunk } from '@reduxjs/toolkit'
import tmdb, { TMDBError } from 'services/tmdb'
import { RootState } from 'store'
import { MovieList } from './MovieModels'
import { MovieActions } from './MovieReducer'

export const SearchMovies = createAsyncThunk<void, void, { rejectValue: string; state: RootState }>(
  '[MOVIE] get list of movies based on a search string',
  async (_, { dispatch, rejectWithValue, getState }) => {
    try {
      const { page, query } = getState().movies.search
      const { data } = await tmdb.get<MovieList>('/search/movie', { params: { query, page } })

      dispatch(MovieActions.setSearchResults({ results: data.results }))
    } catch (error) {
      const err: TMDBError = error as TMDBError

      throw rejectWithValue(err.status_message)
    }
  }
)

export const GetPopularMovies = createAsyncThunk<void, void, { rejectValue: string; state: RootState }>(
  '[MOVIE] get popular movies',
  async (_, { dispatch, rejectWithValue, getState }) => {
    try {
      const { page } = getState().movies.popular
      const { data } = await tmdb.get<MovieList>('/movie/popular', { params: { page } })

      dispatch(MovieActions.setPopularMovies({ results: data.results }))
    } catch (error) {
      const err: TMDBError = error as TMDBError

      throw rejectWithValue(err.status_message)
    }
  }
)

export const GetTopRatedMovies = createAsyncThunk<void, void, { rejectValue: string; state: RootState }>(
  '[MOVIE] get top rated movies ',
  async (_, { dispatch, rejectWithValue, getState }) => {
    try {
      const { page } = getState().movies.topRated
      const { data } = await tmdb.get<MovieList>('/movie/top_rated', { params: { page } })

      dispatch(MovieActions.setTopRatedMovies({ results: data.results }))
    } catch (error) {
      const err: TMDBError = error as TMDBError

      throw rejectWithValue(err.status_message)
    }
  }
)

export const MovieThunks = {
  GetPopularMovies,
  GetTopRatedMovies,
  SearchMovies
}
