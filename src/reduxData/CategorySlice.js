import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({

    name: "Catedata",
    initialState: {
        value: []
    },
    reducers: {
        CateSaveReducer: (state, action) => {
            state.value = action.payload
        },
        CateListReducer: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { CateListReducer, CateSaveReducer } = slice.actions
export default slice.reducer