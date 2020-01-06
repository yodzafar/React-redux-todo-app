import React from 'react'

import './todo-filter.css'

const filter_btn = [
  {
    text: 'All',
    id: 'all'
  },
  {
    text: 'Active',
    id: 'active'
  },
  {
    text: 'Completed',
    id: 'completed'
  }
];

export const TodoFilter = ({activeFilter, changeFilter}) => {
  return (
    <div className='filter-btn-wrap'>
      {filter_btn.map(({text, id}) => {
        const classname = 'btn filter-btn '+  (activeFilter === id ? 'btn-primary' : 'btn-outline-primary');
       return (
           <button
               key={id}
               className={classname}
               onClick={() => changeFilter(id)}
           >
             {text}
           </button>
       )
      })}
    </div>
  )
};