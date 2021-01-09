// import React, { useState } from 'react'

// export default function TodoItem(props) {

//     const [todoitem, settodoitem] = useState({
//         isEditing: false
//     })

//     const toggleEditing = () => {
//         settodoitem({
//             isEditing: !todoitem.isEditing
//         })
//     }

//     const clickHandler = () => {
//         props.toggleComplete(props.index)
//     }

//     const dellAll = () => {
//         props.deleteTodo(props.index)
//     }
//     const editTodoSubmit = (e) => {
//         e.preventDefault();
//         console.log("this.newText.value", this.newText);
//         props.editTodo(props.index, this.newText.value)
//         toggleEditing();
//     }
//     const { todo } = props;
//     if (todoitem.isEditing) {
//         return (
//             <li>
//                 <form onSubmit={editTodoSubmit}>
//                     <input type='text' defaultValue={todo.text} ref={node => { this.newText = node }} />
//                     <button type='submit' class="btn btn-primary">Save</button>
//                     <button onClick={toggleEditing} class="btn btn-danger">Cancel</button>
//                 </form>
//             </li>
//         )
//     }
//     return (
//         <div>
//             <li className={todo.completed ? 'completed' : ''} 
//             ><span onClick={clickHandler}>{todo.text}</span></li>
//             <span>
//                 <button onClick={dellAll} class="btn btn-danger">Delete</button>
//                 <button onClick={toggleEditing} class="btn btn-warning" >Edit</button>
//             </span>
//         </div>
//     )
// }



import React, { Component } from 'react'

export default class TodoItem extends Component {
    state = {
        isEditing: false
    }

    toggleEditing = () => {
        this.setState({
            isEditing: !this.state.isEditing
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
        if (this.state.isEditing) {
            return (
                <li>
                    <form onSubmit={this.editTodoSubmit}>
                        <input type='text' defaultValue={todo.text} ref={node => { this.newText = node }} />
                        <button type='submit' className="btn btn-primary">Save</button>
                        <button onClick={this.toggleEditing} className="btn btn-danger">Cancel</button>
                    </form>
                </li>
            )
        }
        return (
            <div>
                <li className={todo.completed ? 'completed' : ''} ><span onClick={this.clickHandler}>{todo.text}</span></li>
                <span>
                    <button onClick={this.delete} class="btn btn-danger">Delete</button>
                    <button onClick={this.toggleEditing} class="btn btn-warning" >Edit</button>
                </span>
            </div>
        )
    }
}
