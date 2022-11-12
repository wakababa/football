import {configureStore, ThunkAction, Action, combineReducers} from '@reduxjs/toolkit';
import {teamApi} from '../features/counter/teamSlice';
import type { PreloadedState } from '@reduxjs/toolkit'


const rootReducer = combineReducers({
  [teamApi.reducerPath]: teamApi.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
        getDefaultMiddleware().concat(teamApi.middleware),
    preloadedState,
  })
}



export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
