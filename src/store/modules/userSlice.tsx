import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { userState, UserInfo } from '@/interfaces/common'
import { RootState, AppDispatch } from '../index'
import { flattenRoutes, filterMenuModule } from '@/utils/index'
import storage from '@/utils/storage'

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectValue: string
  extra: { s: string; n: number }
}>()

const initialState: userState = {
  token: '',
  userInfo: {},
} as userState

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = {
        ...action.payload,
        flattenRoutes: flattenRoutes(action.payload.menus),
        menus: filterMenuModule(action.payload.menus),
      }
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    resetState: state => {
      state.token = ''
      state.userInfo = {} as UserInfo
      storage.clear()
    },
  },
})

export const { setUserInfo, setToken, resetState } = userSlice.actions

export default userSlice.reducer
