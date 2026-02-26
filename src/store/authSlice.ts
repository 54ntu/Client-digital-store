import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import axios from "axios";
import type { AppDispatch } from "./store";


interface IUser {
    username: string | null,
    email: string | null,
    password: string | null,
    token: string | null

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
        username: null,
        email: null,
        password: null,
        token: null

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
            console.log(`response from the backend is : ${response.data}`)
            if (response.status === 201) {
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setUser({
                    ...response.data.user
                }))
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

            // console.log(`token: ${response.data.accessToken}`)

            if (response.status === 200) {
                dispatch(setStatus(Status.SUCCESS))
                if (response.data.accessToken) {
                    localStorage.setItem("tokenhoyo", response.data.accessToken)
                    dispatch(setToken(response.data.accessToken))
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

export function logoutUser() {
    return async function logoutUserThunk(dispatch: AppDispatch) {
        try {
            const response = await axios.post("http://localhost:4000/api/v1/users/logout")
            if (response.status === 200) {
                dispatch(setStatus(Status.SUCCESS))
            } else if (response.status !== 200) {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))

        }
    }
}