import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import useTranslation from 'hooks/useTranslation'
import React from 'react'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'
import { Translation } from 'types/common'

interface Props extends TextProps {
  t?: Translation
  style?: StyleProp<TextStyle>
}

const Label: React.FC<Props> = ({ t, style, children }) => {
  const styles = useThemedStyles(themedStyles)
  const translate = useTranslation()

  if (t) return <Text style={[style, styles.label]}>{translate(t)}</Text>

  return <Text style={[style, styles.label]}>{children}</Text>
}

const H1: React.FC<Props> = props => {
  const styles = useThemedStyles(themedStyles)
  return <Label {...props} style={[props.style, styles.h1]} />
}

const H2: React.FC<Props> = props => {
  const styles = useThemedStyles(themedStyles)
  return <Label {...props} style={[props.style, styles.h2]} />
}

const H3: React.FC<Props> = props => {
  const styles = useThemedStyles(themedStyles)
  return <Label {...props} style={[props.style, styles.h3]} />
}

const H4: React.FC<Props> = props => {
  const styles = useThemedStyles(themedStyles)
  return <Label {...props} style={[props.style, styles.h4]} />
}

const P2: React.FC<Props> = props => {
  const styles = useThemedStyles(themedStyles)
  return <Label {...props} style={[props.style, styles.p2]} />
}

const P3: React.FC<Props> = props => {
  const styles = useThemedStyles(themedStyles)
  return <Label {...props} style={[props.style, styles.p3]} />
}

const P4: React.FC<Props> = props => {
  const styles = useThemedStyles(themedStyles)
  return <Label {...props} style={[props.style, styles.p4]} />
}

const themedStyles = createThemedStyles(({ fonts }) => ({
  label: { fontFamily: fonts.families.Montserrat.family },
  h1: {
    fontSize: fonts.sizes.xxl,
    fontWeight: fonts.families.Montserrat.weight.semibold
  },
  h2: {
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.families.Montserrat.weight.semibold
  },
  h3: {
    fontSize: fonts.sizes.default,
    fontWeight: fonts.families.Montserrat.weight.semibold
  },
  h4: {
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.families.Montserrat.weight.semibold
  },
  p2: {
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.families.Montserrat.weight.regular
  },
  p3: {
    fontSize: fonts.sizes.default,
    fontWeight: fonts.families.Montserrat.weight.regular
  },
  p4: {
    fontSize: fonts.sizes.md,
    fontWeight: fonts.families.Montserrat.weight.regular
  }
}))

export default {
  H1,
  H2,
  H3,
  H4,
  P2,
  P3,
  P4
}
