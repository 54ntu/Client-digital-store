import { createSlice,type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct, IProducts } from "../pages/product/types";
import { Status } from "../globals/types/type";
import type { AppDispatch, RootState } from "./store";
import axios from "axios";



const initialState: IProducts={
    products:[],
    status: Status.LOADING,
    product:null
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
        },
        setSingleProduct(state:IProducts,action:PayloadAction<IProduct>){
            state.product=action.payload
        }
    }
})


export const {setProduct,setStatus,setSingleProduct}=productSlice.actions;
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

export function fetchSingleProduct(id:string){
    return async function fetchProductsThunk(dispatch:AppDispatch,getState:() => RootState){
        const store = getState();
        const existingProduct= store.products.products.find((product)=>product.id===id)
        // console.log(`existing product:${existingProduct?.productName}`)
        if(existingProduct){
            dispatch(setSingleProduct(existingProduct))
            dispatch(setStatus(Status.SUCCESS))
            return;
        }
        try{
            const response=await axios.get(`http://localhost:4000/api/v1/products/get-single/${id}`);
            // console.log(`response we get for products:${response.data}`) 
            if(response.status===200){
                dispatch(setSingleProduct(response.data.product))
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        }catch(error){
            dispatch(setStatus(Status.ERROR))
        }
    }
}