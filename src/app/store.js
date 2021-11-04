import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import searchesSlice from '../features/searches/searchesSlice'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = { // configuration object for redux-persist
  key: 'searches',
  storage, // define which storage to use
}

const reducers = combineReducers({ searches: searchesSlice })

const persistedReducer = persistReducer(persistConfig, reducers) // create a persisted reducer

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
