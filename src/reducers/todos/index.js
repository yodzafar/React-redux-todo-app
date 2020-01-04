import {ADD_TODO} from "../../constants/action-types";

const todoList = [
    {
        id:1,
        label:'Drink Coffee',
        completed:true
    },

    {
        id:2,
        label:'Listen to music',
        completed:true
    },
    {
        id:3,
        label:'Go to walk',
        completed:false
    },
    {
        id:4,
        label:'Have a lunch',
        completed:false
    },
];

export const tasks = (state = todoList, action) =>{
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    label:action.label,
                    completed: action.completed
                }
            ];
        default:
            return state
    }
};