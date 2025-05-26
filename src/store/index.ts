import { configureStore } from '@reduxjs/toolkit'
import userSlice from './modules/userSlice'
import storage from 'redux-persist/lib/storage' // 默认使用localStorage
import { persistStore, persistReducer } from 'redux-persist'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const persistConfig = {
  key: 'root', // 可选，用于在localStorage中设置键名
  storage, // 存储引擎，默认使用localStorage
  // 其他配置选项...
}

const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, userSlice),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // 关闭序列化检查（慎用！）
    }),
})
export const persistor = persistStore(store)
export default store

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
