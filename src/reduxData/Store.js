import { configureStore } from '@reduxjs/toolkit'
import authSlice from './AuthSlice'
import hrSlice from './HrSlice'
import cateSlice from './CategorySlice'
import updateSlice from './UpdateSlice'
import jobSlice from './JobSlice'
import candidateSlice from './CandidateSlice'
import AppliedJobSlice from './AppliedJobSlice'
const store = configureStore({
    reducer: {
        authInfo: authSlice,
        hrInfo: hrSlice,
        cateInfo: cateSlice,
        updateInfo: updateSlice,
        jobInfo: jobSlice,
        candidateInfo: candidateSlice,
        appliedJobInfo: AppliedJobSlice
    }
})

export default store;