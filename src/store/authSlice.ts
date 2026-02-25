import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import axios from "axios";
import type { AppDispatch } from "./store";


interface IUser {
    username: string,
    email: string,
    password: string,
    token: string

}

interface ILoginUser {
    email: string,
    password: string
}

interface IAuthInitial {
    user: IUser,
    status: Status,


}


const authInitial: IAuthInitial = {
    user: {
        username: "",
        email: "",
        password: "",
        token: ""
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
        },

        setToken(state: IAuthInitial, action: PayloadAction<string>) {
            state.user.token = action.payload
        }

    }
})


export const { setStatus, setUser, setToken } = authSlice.actions
export default authSlice.reducer


export function registerUer(data: IUser) {
    return async function registerUserThunk(dispatch: AppDispatch) {
        try {
            const response = await axios.post("http://localhost:4000/api/v1/users/register", data)
            if (response.status === 201) {
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setUser(data))
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


export function loginUser(data: ILoginUser) {
    return async function loginUserThunk(dispatch: AppDispatch) {
        try {
            const response = await axios.post("http://localhost:4000/api/v1/users/login", data)
            if (response.status === 200) {
                dispatch(setStatus(Status.SUCCESS))
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token)
                    dispatch(setToken(response.data.token))
                } else {
                    dispatch(setStatus(Status.ERROR))
                }

            } else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))


        }
    }

}