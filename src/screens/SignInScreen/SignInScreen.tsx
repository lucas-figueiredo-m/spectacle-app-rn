import { Input, InputState } from 'components/Input'
import Screen from 'components/Screen'
import React, { useState } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import logo from 'assets/img/logo.png'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import Button from 'components/Button'
import Label from 'components/Label'
import { hitSlop } from 'constants/constants'
import { useNavigation } from '@react-navigation/native'
import { MainRoutes, MainStackNavigationProps } from 'navigation/models/MainStackModels'

const SignInScreen: React.FC = () => {
  const styles = useThemedStyles(themedStyles)
  const { navigate } = useNavigation<MainStackNavigationProps<MainRoutes.SignInScreen>>()
  const [email, setEmail] = useState<InputState>({ value: '', error: '' })
  const [password, setPassword] = useState<InputState>({ value: '', error: '' })
  return (
    <Screen style={styles.root}>
      <Image source={logo} style={styles.image} />
      <View style={styles.inputContainer}>
        <Input state={email} placeholder={'common.email'} onChangeText={text => setEmail({ value: text, error: '' })} />
        <Input
          state={password}
          placeholder={'common.password'}
          onChangeText={text => setPassword({ value: text, error: '' })}
        />
        <Button style={styles.button} onPress={() => null} label='screens.signIn.enter' />

        <TouchableOpacity
          hitSlop={hitSlop.md}
          onPress={() => navigate(MainRoutes.SignUpScreen)}
          style={styles.register}
        >
          <Label.H4>
            <Label.H4 t='screens.signIn.newUser' />
            <Label.H4 t='screens.signIn.register' style={styles.registerText} />
          </Label.H4>
        </TouchableOpacity>
      </View>
    </Screen>
  )
}

const themedStyles = createThemedStyles(({ metrics, colors }) => ({
  root: {},
  inputContainer: {
    paddingHorizontal: metrics.sm
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  button: {
    alignSelf: 'center',
    marginTop: metrics.md
  },
  register: {
    alignSelf: 'center',
    marginTop: metrics.sm
  },
  registerText: {
    color: colors.Common.White
  }
}))

export default SignInScreen
