import { createSlice } from '@reduxjs/toolkit'


const saveUserData = JSON.parse(localStorage.getItem("userInfo"))

const initialState = {
    value: saveUserData || { isLogin: false, token: undefined, username: undefined, type: undefined }
}
const slice = createSlice({



    name: "auth",
    initialState,
    reducers: {
        authReducer: (state, action) => {
            state.value = action.payload
            localStorage.setItem("userInfo", JSON.stringify(action.payload))
        }
    }
})

export const { authReducer } = slice.actions
export default slice.reducer