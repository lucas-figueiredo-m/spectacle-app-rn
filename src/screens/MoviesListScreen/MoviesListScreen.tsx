import Screen from 'components/Screen'
import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import Label from 'components/Label'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import IconButton from 'components/IconButton'
import plus from 'assets/icons/plus-circle.svg'
import useColorScheme from 'hooks/useColorScheme'
import useRootNavigator from 'hooks/useRootNavigator'
import { MainRoutes } from 'navigation/models/MainStackModels'
import { Category } from 'models/firebaseModels'
import MovieList from './components/MovieList'
import Spacer from './components/Spacer'

const MoviesListScreen: React.FC = () => {
  const styles = useThemedStyles(themedStyles)
  const colors = useColorScheme()
  const { navigate } = useRootNavigator()
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const uid = auth().currentUser?.uid
    if (uid) {
      const unsubscribe = firestore()
        .collection('users')
        .doc(uid)
        .collection('categories')
        .onSnapshot(
          querySnapshot => {
            const dataList = querySnapshot.docs.map(data => ({
              id: data.id,
              ...data.data()
            })) as Category[]

            console.log('DATA: ', dataList)

            setCategories(dataList)
          },
          errorSnapshot => {
            console.log('ERROR: ', errorSnapshot)
          }
        )

      return () => {
        unsubscribe()
      }
    }
  }, [])

  return (
    <Screen>
      <View style={styles.heading}>
        <Label.H1 t='screens.moviesList.title' style={styles.title} />
        <IconButton
          icon={plus}
          onPress={() => navigate(MainRoutes.AddNewMovieCategoryScreen)}
          size={30}
          color={colors.Common.White}
        />
      </View>
      <View>
        <FlatList
          data={categories}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
          ItemSeparatorComponent={() => <Spacer.V />}
          renderItem={({ item }) => <MovieList category={item} />}
        />
      </View>
    </Screen>
  )
}

const themedStyles = createThemedStyles(({ colors, metrics }) => ({
  title: {
    color: colors.Common.White
  },
  heading: {
    padding: metrics.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  listContainer: {
    paddingBottom: 120
  }
}))

export default MoviesListScreen
