import React from 'react'
import Label from 'components/Label'
import { Movie } from 'models/firebaseModels'

interface Props {
  movie: Movie
}

const MovieItem: React.FC<Props> = ({ movie }) => {
  return <Label.H3 t={movie.title} />
}

export default MovieItem
