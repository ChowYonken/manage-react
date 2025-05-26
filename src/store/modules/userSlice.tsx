import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { userState, UserInfo } from '../types'
import { RootState, AppDispatch } from '../index'

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
      state.userInfo = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    resetState: state => {
      state.token = ''
      state.userInfo = {} as UserInfo
    },
  },
})

export const { setUserInfo, setToken, resetState } = userSlice.actions

export default userSlice.reducer
