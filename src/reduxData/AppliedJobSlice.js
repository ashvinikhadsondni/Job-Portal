import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({

    name: "AppliedJobData",
    initialState: {
        value: []
    },
    reducers: {

        AppliedJobListReducer: (state, action) => {
            state.value = action.payload
        },
        JobDetail: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { AppliedJobListReducer, JobDetail } = slice.actions
export default slice.reducer