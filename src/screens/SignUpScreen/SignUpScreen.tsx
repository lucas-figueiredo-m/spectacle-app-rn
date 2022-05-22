import { Input, InputState } from 'components/Input'
import Screen from 'components/Screen'
import React, { useState } from 'react'
import { Image, View } from 'react-native'
import logo from 'assets/img/logo.png'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import Button from 'components/Button'
import { useNavigation } from '@react-navigation/native'
import { MainRoutes, MainStackNavigationProps } from 'navigation/models/MainStackModels'
import Header from './components/Header'

const SignUpScreen: React.FC = () => {
  const styles = useThemedStyles(themedStyles)
  const { navigate } = useNavigation<MainStackNavigationProps<MainRoutes.SignUpScreen>>()
  const [email, setEmail] = useState<InputState>({ value: '', error: '' })
  const [password, setPassword] = useState<InputState>({ value: '', error: '' })
  const [confirmPassword, setConfirmPassword] = useState<InputState>({ value: '', error: '' })
  return (
    <Screen style={styles.root}>
      <Header />
      <Image source={logo} style={styles.image} />
      <View style={styles.inputContainer}>
        <Input state={email} placeholder={'common.email'} onChangeText={text => setEmail({ value: text, error: '' })} />
        <Input
          state={password}
          placeholder={'common.password'}
          onChangeText={text => setPassword({ value: text, error: '' })}
        />
        <Input
          state={confirmPassword}
          placeholder={'common.confirmPassword'}
          onChangeText={text => setConfirmPassword({ value: text, error: '' })}
        />
        <Button style={styles.button} onPress={() => null} label='screens.signUp.register' />
      </View>
    </Screen>
  )
}

const themedStyles = createThemedStyles(({ metrics }) => ({
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
  }
}))

export default SignUpScreen
