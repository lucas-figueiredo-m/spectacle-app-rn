import React from 'react'
import Label from 'components/Label'
import SVG from 'components/SVG'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import { TouchableOpacity, View } from 'react-native'
import { hitSlop } from 'constants/constants'
import { useNavigation } from '@react-navigation/native'
import useColorScheme from 'hooks/useColorScheme'
import x from 'assets/icons/x.svg'

const Header: React.FC = () => {
  const styles = useThemedStyles(themedStyles)
  const { goBack } = useNavigation()
  const colors = useColorScheme()

  return (
    <View style={styles.root}>
      <Label.H1 t='screens.addNewMovieCategory.title' style={styles.title} />
      <TouchableOpacity hitSlop={hitSlop.sm} onPress={goBack}>
        <SVG xml={x} width={30} height={30} color={colors.Common.Black} />
      </TouchableOpacity>
    </View>
  )
}

const themedStyles = createThemedStyles(({ colors, metrics }) => ({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopStartRadius: metrics.sm,
    borderTopEndRadius: metrics.sm
  },
  emptyView: {
    width: 30,
    height: 30
  },
  title: {
    color: colors.Common.Black
  }
}))

export default Header
