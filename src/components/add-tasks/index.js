import React, {Component} from "react";

import './add-task.css'

export class AddTask extends Component {

  state = {
    value: ''
  };

  addItem() {
    const value = this.state.value;
    const {addTask} = this.props;
    if (value.length > 3) {
      this.setState({value: ''});
      addTask(new Date().getTime(), value, false);
    }

  }

  handleChange = ({target}) => {
    this.setState({value: target.value})
  };

  handleAdd = () => {
    this.addItem()
    this.setState({value: ''})
  };

  render() {
    return (
        <div className='add-task'>
          <input
              type="text"
              placeholder='New task'
              className='form-control task-input'
              value={this.state.value}
              onChange={this.handleChange}
          />
          <button
              className='btn btn-primary add-task-btn'
              onClick={this.handleAdd}
          >
            Add task
          </button>
        </div>
    )
  }

};