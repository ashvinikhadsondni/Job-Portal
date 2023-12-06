import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({

    name: "candidateData",
    initialState: {
        value: []
    },
    reducers: {
        CandidateListReducer: (state, action) => {
            state.value = action.payload
        },
        MyJobsReducer: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { CandidateListReducer, MyJobsReducer } = slice.actions
export default slice.reducer