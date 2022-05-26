import { createAsyncThunk } from '@reduxjs/toolkit'
import { SPOTIFY_PAGE_LIMIT } from 'constants/constants'
import { AuthorizeResult, authorize } from 'react-native-app-auth'
import spotify, { config } from 'services/spotify'
import { RootState } from 'store'
import { SpotifyMusic } from './MusicModels'
import { MusicActions } from './MusicReducer'

export const GetSpotifyToken = createAsyncThunk<void, void, { rejectValue: string }>(
  '[MUSIC] gets spotify accessToken',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response: AuthorizeResult = await authorize(config)

      dispatch(MusicActions.setSpotifyTokens({ spotifyAuth: response }))

      spotify.defaults.headers.common.Authorization = `Bearer ${response.accessToken}`
    } catch (error) {
      throw rejectWithValue('Erro')
    }
  }
)

export const SearchOnSpotify = createAsyncThunk<void, void, { rejectValue: string; state: RootState }>(
  '[MUSIC] searches for musics on spotify given a music name',
  async (_, { dispatch, rejectWithValue, getState }) => {
    const { query, offset } = getState().musics
    try {
      const { data } = await spotify.get<SpotifyMusic>('/search', {
        params: { q: query, type: 'track', offset, limit: SPOTIFY_PAGE_LIMIT }
      })

      dispatch(MusicActions.setMusicList({ data }))
    } catch (error) {
      rejectWithValue('Erro')
    }
  }
)

export const MusicThunks = {
  GetSpotifyToken
}
