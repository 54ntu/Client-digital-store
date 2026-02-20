import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice.ts"
import userSlice from "./userSlice.ts"


const store = configureStore({
    reducer: {
        haha: productSlice,
        hehe: userSlice
    }
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>