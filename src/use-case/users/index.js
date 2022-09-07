import { createAction, createSlice } from "@reduxjs/toolkit";
import initialState from "./user.model";
import { isFailState,isPendingState, isSuccessState } from "../cross/cross.logic";

const trackedAction=createAction('USER/reset-tracked-state')

export const userReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.page = actions.payload.page ?? 0;
      state.users = actions.payload.users;
    },
    removeUser:(state,actions)=>{
      state.users=state.users.filter(usr=>usr!=actions.payload.id)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(trackedAction, () => initialState)
      .addMatcher(isPendingState, (state, _) => {
        state.isLoading = true;
      })
      .addMatcher(isFailState, (state, _) => {
        state.isLoading = false;
        state.onError.status = true;
      })
      .addMatcher(isSuccessState, (state, _) => {
        state.isLoading = false;
      });
  },
});
export const {setUser,removeUser}=userReducer.actions
export default userReducer.reducer;
