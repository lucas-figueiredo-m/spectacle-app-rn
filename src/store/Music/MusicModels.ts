import { AuthorizeResult } from 'react-native-app-auth'

export type MusicState = {
  spotifyAuth: AuthorizeResult | null
  loading: boolean
  paging: boolean
  refreshing: boolean
  error: undefined | string
  query: string
  offset: number
  hasNext: boolean
  list: SpotifyMusicItem[]
}

export type SpotifySearchResponse = {
  tracks: SpotifyMusic
}

export type SpotifyMusic = {
  href: string
  items: SpotifyMusicItem[]
  limit: number
  next: null | string
  offset: number
  previous: null | string
  total: number
}

export type SpotifyMusicItem = {
  album: SpotifyAlbum
  artists: SpotifyArtist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: {
    isrc: string
  }
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}

export type SpotifyAlbum = {
  album_type: string
  artists: SpotifyArtist[]
  available_markets: string[]
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: SpotifyAlbumImage[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export type SpotifyArtist = {
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export type SpotifyAlbumImage = {
  height: 640
  url: string
  width: 640
}
