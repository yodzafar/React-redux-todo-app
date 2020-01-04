import React from "react";
import {TodoListItem} from "../todo-list-item";

/*Styles*/
import './todo-list.css'

export const TodoList = ({items, taskDone, deleteTask}) => {
    return (
      <ul className='todo-list'>
        {items.map(item => {
            const {id} = item;
          return (
              <TodoListItem
                  key={id}
                  {...item}
                  taskDone={taskDone}
                  deleteTask={deleteTask}
              />
          )
        })}

      </ul>
  )
};