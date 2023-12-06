import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({

    name: "Jobdata",
    initialState: {
        value: []
    },
    reducers: {
        JobListReducer: (state, action) => {
            state.value = action.payload
        },
        StatusReducer: (state, action) => {
            state.value = action.payload
        },
        JobByCateListReducer: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { JobListReducer, StatusReducer, JobByCateListReducer } = slice.actions
export default slice.reducer