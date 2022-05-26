import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SPOTIFY_PAGE_LIMIT } from 'constants/constants'
import { AuthorizeResult } from 'react-native-app-auth'
import { RootState } from 'store'
import { MusicState, SpotifyMusic } from './MusicModels'
import { SearchOnSpotify } from './MusicThunks'

const initialState: MusicState = {
  spotifyAuth: null,
  loading: false,
  paging: false,
  refreshing: false,
  error: undefined,
  query: '',
  offset: 0,
  hasNext: true,
  list: []
}

const MusicSlice = createSlice({
  name: '[MUSIC]',
  initialState,
  reducers: {
    setSpotifyTokens(state, { payload }: PayloadAction<{ spotifyAuth: AuthorizeResult }>) {
      state.spotifyAuth = payload.spotifyAuth
    },
    setMusicList(state, { payload }: PayloadAction<{ data: SpotifyMusic }>) {
      const { data } = payload
      state.offset = data.previous === null ? SPOTIFY_PAGE_LIMIT : state.offset + SPOTIFY_PAGE_LIMIT
      state.hasNext = data.next !== null
      state.loading = false
      state.paging = false
      state.refreshing = false
      state.error = undefined
      state.list = data.previous === null ? data.items : [...state.list, ...data.items]
    },
    setRefreshing(state) {
      state.refreshing = true
    },
    changeQuery(state, { payload }: PayloadAction<{ query: string }>) {
      state.query = payload.query
      if (payload.query === '') {
        state.list = []
        state.offset = 0
      }
    },
    clearData(state) {
      state.loading = false
      state.paging = false
      state.refreshing = false
      state.error = undefined
      state.query = ''
      state.offset = 0
      state.hasNext = true
      state.list = []
    }
  },
  extraReducers: builder => {
    builder.addCase(SearchOnSpotify.pending, state => {
      state.loading = state.offset === 0 && state.list.length === 0 ? true : false
      state.paging = state.offset !== 0 && state.list.length > 0 ? true : false
    })
    builder.addCase(SearchOnSpotify.rejected, (state, { payload }) => {
      state.error = payload
      state.loading = false
      state.paging = false
      state.refreshing = false
    })
  }
})

export const MusicActions = { ...MusicSlice.actions }

export const music = (state: RootState) => state.musics

export default MusicSlice.reducer
