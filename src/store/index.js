import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import { save } from 'redux-localstorage-simple'




const configureStore = preloadedState => (
    createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(save({namespace: 'todo-list'}))
        )
    )
);

export const store = configureStore({});