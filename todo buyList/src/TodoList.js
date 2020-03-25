import React, { Component } from 'react'
import Todo from './Todo.js';
import NewTodoForm from './NewTodoForm.js'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = { 
            todos: []}
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleComlition = this.toggleComlition.bind(this);
    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(i => i.id !== id)
        })
    }
    update(id,updatedTask) {
        const updatedTodos = this.state.todos.map(el => {
            if(el.id === id) {
                return {...el, task: updatedTask}
            }
        })
        this.setState({todos: updatedTodos})
    }
    toggleComlition(id) {
        const updatedTodos = this.state.todos.map(el => {
            if(el.id === id) {
                return {...el, completed: !el.completed}
            }
        })
        this.setState({todos: updatedTodos})
    }
    render() {
        const todos = this.state.todos.map(i => {
           return <Todo key={i.id} id={i.id} task={i.task} removeTodo={this.remove} updateTodo={this.update} completed={i.completed} toggleTodo={this.toggleComlition}/>    
        })
        return(
            <div>
                <h1>Todo List!</h1>
                <NewTodoForm createTodo={this.create} />
                <ul>{todos}</ul>
            </div>
        )
    }
}

export default TodoList; 