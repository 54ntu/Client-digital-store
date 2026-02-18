import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "./types";
import type { PayloadAction } from "@reduxjs/toolkit";


const productInfo: Product = {
    products: []
}

const productSlice = createSlice({
    name: "product",
    initialState: productInfo,
    reducers: {
        setProduct(state: Product, actions: PayloadAction<Product>) {
            state.products = [
                {
                    productName: "test",
                    qty: 22
                }
            ]
        }
    }
})

export const { setProduct } = productSlice.actions
export default productSlice.reducer