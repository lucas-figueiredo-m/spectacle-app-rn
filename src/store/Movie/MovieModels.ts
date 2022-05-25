export type TMDBMovieItem = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: number
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type MovieList = {
  page: number
  results: TMDBMovieItem[]
  total_pages: number
  total_results: number
}

export type MovieState = {
  search: {
    loading: boolean
    error: string | undefined
    query: string
    page: number
    list: TMDBMovieItem[]
  }
  popular: {
    loading: boolean
    error: string | undefined
    page: number
    list: TMDBMovieItem[]
  }
  topRated: {
    loading: boolean
    error: string | undefined
    page: number
    list: TMDBMovieItem[]
  }
}
