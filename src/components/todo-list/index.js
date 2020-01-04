import React from "react";
import {TodoListItem} from "../todo-list-item";

/*Styles*/
import './todo-list.css'

export const TodoList = ({items}) => {
    return (
      <ul className='todo-list'>
        {items.map(item => {
            const {id, ...itemProps} = item;
          return (
              <TodoListItem
                  key={item.id}
                  {...itemProps}
              />
          )
        })}

      </ul>
  )
};