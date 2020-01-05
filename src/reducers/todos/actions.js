import {ADD_TODO, CLEAR_ALL, CLEAR_COMPLETED, DELETE_TASK, TASK_DONE} from "../../constants/action-types";

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

export const clearCompleted = (completed) => {
    return {
        type:CLEAR_COMPLETED,
        completed
    }
};

export const clearAll = () => {
    return{
        type:CLEAR_ALL
    }
};

