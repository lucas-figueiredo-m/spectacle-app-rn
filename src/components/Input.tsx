import useColorScheme from 'hooks/useColorScheme'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import useTranslation from 'hooks/useTranslation'
import React, { useRef } from 'react'
import { TextInput, TextInputProps, StyleProp, TextStyle, View, Pressable, ViewStyle } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
  interpolate
} from 'react-native-reanimated'
import { FontSize } from 'themes/fonts'
import { Metrics } from 'themes/metrics'
import { Translation } from 'types/common'

export interface InputState {
  value: string
  error?: string
}

type Props = TextInputProps & {
  state: InputState
  placeholder: Translation
  required?: boolean
  customContainerStyle?: StyleProp<ViewStyle>
  customInputStyle?: StyleProp<TextStyle>
}

const themedStyles = createThemedStyles(({ colors, fonts, metrics }) => ({
  animatedRoot: {
    borderRadius: 5,
    borderWidth: 1.5
  },
  root: {
    paddingVertical: metrics.xs
  },
  input: {
    paddingVertical: metrics.xs,
    paddingHorizontal: metrics.sm,
    fontFamily: fonts.families.Montserrat.family,
    fontSize: fonts.sizes.md
  },
  placeholder: {
    position: 'absolute',
    backgroundColor: colors.Primary,
    fontFamily: fonts.families.Montserrat.family,
    fontWeight: fonts.families.Montserrat.weight.semibold,
    paddingHorizontal: metrics.xs
  }
}))

enum InputStatus {
  Blur,
  Focus,
  Error
}

export const Input: React.FC<Props> = ({
  state,
  placeholder,
  customInputStyle,
  customContainerStyle,
  required,
  ...props
}) => {
  const placeholderStatus = useSharedValue<InputStatus>(InputStatus.Blur)
  const t = useTranslation()
  const styles = useThemedStyles(themedStyles)
  const colors = useColorScheme()

  const InputRef = useRef<TextInput>(null)

  const containerStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [colors.Common.MediumGrey, colors.Common.White, colors.Negative]
    )

    return { borderColor }
  })

  const placeholderStyle = useAnimatedStyle(() => {
    const fontColor = interpolateColor(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [colors.Common.MediumGrey, colors.Common.White, colors.Negative]
    )

    const bottom = interpolate(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [Metrics.xs, 2 * Metrics.xs + FontSize.lg - FontSize.md / 2, 2 * Metrics.xs + FontSize.lg - FontSize.md / 2]
    )

    const left = interpolate(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [Metrics.sm, 2 * Metrics.xxs, 2 * Metrics.xxs]
    )

    const fontSize = interpolate(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [FontSize.md, FontSize.sm, FontSize.sm]
    )

    return {
      color: fontColor,
      bottom,
      left,
      fontSize
    }
  })

  return (
    <View style={[styles.root, customContainerStyle]}>
      <Animated.View style={[styles.animatedRoot, containerStyle]}>
        <TextInput
          style={[styles.input, customInputStyle]}
          ref={InputRef}
          onFocus={() => (placeholderStatus.value = withTiming(InputStatus.Focus, { duration: 200 }))}
          onBlur={() => (placeholderStatus.value = withTiming(InputStatus.Blur, { duration: 200 }))}
          value={state.value}
          {...props}
        />
        <Pressable onPress={() => InputRef.current?.focus()}>
          <Animated.Text style={[placeholderStyle, styles.placeholder]}>
            {required ? t(placeholder) + '*' : t(placeholder)}
          </Animated.Text>
        </Pressable>
      </Animated.View>
    </View>
  )
}
