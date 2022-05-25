import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { TMDBMovieItem, MovieState } from './MovieModels'
import { GetPopularMovies, GetTopRatedMovies, SearchMovies } from './MovieThunks'

const initialState: MovieState = {
  search: {
    loading: false,
    error: undefined,
    query: '',
    page: 1,
    list: []
  },
  topRated: {
    loading: false,
    error: undefined,
    page: 1,
    list: []
  },
  popular: {
    loading: false,
    error: undefined,
    page: 1,
    list: []
  }
}

const MovieSlice = createSlice({
  name: '[MOVIE]',
  initialState,
  reducers: {
    setSearchResults(state, { payload }: PayloadAction<{ results: TMDBMovieItem[] }>) {
      state.search.loading = false
      state.search.list = payload.results
      state.search.page += 1
    },
    setPopularMovies(state, { payload }: PayloadAction<{ results: TMDBMovieItem[] }>) {
      state.popular.loading = false
      state.popular.list = payload.results
      state.popular.page += 1
    },
    setTopRatedMovies(state, { payload }: PayloadAction<{ results: TMDBMovieItem[] }>) {
      state.topRated.loading = false
      state.topRated.list = payload.results
      state.topRated.page += 1
    },
    clearData(state) {
      state.popular.page = 1
      state.topRated.page = 1
      state.search.page = 1
      state.search.query = ''
    }
  },
  extraReducers: builder => {
    builder.addCase(SearchMovies.pending, state => {
      state.search.loading = true
    })
    builder.addCase(SearchMovies.rejected, (state, { payload }) => {
      state.search.loading = false
      state.search.error = payload
    })
    builder.addCase(GetPopularMovies.pending, state => {
      state.popular.loading = true
    })
    builder.addCase(GetPopularMovies.rejected, (state, { payload }) => {
      state.popular.loading = false
      state.popular.error = payload
    })
    builder.addCase(GetTopRatedMovies.pending, state => {
      state.topRated.loading = true
    })
    builder.addCase(GetTopRatedMovies.rejected, (state, { payload }) => {
      state.topRated.loading = false
      state.topRated.error = payload
    })
  }
})

export const movies = (state: RootState) => state.movies

export const MovieActions = { ...MovieSlice.actions }

export default MovieSlice.reducer
