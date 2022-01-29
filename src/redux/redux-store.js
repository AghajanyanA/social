import { combineReducers, createStore, applyMiddleware } from "redux";
import headerReducer from "./headerReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import visitProfileReducer from "./visitProfileReducer";
import thunk from 'redux-thunk'
import authMeReducer from "./authMeReducer";

const reducers = combineReducers({
    header: headerReducer,
    messagePage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    visitProfilePage: visitProfileReducer,
    authMe: authMeReducer,
})

const store = createStore(reducers, applyMiddleware(...[thunk]))

window.store = store
export default store