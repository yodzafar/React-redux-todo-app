import {ADD_TODO, DELETE_TASK, TASK_DONE} from "../../constants/action-types";

export const addTask = (id, label, completed) => {
    return {
        type: ADD_TODO,
        id,
        label,
        completed
    }
};

export const taskDone = (id) => {
    return {
        type:TASK_DONE,
        id
    }
};


export const deleteTask = (id) => {
    return {
        type:DELETE_TASK,
        id
    }
};