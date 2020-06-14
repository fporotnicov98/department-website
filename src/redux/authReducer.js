import {authAPI} from '../API/API'
import { stopSubmit, reset } from 'redux-form'
import { Redirect } from 'react-router-dom'
import React from 'react'
import { divide } from 'lodash'

let initial = {
    email: null,
    isAuth: null,
    fio: null,
    userId:null,
    roleUser: null,
}
const authReducer = (state = initial, action) => {
    switch (action.type) {
        case "SET_AUTH_DATA":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;

    }
}

export const setAuthData = (email, fio, userId ,roleUser, isAuth) => ({ type: "SET_AUTH_DATA", payload: { email, fio, userId ,roleUser, isAuth } })
export const setToken = (token) => ({ type: "SET_TOKEN", payload: token })
export const setOrders= (orders) => ({ type: "SET_ORDERS", payload: orders })


export const sendEmail = (email,password,fio) => dispatch => {
    authAPI.sendEmail(email,password,fio)
        .then(response => {
            dispatch(reset('registrationForm'));
        })
        .catch(err => {
            let action = stopSubmit("registrationForm",{_error: "Пользователь с таким email уже существует"})
            dispatch(action)
        })
}
export const getCode = (code) => dispatch => {
    authAPI.getCode(code)
        .then(response => {
            alert("Регистрация прошла успешно!")
        })
        .catch(err => {
            let action = stopSubmit("confirmForm",{_error: "Вы ввели не правильный код!"})
            dispatch(action)
        })
}
// authAlert = () => {
//     alert()
// }
export const setLogin = (email, password) => dispatch => {
    authAPI.login(email, password)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(getAuth(response.data.token))
                dispatch(reset('loginForm'));
                alert('<div>Авторизация прошла успешно!</div>')
            }
                else {
                    
                }
        })
        .catch(err => {
            let action = stopSubmit("loginForm",{_error: "Неправильный логин или пароль"})
            dispatch(action)
        })
}
export const getAuth = (token) => (dispatch) => {
    authAPI.getAuth(token)
        .then(response => {
                dispatch(setAuthData(response.data.email,response.data.fio,response.data.id,response.data.roleUser,true))
        })
}
export const logout = () => dispatch => {
    dispatch(setAuthData(null,null,null,null,false))
}
export default authReducer