import React, { Component } from 'react'

export default class TodoItem extends Component {
    
    state = {
        isEditing : false
    }

    toggleEditing = () => {
        this.setState({
            isEditing : !this.state.isEditing
        })
    }

    clickHandler = () => {
        this.props.toggleComplete(this.props.index)
    }

    delete = () => {
        this.props.deleteTodo(this.props.index)
    }

    editTodoSubmit = (e) => {
       e.preventDefault();
       this.props.editTodo(this.props.index, this.newText.value)
       this.toggleEditing();
    }

    render() {
        const { todo } = this.props;
        if(this.state.isEditing) {
            return (
                <li>
                    <form onSubmit={this.editTodoSubmit}>
                        <input type='text' defaultValue={todo.text} ref={node => {this.newText = node}}/>
                        <button type='submit'>save</button>
                        <button onClick={this.toggleEditing}>Cancel</button>
                    </form>
                </li>
            )
        }
        return (
            <div>
                 <li  className={todo.completed ? 'completed' : ''} ><span onClick={this.clickHandler}>{todo.text}</span></li>
                 <span>
                     <button onClick={this.delete}>Delete</button>
                     <button onClick={this.toggleEditing}>Edit</button>
                 </span>
            </div>
        )
    }
}
