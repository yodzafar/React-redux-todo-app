import React from "react";

import './todo-list-item.css'

export const TodoListItem = ({label, completed, id, taskDone, deleteTask}) => {
    const done = completed ? 'done' : '';
    return (
        <li id={id} className={`todo-list-item ${done}`}>
          <button className={`action-btn done-btn ${done}`} onClick={() =>taskDone(id)}>
            <i className='fa fa-check'></i>
          </button>
            <span className={`label ${done}`} >
            {label}
            </span>
          <button className="action-btn delete-btn" onClick={() =>deleteTask(id)}>
            <i className='fa fa-close'></i>
          </button>
        </li>
    )
};