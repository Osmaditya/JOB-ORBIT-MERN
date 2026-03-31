import {
    registerRequest, registerSuccess, registerFail,
    loginRequest, loginSuccess, loginFail,
    isLoginRequest, isLoginSuccess, isLoginFail,
    getMeRequest, getMeSuccess, getMeFail,
    changePasswordRequest, changePasswordSuccess, changePasswordFail,
    updateProfileRequest, updateProfileSuccess, updateProfileFail,
    deleteAccountRequest, deleteAccountSuccess, deleteAccountFail,
    logoutClearState
} from '../slices/UserSlice'

import { toast } from 'react-toastify'
import axios from 'axios'

// ✅ BASE URL
const BASE_URL = "https://job-orbit-mern.onrender.com/api/v1"

// ✅ REGISTER
export const registerUser = (userData) => async (dispatch) => {
    try {
        dispatch(registerRequest())

        const { data } = await axios.post(`${BASE_URL}/register`, userData)

        dispatch(registerSuccess())
        localStorage.setItem('userToken', data.token)
        dispatch(logOrNot())
        toast.success("Registration successful !")

    } catch (err) {
        dispatch(registerFail(err.response.data.message))
        if (err.response.data.message.includes("duplicate")) {
            toast.error("User already exists.")
        } else {
            toast.error(err.response.data.message)
        }
    }
}

// ✅ LOGIN
export const loginUser = (userData) => async (dispatch) => {
    try {
        dispatch(loginRequest())

        const { data } = await axios.post(`${BASE_URL}/login`, userData)

        dispatch(loginSuccess())
        localStorage.setItem('userToken', data.token)
        dispatch(logOrNot())
        dispatch(me())
        toast.success("Login successful !")

    } catch (err) {
        dispatch(loginFail(err.response.data.message))
        toast.error(err.response.data.message)
    }
}

// ✅ CHECK LOGIN
export const logOrNot = () => async (dispatch) => {
    try {
        dispatch(isLoginRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        }

        const { data } = await axios.get(`${BASE_URL}/isLogin`, config)

        dispatch(isLoginSuccess(data.isLogin))

    } catch (err) {
        dispatch(isLoginFail())
    }
}

// ✅ GET ME
export const me = () => async (dispatch) => {
    try {
        dispatch(getMeRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        }

        const { data } = await axios.get(`${BASE_URL}/me`, config)
        
        localStorage.setItem("role", data.user.role)

        dispatch(getMeSuccess(data.user))

    } catch (err) {
        dispatch(getMeFail())
    }
}

// ✅ CHANGE PASSWORD
export const changePass = (userData) => async (dispatch) => {
    try {
        dispatch(changePasswordRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        }

        await axios.put(`${BASE_URL}/changePassword`, userData, config)

        dispatch(changePasswordSuccess())
        toast.success("Password Changed successfully !")

    } catch (err) {
        dispatch(changePasswordFail(err.response.data.message))
        toast.error(err.response.data.message)
    }
}

// ✅ UPDATE PROFILE
export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch(updateProfileRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        }

        await axios.put(`${BASE_URL}/updateProfile`, userData, config)

        dispatch(updateProfileSuccess())
        toast.success("Profile Updated successfully !")
        dispatch(me())

    } catch (err) {
        dispatch(updateProfileFail(err.response.data.message))
        toast.error(err.response.data.message)
    }
}

// ✅ DELETE ACCOUNT
export const deleteAccount = (userData) => async (dispatch) => {
    try {
        dispatch(deleteAccountRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        }

        const { data } = await axios.put(`${BASE_URL}/deleteAccount`, userData, config)

        dispatch(deleteAccountSuccess())

        if (data.message === "Account Deleted") {
            toast.success("Account Deleted successfully !")
            localStorage.removeItem('userToken')
            dispatch(logOrNot())
            dispatch(logoutClearState())
        } else {
            toast.error("Wrong Password !")
        }

    } catch (err) {
        dispatch(deleteAccountFail(err.response.data.message))
        toast.error(err.response.data.message)
    }
}