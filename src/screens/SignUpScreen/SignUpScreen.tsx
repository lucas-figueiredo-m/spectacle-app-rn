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
import isEmail from 'validator/lib/isEmail'
import equals from 'validator/lib/equals'
import auth from '@react-native-firebase/auth'
import useToastMessage from 'hooks/useToastMessage'
import { TabRoutes } from 'navigation/models/TabModels'

const SignUpScreen: React.FC = () => {
  const styles = useThemedStyles(themedStyles)
  const { navigate, goBack } = useNavigation<MainStackNavigationProps<MainRoutes.SignUpScreen>>()
  const [email, setEmail] = useState<InputState>({ value: '', error: '' })
  const [password, setPassword] = useState<InputState>({ value: '', error: '' })
  const [confirmPassword, setConfirmPassword] = useState<InputState>({ value: '', error: '' })

  const { ShowError, ShowSuccess } = useToastMessage()

  const onRegister = async () => {
    if (!isEmail(email.value)) return setEmail({ ...email, error: 'screens.signUp.invalidEmail' })
    if (!equals(password.value, confirmPassword.value)) {
      return setConfirmPassword({ ...confirmPassword, error: 'screens.signUp.passwordUnmatch' })
    }

    try {
      await auth().createUserWithEmailAndPassword(email.value, password.value)
      goBack()
      navigate(MainRoutes.TabNavigator, { screen: TabRoutes.MoviesListScreen })
      ShowSuccess('success.firebase.register.title', 'success.firebase.register.message')
    } catch (error) {
      const err: any = error
      if (err.code === 'auth/email-already-in-use') {
        ShowError('error.firebase.register.title', 'error.firebase.register.message') // TODO: fix issue
      }
    }
  }

  return (
    <Screen style={styles.root}>
      <Header />
      <Image source={logo} style={styles.image} />
      <View style={styles.inputContainer}>
        <Input
          state={email}
          placeholder={'common.email'}
          autoCapitalize='none'
          customInputStyle={styles.input}
          onChangeText={text => setEmail({ value: text, error: '' })}
        />
        <Input
          state={password}
          placeholder={'common.password'}
          customInputStyle={styles.input}
          onChangeText={text => setPassword({ value: text, error: '' })}
          secureTextEntry
        />
        <Input
          state={confirmPassword}
          placeholder={'common.confirmPassword'}
          customInputStyle={styles.input}
          onChangeText={text => setConfirmPassword({ value: text, error: '' })}
          secureTextEntry
        />
        <Button style={styles.button} onPress={onRegister} label='screens.signUp.register' />
      </View>
    </Screen>
  )
}

const themedStyles = createThemedStyles(({ metrics, colors }) => ({
  root: {},
  inputContainer: {
    paddingHorizontal: metrics.sm
  },
  input: {
    color: colors.Common.White
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
