import React from 'react'
import { TouchableOpacity } from 'react-native'
import SVG from 'components/SVG'
import chevronDown from 'assets/icons/chevron-down.svg'
import useColorScheme from 'hooks/useColorScheme'
import { useNavigation } from '@react-navigation/native'
import { hitSlop } from 'constants/constants'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'

const Header: React.FC = () => {
  const colors = useColorScheme()
  const styles = useThemedStyles(themedStyles)
  const { goBack } = useNavigation()
  return (
    <TouchableOpacity style={styles.root} onPress={goBack} hitSlop={hitSlop.md}>
      <SVG xml={chevronDown} color={colors.Common.White} width={30} height={30} />
    </TouchableOpacity>
  )
}

const themedStyles = createThemedStyles(({ metrics }) => ({
  root: {
    padding: metrics.sm
  }
}))

export default Header
