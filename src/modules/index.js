import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import callApi from "./callApi";
import timezone_search from "./timezone_search";
import timezone_mod from "./timezone_mod"

const rootReducer = combineReducers({
    counter,
    todos,
    callApi,
    timezone_search,
    timezone_mod
});

export default rootReducer;