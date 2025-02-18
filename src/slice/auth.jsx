import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    loggedIn: false,
    user: null,
  },
  reducers: {
    // Login
    loginUserstart: state => {
      state.isLoading =  true
    },
    loginUsersuccess: state => {},
    loginUserFailure: state => {},
    // Register
    registerUserstart: state => {
      state.isLoading =  true
    },
    registerUsersuccess: state => {},
    registerUserFailure: state => {}
  }
})
export const {loginUserstart, loginUsersuccess, loginUserFailure, registerUserstart, registerUsersuccess, registerUserFailure} = AuthSlice.actions
export default AuthSlice.reducer