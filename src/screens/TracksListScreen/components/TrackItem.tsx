import React from 'react'
import { View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import Label from 'components/Label'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import FastImage from 'react-native-fast-image'
import useToastMessage from 'hooks/useToastMessage'
import { Track } from 'models/firebaseModels'
import SVG from 'components/SVG'
import useColorScheme from 'hooks/useColorScheme'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

import trash from 'assets/icons/trash.svg'

interface Props {
  track: Track
}

const TrackItem: React.FC<Props> = ({ track }) => {
  const styles = useThemedStyles(themedStyles)
  const colors = useColorScheme()

  const { ShowError, ShowSuccess } = useToastMessage()

  const onDelete = async () => {
    const uid = auth().currentUser?.uid
    if (uid) {
      try {
        await firestore().collection('users').doc(uid).collection('music').doc(track.id).delete()

        ShowSuccess('screens.tracksList.components.trackItem.veryGood', {
          key: 'screens.tracksList.components.trackItem.deleteSuccess',
          options: { track: track.title }
        })
      } catch (error) {
        ShowError('error.common.error', 'error.common.notPossible')
      }
    }
  }

  const onPress = () => {
    Alert.alert(
      'Atencão',
      'Deseja mesmo excluir a faixa da sua playlist?',
      [
        {
          text: 'Sim',
          onPress: onDelete
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ],
      {
        cancelable: true
      }
    )
  }

  return (
    <View style={styles.root2}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        snapToInterval={80}
        style={styles.card}
        contentContainerStyle={styles.cardContent}
      >
        <View style={styles.root}>
          <View style={styles.content}>
            <FastImage source={{ uri: track.image }} style={styles.image} />
            <View style={styles.texts}>
              <Label.H3 t={track.title} />
              <Label.P4 t={track.artist} />
            </View>
          </View>
        </View>
        <View style={styles.backgroundView}>
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <SVG xml={trash} width={28} height={28} color={colors.Common.White} />
            <Label.H3 t='Excluir' style={styles.delete} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const themedStyles = createThemedStyles(({ metrics, colors, screenWidth }) => ({
  root2: {
    width: screenWidth
  },

  card: {
    width: screenWidth,
    height: 80
  },

  cardContent: {
    width: screenWidth + 80 // (INNER_BUTTON_WIDTH * 2),
  },

  backgroundView: {
    flexDirection: 'row',
    width: 80
  },

  button: {
    width: 80,
    height: 80,
    backgroundColor: colors.Negative,
    alignItems: 'center',
    justifyContent: 'center'
  },

  delete: {
    color: colors.Common.White,
    marginTop: metrics.xxs
  },

  root: {
    flexDirection: 'row',
    paddingHorizontal: metrics.md,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.Common.White,
    maxHeight: 80,
    width: screenWidth
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 90
  },
  icon: {
    flex: 10
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  texts: {
    marginLeft: metrics.xs,
    flex: 1
  }
}))

export default TrackItem
