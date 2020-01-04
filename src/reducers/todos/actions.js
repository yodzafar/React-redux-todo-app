import {ADD_TODO} from "../../constants/action-types";

export const addTask = (id, label, completed) => {
    return {
        type: ADD_TODO,
        id,
        label,
        completed
    }
};