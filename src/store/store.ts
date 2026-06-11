import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.ts"
import productSlice from "./productSlice.ts"
import cartSlice from "./cartSlice.ts"


const store = configureStore({
    reducer: {
        auth: authSlice,
        products:productSlice,
        product:productSlice,
        cart:cartSlice
    }
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>