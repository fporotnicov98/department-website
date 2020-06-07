import {authAPI} from '../API/API'

let initial = {
    email: null,
    fio: null,
    role: null,
    token: null,
}
const authReducer = (state = initial, action) => {
    switch (action.type) {
        case "SET_AUTH_DATA":
            return {
                ...state,
                ...action.payload
            }
        case "SET_TOKEN":
            return{
                ...state,
                token: action.payload
            }
            case "SET_ORDERS":
                return {
                    ...state,
                    orders: action.payload
                }
        default:
            return state;

    }
}

export const setAuthData = (email, isAuth, fio, address,phoneNumber,login) => ({ type: "SET_AUTH_DATA", payload: { email, isAuth, fio, address,phoneNumber,login } })
export const setToken = (token) => ({ type: "SET_TOKEN", payload: token })
export const setOrders= (orders) => ({ type: "SET_ORDERS", payload: orders })


export const setRegistration = (email,password,fio) => dispatch => {
    authAPI.addRegData(email,password,fio)
}
export const setLogin = (email, password) => dispatch => {
    authAPI.login(email, password)
        .then(response => {
                dispatch(setToken(response.data))
                dispatch(getAuth(response.data))
        })
}
export const getAuth = (token) => (dispatch) => {
    authAPI.getAuth(token)
        .then(response => {
                return response
        })
}

export default authReducer