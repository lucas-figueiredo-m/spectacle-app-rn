import { createNavigationContainerRef } from '@react-navigation/native'
import { MainRoutes, MainStackParamList } from 'navigation/models/MainStackModels'

export const rootNavigationRef = createNavigationContainerRef<MainStackParamList>()

export default () => {
  const navigate = (screen: MainRoutes) => {
    if (rootNavigationRef.isReady()) {
      rootNavigationRef.navigate(screen)
    }
  }

  return { navigate }
}
