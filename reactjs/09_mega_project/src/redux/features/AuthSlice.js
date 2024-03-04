import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userData: null,
    token: "",
    isLoggedIn: false
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authLogin: () => {

        },
        authLogout: () => {

        }
    }
})

export const { authLogin, authLogout } = AuthSlice.actions

export default AuthSlice.reducer;