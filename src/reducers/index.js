import {combineReducers} from "redux";
import {tasks} from "./todos";
import {filters} from "./filters";

export const rootReducer = combineReducers({tasks, filters});