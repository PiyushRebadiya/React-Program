import React, { Component } from 'react'

export default class AddTodo extends Component {
    
    
    state = {
        todotext : '',
        // status : ''
        completed:false,

    }

    submitHandler = (e) => {
      e.preventDefault();

      if (this.state.todotext === "") return alert("Something Write in Input Box......");


      this.props.addTodoToState(this.state);

      this.setState({
          todotext : ''
      })
    }

    changeTodoText = (e) => {
        this.setState({
            todotext : e.target.value
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
//  count = 0;


    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text'  onChange={this.changeTodoText} value={this.state.todotext} placeholder='Add Text....'/>
                    <button type='submit'>Add Todo</button>  
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
