/*Libraries*/
import React, {Fragment, Component} from "react";
import {connect} from "react-redux";
import {addTask, taskDone, deleteTask} from "../../reducers/todos/actions";

/*Components*/
import {Header} from "../../components/header";
import {AddTask} from "../../components/add-tasks";
import {TodoList} from "../../components/todo-list";

class TodoContainer extends Component{
       render() {
            const {tasks, addTask, taskDone, deleteTask} = this.props;
            const doneCount  = tasks.length -  tasks.filter(item => !item.completed).length;
            return (
            <Fragment>
              <Header tasksCount={tasks.length} done={doneCount}/>
              <AddTask addTask={addTask}/>
                <TodoList
                    items={tasks}
                    taskDone={taskDone}
                    deleteTask={deleteTask}
                />
            </Fragment>
        );
    }
}

export default connect(
    ({tasks}) => ({tasks}),
    {addTask, taskDone, deleteTask}
    )(TodoContainer)


