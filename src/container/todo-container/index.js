/*Libraries*/
import React, {Fragment, Component} from "react";
import {connect} from "react-redux";

/*ActionCreators*/
import {addTask, taskDone, deleteTask, clearCompleted, clearAll} from "../../reducers/todos/actions";

/*Components*/
import {Header} from "../../components/header";
import {AddTask} from "../../components/add-tasks";
import {TodoList} from "../../components/todo-list";
import {MassAction} from "../../components/ mass-action";

class TodoContainer extends Component{
       render() {
            const {tasks, addTask, taskDone, deleteTask, clearCompleted, clearAll} = this.props;
            const doneCount  = tasks.length -  tasks.filter(item => !item.completed).length;
            return (
            <Fragment>
              <Header tasksCount={tasks.length} done={doneCount}/>
              <AddTask addTask={addTask}/>
              <MassAction clearCompleted={clearCompleted} clearAll={clearAll}/>
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
    {addTask, taskDone, deleteTask, clearCompleted, clearAll}
    )(TodoContainer)


