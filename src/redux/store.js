import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "./phoneSlise";
import { filterReducer } from "./filterSlise";



const persistConfig = {
  key: 'contacts',
  storage,
}
const persistedReducer = persistReducer(persistConfig, phoneReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
     filter: filterReducer,
    }, 
     middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


