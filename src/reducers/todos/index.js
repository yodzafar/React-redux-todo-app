import {ADD_TODO, CLEAR_ALL, CLEAR_COMPLETED, DELETE_TASK, TASK_DONE} from "../../constants/action-types";
import { load } from 'redux-localstorage-simple'

let todoList = load({namespace: 'todo-list'});

if (!todoList || !todoList.tasks || !todoList.tasks.length){
  todoList = {
    tasks:[]
  }
}

export const tasks = (state = todoList.tasks, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          label: action.label,
          completed: action.completed
        }
      ];

    case CLEAR_ALL:
      return [];

    case TASK_DONE:
          return [...state].map(task => {
            if (task.id === action.id){
              task.completed = !task.completed
            }
            return task
          });

    case DELETE_TASK:
      return [...state].filter(item => item.id !== action.id);

    case CLEAR_COMPLETED:
      return [...state].filter(item => item.completed === false);

    default:
      return state
  }
};