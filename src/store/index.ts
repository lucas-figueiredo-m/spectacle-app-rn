import { combineReducers, configureStore } from '@reduxjs/toolkit'
import MovieReducer from './Movie/MovieReducer'

const combinedReducers = combineReducers({
  movies: MovieReducer
})

const store = configureStore({
  reducer: combinedReducers

  // if (__DEV__ && !process.env.JEST_WORKER_ID) {
  //   const createDebugger = require('redux-flipper').default
  //   middlewares.push(createDebugger())
  // }

  // return middlewares
})

export type RootState = ReturnType<typeof combinedReducers>

export default store
