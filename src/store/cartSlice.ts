import { createSlice,type PayloadAction } from "@reduxjs/toolkit";
import type { ICartInitialState, ICartItem } from "../pages/cart/type";
import { Status } from "../globals/types/type";
import type { AppDispatch } from "./store";
import axios from "axios";

const initialState:ICartInitialState = {
    items: [],
    status: Status.LOADING
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        setCartItems(state:ICartInitialState,action:PayloadAction<ICartItem[]>){
            state.items = action.payload;
        },
        setStatus(state:ICartInitialState, action:PayloadAction<Status>){
            state.status=action.payload
    }
}
})

export const {setCartItems,setStatus}=cartSlice.actions;
export default cartSlice.reducer;



export function addToCart(productId:string){
    return async function addToCartThunk(dispatch:AppDispatch){
        try{
            // Make API call to add item to cart
            // On success, update cart items in the state
            // dispatch(setCartItems(updatedCartItems));
            // dispatch(setStatus(Status.SUCCESS));
          
            const response = await axios.post("http://localhost:4000/api/v1/carts/",
                    {
                productId,
                quantity:1
            },
        {
            withCredentials:true,
        })
                // console.log(response.data);
                if(response.status===200){
                dispatch(setCartItems(response.data.data));
                dispatch(setStatus(Status.SUCCESS));
                }else{
                    dispatch(setStatus(Status.ERROR));
                }
                



        }catch(error){
            dispatch(setStatus(Status.ERROR));  
                // console.error("Error adding to cart:", error);

        }

    }
}


export function getCartItems(){
    return async function getCartItemsThunk(dispatch:AppDispatch){

   
    try{
        const response = await axios.get("http://localhost:4000/api/v1/carts/",
        {
            withCredentials:true
        })
        if(response.status===200){
            dispatch(setCartItems(response.data.data));
            dispatch(setStatus(Status.SUCCESS));
        }else{
            dispatch(setStatus(Status.ERROR));
        }
    }
    catch(error){
        dispatch(setStatus(Status.ERROR));
        // console.error("Error fetching cart items:", error);
    }
  }
}