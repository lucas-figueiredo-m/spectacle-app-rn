import useColorScheme from 'hooks/useColorScheme'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import React, { useRef } from 'react'
import { TouchableOpacity, TextInput, TextInputProps } from 'react-native'
import search from 'assets/icons/search.svg'
import backspace from 'assets/icons/delete.svg'
import SVG from 'components/SVG'

interface Props extends TextInputProps {
  onClearText?: () => void
}

const SearchInput: React.FC<Props> = props => {
  const styles = useThemedStyles(themedStyles)
  const colors = useColorScheme()

  const InputRef = useRef<TextInput>(null)

  return (
    <TouchableOpacity activeOpacity={1} onPress={() => InputRef.current?.focus()} style={styles.root}>
      <SVG xml={search} color={colors.Common.MediumGrey} width={24} height={24} />
      <TextInput
        {...props}
        ref={InputRef}
        placeholder='Digite aqui'
        placeholderTextColor={colors.Common.MediumGrey}
        style={styles.input}
      />
      {props.value !== '' && (
        <TouchableOpacity onPress={props.onClearText}>
          <SVG xml={backspace} color={colors.Common.MediumGrey} width={24} height={24} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  )
}

const themedStyles = createThemedStyles(({ metrics, colors, fonts }) => ({
  root: {
    backgroundColor: colors.Shades.BackgroundShade,
    // width: '100%',
    borderRadius: metrics.md,
    paddingHorizontal: metrics.sm,
    paddingVertical: metrics.xs,
    marginHorizontal: metrics.md,
    flexDirection: 'row',
    alignItems: 'center'
  },

  input: {
    // backgroundColor: 'red',
    fontFamily: fonts.families.Montserrat.family,
    fontWeight: fonts.families.Montserrat.weight.regular,
    fontSize: fonts.sizes.default,
    color: colors.Common.MediumGrey,
    flex: 1,
    marginLeft: metrics.sm,
    padding: 0
  }
}))

export default SearchInput
