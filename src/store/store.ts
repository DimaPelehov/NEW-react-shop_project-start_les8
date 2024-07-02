import { configureStore } from '@reduxjs/toolkit'
import likeSlice from './likeSlice'

export const store = configureStore({
    reducer: {
        productsLikeState: likeSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
