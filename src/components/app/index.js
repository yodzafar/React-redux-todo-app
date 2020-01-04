/*Libraries*/
import React, {Component} from 'react'

/*Styles*/
import './app.css'

/*Containers*/
import TodoContainer from "../../container/todo-container";

export class App extends Component {
    render() {
        return (
            <div className="app">
                <TodoContainer/>
            </div>
        )
    }
}
