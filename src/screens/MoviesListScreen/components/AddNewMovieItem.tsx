import React from 'react'
import { TouchableOpacity } from 'react-native'
import SVG from 'components/SVG'
import Label from 'components/Label'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import useColorScheme from 'hooks/useColorScheme'
import plus from 'assets/icons/plus-circle.svg'
import { useNavigation } from '@react-navigation/native'
import { MoviesListScreenProps } from 'navigation/models/TabModels'
import { MainRoutes } from 'navigation/models/MainStackModels'
import { Category } from 'models/firebaseModels'

interface Props {
  category: Category
}

const AddNewMovieItem: React.FC<Props> = ({ category }) => {
  const styles = useThemedStyles(themedStyles)
  const colors = useColorScheme()

  const { navigate } = useNavigation<MoviesListScreenProps>()

  const onPress = () => {
    navigate(MainRoutes.AddNewMovieScreen, { category })
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <SVG xml={plus} width={40} height={40} color={colors.Common.White} />
      <Label.H3 t='screens.moviesList.components.addMovieItem' style={styles.add} />
    </TouchableOpacity>
  )
}

const themedStyles = createThemedStyles(({ colors, metrics }) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.Shades.BackgroundShade,
    height: 180,
    width: (180 * 3) / 4
  },
  add: {
    color: colors.Common.White,
    marginTop: metrics.sm
  }
}))

export default AddNewMovieItem
