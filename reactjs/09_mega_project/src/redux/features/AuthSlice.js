import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userData: null,
    isLoggedIn: false
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authLogin: (state, action) => {
            state.isLoggedIn = true;
            state.userData = action.payload;
        },
        authLogout: (state) => {
            state.isLoggedIn = false;
            state.userData = null;
        }
    }
})

export const { authLogin, authLogout } = AuthSlice.actions

export default AuthSlice.reducer;