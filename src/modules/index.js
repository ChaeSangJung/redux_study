import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import callApi from "./callApi";

const rootReducer = combineReducers({
    counter,
    todos,
    callApi
});

export default rootReducer;