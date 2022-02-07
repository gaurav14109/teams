import { combineReducers } from "redux";
import users from './users'
import userData from './userData'
const reducers =  combineReducers({
    users,
    userData
})

export default reducers