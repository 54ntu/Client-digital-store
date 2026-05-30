import { createSlice,type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct, IProducts } from "../pages/product/types";
import { Status } from "../globals/types/type";
import type { AppDispatch } from "./store";
import axios from "axios";



const initialState: IProducts={
    products:[],
    status: Status.LOADING
}


const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        setProduct(state:IProducts,action:PayloadAction<IProduct[]>){
            state.products=action.payload;
        },
        setStatus(state:IProducts, action:PayloadAction<Status>){
            state.status=action.payload;
        }
    }
})


export const {setProduct,setStatus}=productSlice.actions;
export default productSlice.reducer;


export function fetchProducts(){
    return async function fetchProductsThunk(dispatch:AppDispatch){
        try{
            const response=await axios.get("http://localhost:4000/api/v1/products/get-product");
            // console.log(`response we get for products:${response.data}`) 
            if(response.status===200){
                dispatch(setProduct(response.data.product))
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        }catch(error){
            dispatch(setStatus(Status.ERROR))
        }
    }
}