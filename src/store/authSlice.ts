import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import axios from "axios";
import type { AppDispatch } from "./store";


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


export function registerUer(data: IUser) {
    return async function registerUserThunk(dispatch: AppDispatch) {
        try {
            const response = await axios.post("http://localhost:4000/api/v1/users/register", data)
            if (response.status === 200) {
                dispatch(setStatus(Status.SUCCESS))
            } else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR

            ))


        }

    }
}