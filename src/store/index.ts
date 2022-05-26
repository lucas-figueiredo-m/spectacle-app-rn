import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import MovieReducer from './Movie/MovieReducer'
import MusicReducer from './Music/MusicReducer'

const combinedReducers = combineReducers({
  movies: MovieReducer,
  musics: MusicReducer
})

const store = configureStore({
  reducer: combinedReducers,
  middleware: () => {
    const middlewares = getDefaultMiddleware()

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default
      middlewares.push(createDebugger())
    }

    return middlewares
  }
})

export type RootState = ReturnType<typeof combinedReducers>

export default store
