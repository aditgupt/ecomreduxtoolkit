// import { configureStore } from "@reduxjs/toolkit";
// import slice from './slice'

// const store = configureStore({
//     reducer: {
//         cart : slice,
//     }
// })

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import slice from './slice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, slice);

const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };