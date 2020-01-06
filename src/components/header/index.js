import React from "react";

/*Styles*/
import './header.css'

export const Header = ({tasksCount, done}) => (
    <div className='header'>
      <h1 className='title'>TodoList</h1>
      <div className='header-info'>tasks left: {tasksCount}, completed: {done}</div>
    </div>

);