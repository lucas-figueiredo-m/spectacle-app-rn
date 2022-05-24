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
import useToastMessage from 'hooks/useToastMessage'
import isEmail from 'validator/lib/isEmail'

import auth from '@react-native-firebase/auth'
import { TabRoutes } from 'navigation/models/TabModels'
import useColorScheme from 'hooks/useColorScheme'

const SignInScreen: React.FC = () => {
  const styles = useThemedStyles(themedStyles)
  const colors = useColorScheme()
  const { navigate } = useNavigation<MainStackNavigationProps<MainRoutes.SignInScreen>>()
  const [email, setEmail] = useState<InputState>({ value: 'lucasfigueiredo285@gmail.com', error: '' })
  const [password, setPassword] = useState<InputState>({ value: '1q2w3e4r', error: '' })
  const [loading, setLoading] = useState<boolean>(false)

  const { ShowError } = useToastMessage()

  const onLogin = async () => {
    if (!isEmail(email.value)) return setEmail({ ...email, error: 'screen.signIn.invalidEmail' })

    try {
      setLoading(true)
      await auth().signInWithEmailAndPassword(email.value, password.value)
      navigate(MainRoutes.TabNavigator, { screen: TabRoutes.MoviesListScreen })
    } catch (error) {
      const err: any = error
      if (err.code === 'auth/wrong-password') {
        ShowError('error.firebase.login.title', 'error.firebase.login.message')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Screen style={styles.root}>
      <Image source={logo} style={styles.image} />
      <View style={styles.inputContainer}>
        <Input
          state={email}
          customInputStyle={styles.input}
          autoCapitalize='none'
          placeholder={'common.email'}
          onChangeText={text => setEmail({ value: text, error: '' })}
        />
        <Input
          state={password}
          customInputStyle={styles.input}
          placeholder={'common.password'}
          secureTextEntry
          onChangeText={text => setPassword({ value: text, error: '' })}
        />
        <Button
          style={styles.button}
          loadingColor={colors.Primary}
          loading={loading}
          onPress={onLogin}
          label='screens.signIn.enter'
        />

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
  input: {
    color: colors.Common.White
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
