import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.ts"
import productSlice from "./productSlice.ts"


const store = configureStore({
    reducer: {
        auth: authSlice,
        products:productSlice
    }
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>