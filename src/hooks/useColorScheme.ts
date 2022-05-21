import { useColorScheme as useSystemColorScheme } from 'react-native'
import { Colors } from 'themes/colors'

function useColorScheme() {
  return Colors[useSystemColorScheme() || 'light']
}

export default useColorScheme
