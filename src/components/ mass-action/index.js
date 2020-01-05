import React from "react";

import './mass-action.css'

export class MassAction extends React.Component{

  render() {
    const {clearCompleted, clearAll} = this.props;
    return (
      <div className='mass-action'>
        <button className='btn btn-warning clear-complete' onClick={() => clearCompleted('hello')}>Clear completed</button>
        <button className='btn btn-danger clear-all' onClick={clearAll}>Clear all</button>
      </div>
    )
  }

};