import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({

    name: "Hrdata",
    initialState: {
        value: []

    },
    reducers: {
        HrSaveReducer: (state, action) => {
            state.value = action.payload
        },
        HrListReducer: (state, action) => {
            state.value = action.payload
        },
        HrDeleteReducer: (state, action) => {
            state.editHr = action.payload
        }
    }
})

export const { HrListReducer, HrSaveReducer, HrUpdateReducer, HrDeleteReducer } = slice.actions
export default slice.reducer