import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { CalendarQueries } from 'api'

const rootReducer = combineReducers({
  [CalendarQueries.reducerPath]: CalendarQueries.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), CalendarQueries.middleware],
})
