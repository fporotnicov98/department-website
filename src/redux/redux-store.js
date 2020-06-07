import { combineReducers, createStore, applyMiddleware } from "redux";
import newsReducer from "./newsReducer";
import thunkMiddleware from 'redux-thunk'
import surveyReducer from "./surveyReducer";
import forumReducer from "./forumReducer";
import authReducer from "./authReducer"
import { reducer as formReducer } from 'redux-form'



let reducers = combineReducers({
    newsPage: newsReducer,
    surveyPage: surveyReducer,
    forumPage: forumReducer,
    form: formReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;