//What we do here is combine the reducers into one main root reducer, 
//a single state object.

import { combineReducers} from "redux";
import authedUser from "../reducers/authedUser"
import questions from "../reducers/questions"
import users from "../reducers/users"


export default combineReducers({
    authedUser,
    questions, 
    users,
})