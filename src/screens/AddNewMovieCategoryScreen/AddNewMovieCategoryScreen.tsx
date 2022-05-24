import { useNavigation } from '@react-navigation/native'
import Button from 'components/Button'
import { Input, InputState } from 'components/Input'
import useColorScheme from 'hooks/useColorScheme'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import Header from './components/Header'
import isEmpty from 'validator/lib/isEmpty'

import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import useToastMessage from 'hooks/useToastMessage'
import { MainRoutes, MainStackNavigationProps } from 'navigation/models/MainStackModels'

const AddNewMovieCategoryScreen: React.FC = () => {
  const styles = useThemedStyles(themedStyles)
  const colors = useColorScheme()
  const { goBack, reset } = useNavigation<MainStackNavigationProps<MainRoutes.AddNewMovieCategoryScreen>>()
  const [category, setCategory] = useState<InputState>({ value: '', error: '' })
  const { ShowError } = useToastMessage()

  const onCreate = async () => {
    if (isEmpty(category.value)) return setCategory({ ...category, error: 'error.common.notEmpty' })

    const uid = auth().currentUser?.uid
    if (!uid) {
      ShowError('error.common.loggedOutTitle', 'error.common.loggedtOutMessage')
      reset({ index: 0, routes: [{ name: MainRoutes.SignInScreen }] })
    }

    try {
      await firestore().collection('users').doc(uid).collection('categories').add({ name: category.value })
    } catch (error) {
      ShowError('error.common.error', 'error.common.notPossible')
    }
  }
  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.container}>
        <Header />
        <Input
          placeholder='screens.addNewMovieCategory.categoryName'
          placeholderBackground={colors.Common.White}
          colors={[colors.Common.MediumGrey, colors.Primary, colors.Negative]}
          state={category}
          onChangeText={text => setCategory({ value: text, error: '' })}
        />
        <View style={styles.buttonContainer}>
          <Button onPress={goBack} label='common.cancel' style={styles.cancel} labelStyle={styles.cancelLabel} />
          <Button onPress={onCreate} label='common.create' style={styles.create} labelStyle={styles.createLabel} />
        </View>
      </SafeAreaView>
    </View>
  )
}

const themedStyles = createThemedStyles(({ colors, metrics }) => ({
  root: {
    backgroundColor: colors.Common.White,
    bottom: 0,
    position: 'absolute',
    height: '35%',
    width: '100%',
    borderTopStartRadius: metrics.sm,
    borderTopEndRadius: metrics.sm
  },

  container: {
    flex: 1,
    margin: metrics.sm,
    justifyContent: 'space-between'
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  cancel: {
    borderWidth: 1.5,
    borderColor: colors.Negative,
    width: '30%'
  },

  cancelLabel: {
    color: colors.Negative
  },

  create: {
    width: '30%',
    backgroundColor: colors.Primary,
    borderWidth: 1.5,
    borderColor: colors.Primary
  },

  createLabel: {
    color: colors.Common.White
  }
}))

export default AddNewMovieCategoryScreen
