import { createSlice } from "@reduxjs/toolkit";





interface IProduct{
    products:[{
        productName:string,
        description:string,
        price:number,
        
    }]
}

const initialState={
    product:{

    }
}
const productSlice = createSlice({
    name:"product",
    initialState:{},
    reducers:{

    }
})