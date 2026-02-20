import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";


interface IUser {
    username: string,
    email: string,
    password: string,

}

interface IAuthInitial {
    user: IUser,
    status: Status

}


const authInitial: IAuthInitial = {
    user: {
        username: "",
        email: "",
        password: ""
    },
    status: Status.LOADING

}

const authSlice = createSlice({
    name: "auth",
    initialState: authInitial,
    reducers: {
        setUser(state: IAuthInitial, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
        setStatus(state: IAuthInitial, action: PayloadAction<Status>) {
            state.status = action.payload
        }

    }
})


export const { setStatus, setUser } = authSlice.actions
export default authSlice.reducer