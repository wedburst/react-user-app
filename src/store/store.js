import { configureStore } from '@reduxjs/toolkit'
import {userReducer} from '../use-case/users'

export const store = configureStore({
  reducer: {
    user: userReducer.reducer,
  },
})