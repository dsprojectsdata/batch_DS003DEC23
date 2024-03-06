import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/AuthSlice"

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
});

const persistor = persistStore(store)

export { persistor }

export default store;