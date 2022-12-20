/**
 * Tạo một tệp có tên src/app/store.js. Nhập configureStoreAPI từ Bộ công cụ Redux. Chúng tôi sẽ bắt đầu bằng cách tạo một cửa hàng Redux trống và xuất nó:
 * Điều này tạo ra một cửa hàng Redux và cũng tự động định cấu hình tiện ích mở rộng Redux DevTools để bạn có thể kiểm tra cửa hàng trong khi phát triển.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import Cart from './SliceState/Cart';
import Category from './SliceState/Category';
import Favorite from './SliceState/Favorite';
import Home from './SliceState/Home';

import Loginstate from './SliceState/Login/index';
/**Khi tạo Redux store, truyền vào hàm createStore của bạn một hàm persistReducer có tác dụng đóng gói reducer gốc trong app của bạn. Một khi store đã được khởi tạo, truyền nó vào hàm persistStore để đảm bảo Redux state sẽ được lưu vào storage mỗi khi nó thay đổi.
 * @see https://github.com/rt2zz/redux-persist
 * @port npm install --save redux-persist - hoặc - yarn add redux-persist
 */
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  loginState: Loginstate,
  category: Category,
  home: Home,
  cart: Cart,
  favorite: Favorite,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
