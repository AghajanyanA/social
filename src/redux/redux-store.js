import { combineReducers, createStore } from "redux";
import headerReducer from "./headerReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    header: headerReducer,
    messagePage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

window.store = store

export default store