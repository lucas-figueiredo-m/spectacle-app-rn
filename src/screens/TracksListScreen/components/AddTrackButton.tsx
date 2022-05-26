import React from 'react'
import { TouchableOpacity } from 'react-native'
import Label from 'components/Label'
import SVG from 'components/SVG'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import useColorScheme from 'hooks/useColorScheme'

import plus from 'assets/icons/plus.svg'
import { useSelector } from 'react-redux'
import { music, MusicThunks } from 'store/Music'
import useAppDispatch from 'hooks/useAppDispatch'
import useRootNavigator from 'hooks/useRootNavigator'
import { MainRoutes } from 'navigation/models/MainStackModels'
import useToastMessage from 'hooks/useToastMessage'

const AddTrackButton: React.FC = () => {
  const styles = useThemedStyles(themedStyles)
  const colors = useColorScheme()
  const { navigate } = useRootNavigator()

  const { spotifyAuth } = useSelector(music)
  const dispatch = useAppDispatch()
  const { ShowError } = useToastMessage()

  const onPress = async () => {
    if (!spotifyAuth?.accessToken) {
      try {
        await dispatch(MusicThunks.GetSpotifyToken()).unwrap()
        navigate(MainRoutes.AddNewTrackScreen)
      } catch (error) {
        ShowError('Erro', 'Não foi possível fazer login no spotify')
      }
    } else {
      navigate(MainRoutes.AddNewTrackScreen)
    }
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <SVG xml={plus} width={30} height={30} color={colors.Common.Black} />
      <Label.H4 t='screens.tracksList.components.addTrackButton.label' style={styles.label} />
    </TouchableOpacity>
  )
}

const themedStyles = createThemedStyles(({ colors, metrics }) => ({
  root: {
    flexDirection: 'row',
    paddingHorizontal: metrics.sm,
    backgroundColor: colors.Common.White,
    alignItems: 'center',
    borderRadius: metrics.lg,
    marginVertical: metrics.lg
  },
  label: {
    marginLeft: metrics.xs
  }
}))

export default AddTrackButton
