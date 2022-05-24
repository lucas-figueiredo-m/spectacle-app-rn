import { StackNavigationOptions, TransitionPresets } from '@react-navigation/stack'
import { Platform } from 'react-native'
// import { Colors } from 'theme'

export const modalOptions: StackNavigationOptions = {
  presentation: Platform.OS === 'ios' ? 'modal' : 'transparentModal',
  headerShown: false,
  detachPreviousScreen: false,
  cardStyle: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: 'transparent' // TODO: change to a centralized color theme
  },
  ...Platform.select({
    android: TransitionPresets.FadeFromBottomAndroid
  })
}
