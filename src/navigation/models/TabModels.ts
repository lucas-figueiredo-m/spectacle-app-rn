export enum TabRoutes {
  MoviesListScreen = 'MOVIES_LIST_SCREEN',
  TracksListScreen = 'TRACKS_LIST_SCREEN',
  SettingsScreen = 'SETTINGS_SCREEN'
}

export type TabParamsList = {
  [TabRoutes.MoviesListScreen]: undefined
  [TabRoutes.TracksListScreen]: undefined
  [TabRoutes.SettingsScreen]: undefined
}
