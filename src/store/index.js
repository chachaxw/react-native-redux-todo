import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = (initialState) => {
  return createStore(
    persistedReducer,
    initialState,
    applyMiddleware()
  );
}

const persistor = persistStore(store);

export default { store, persistor };