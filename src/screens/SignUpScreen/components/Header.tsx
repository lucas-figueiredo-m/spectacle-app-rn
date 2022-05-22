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
      <View style={styles.emptyView} />
      <Label.H1 t='screens.signUp.title' style={styles.title} />
      <TouchableOpacity hitSlop={hitSlop.sm} onPress={goBack}>
        <SVG xml={x} width={30} height={30} color={colors.Common.White} />
      </TouchableOpacity>
    </View>
  )
}

const themedStyles = createThemedStyles(({ colors, metrics }) => ({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: metrics.xs
  },
  emptyView: {
    width: 30,
    height: 30
  },
  title: {
    color: colors.Common.White
  }
}))

export default Header
