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
        setName(state: User, action: PayloadAction<User>) {
            state.name = "hiiii"
        },
        setAge(state: User, action: PayloadAction<User>) {
            state.age = 23
        }

    }
})

// actions 
export const { setName, setAge } = userSlice.actions
export default userSlice.reducer