/*Libraries*/
import React, {Fragment, Component} from "react";
import {connect} from "react-redux";

/*ActionCreators*/
import {addTask, taskDone, deleteTask, clearCompleted, clearAll} from "../../reducers/todos/actions";
import {changeFilter} from "../../reducers/filters/actions";

/*Components*/
import {Header} from "../../components/header";
import {AddTask} from "../../components/add-tasks";
import {TodoList} from "../../components/todo-list";
import {MassAction} from "../../components/ mass-action";
import {TodoFilter} from "../../components/todo-filter";

class TodoContainer extends Component {

  state = {
    taskText: ''
  };

  onChange = ({target}) => {
    this.setState({taskText: target.value})
  };

  onHandleAdd = () => {
    const value = this.state.taskText;
    const {addTask} = this.props;
    if (value.length > 3) {
      this.setState({taskText: ''});
      addTask(new Date().getTime(), value, false);
      this.setState({taskText: ''})
    }
  };

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'active':
        return [...tasks].filter(task => !task.completed);
      case 'completed':
        return [...tasks].filter(task => task.completed);
      default:
        return tasks

    }
  };

  getActiveTasksCounter = tasks => tasks.filter(task => !task.completed).length;

  render() {
    const {taskText} = this.state;
    const {tasks, taskDone, deleteTask, clearCompleted, clearAll, filters, changeFilter} = this.props;
    const doneCount = tasks.length - tasks.filter(item => !item.completed).length;
    const tasksCount = this.getActiveTasksCounter(tasks);
    const filteredTask = this.filterTasks(tasks, filters)
    return (
        <Fragment>
          <Header tasksCount={tasksCount} done={doneCount}/>
          <AddTask  addTask={this.onHandleAdd} onChange={this.onChange} value={taskText}/>
          <div className='todo-actions'>
            <TodoFilter activeFilter={filters} changeFilter={changeFilter}/>
            <MassAction clearCompleted={clearCompleted} clearAll={clearAll}/>
          </div>
          <TodoList
              items={filteredTask}
              taskDone={taskDone}
              deleteTask={deleteTask}
          />
        </Fragment>
    );
  }
};

export default connect(({tasks, filters}) => ({
      tasks,
      filters
    }), {addTask, taskDone, deleteTask, clearCompleted, clearAll, changeFilter}
)(TodoContainer)


