import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./types";


const initialState: User = {
    name: "hello",
    age: 22

}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName(state: User, action: PayloadAction<string>) {
            state.name = action.payload
        },
        setAge(state: User, action: PayloadAction<number>) {
            state.age = action.payload
        }

    }
})

// actions 
export const { setName, setAge } = userSlice.actions
export default userSlice.reducer