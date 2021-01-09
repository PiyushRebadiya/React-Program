// import React, { useState } from 'react'

// export default function AddTodo (props) {

//     const [addtodo, setaddtodo] = useState({
//         todotext: '',
//         completed: false,
//     })

//   const  submitHandler = (e) => {
//         e.preventDefault();
//         if (addtodo.todotext === "") return alert("Something Write in Input Box......");
//         props.addTodoToState(addtodo);
//       setaddtodo({
//             todotext: ''
//         })
//     }

//     const changeTodoText = (e) => {
//       setaddtodo({
//             todotext: e.target.value
//         })
//     }

//     const statusClick = (e) => {
//         props.filterHandler(e)
//     }

//     return (
//         <div>
//             <form onSubmit={submitHandler}>
//                 <input type='text' onChange={changeTodoText} value={addtodo.todotext} placeholder='Add Text....' />
//                 <button type='submit' class="btn btn-success" >Add Todo</button>
//                 <select onChange={statusClick} >
//                     <option value='all'>All</option>
//                     <option value='active'>Active</option>
//                     <option value='completed'>Completed</option>
//                 </select>
//             </form>
//         </div>
//     )
// }


import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        todotext: '',
        // status : ''
        completed: false,
    }

    submitHandler = (e) => {
        e.preventDefault();
        if (this.state.todotext === "") return alert("Something Write in Input Box......");
        this.props.addTodoToState(this.state);
        this.setState({
            todotext: ''
        })
    }

    changeTodoText = (e) => {
        this.setState({
            todotext: e.target.value
        })
    }

    statusClick = (e) => {
        // e.preventDefault();
        this.props.filterHandler(e)
    }
    // statusClick = (e) => {
    //     // e.preventDefault();
    //     this.props.statusHandler(e)
    // }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' onChange={this.changeTodoText} value={this.state.todotext} placeholder='Add Text....' />
                    <button type='submit' className="btn btn-success" >Add Todo</button>
                    <select onChange={this.statusClick} >
                        <option value='all'>All</option>
                        <option value='active'>Active</option>
                        <option value='completed'>Completed</option>
                    </select>
                </form>
            </div>
        )
    }
}
