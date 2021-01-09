
// import React, { useState } from 'react'
// import AddTodo from './AddTodo'
// import './App.css'
// import TodoItem from './TodoItem'

// export default function App () {

//     const [main, setmain] = useState({
//         todos: [

//         ],
//         status: '',
//         arr: [],
//     })

//     const filterHandler = (e) => {
//         setmain({
//             status: e.target.value
//         })
//         switch (e.target.value) {
//             case 'active':
//                 setmain({ arr: main.todos.filter((item) => item.completed === false) });
//                 break;
//             case 'completed':
//                 setmain({ arr: main.todos.filter((item) => item.completed === true) });
//                 break;
//             case 'all':
//                 setmain({ arr: main.todos });
//                 break;
//         }
//     }

//     const toggleComplete = (index) => {
//         const newTodos = main.todos.map((todo, i) => {
//             if (index === i) {
//                 return {
//                     ...todo,
//                     completed: !todo.completed
//                 }
//             }
//             return todo;
//         })

//         setmain({
//             todos: newTodos
//         })
//     }

//     const addTodoToState = (data) => {
//         const newTodos = main.todos.concat({
//             text: data.todotext,
//             completed: data.completed,
//         });
//         setmain({

//             todos: newTodos
//         })
//     }

//     const deleteTodo = (index) => {
//         const newTodos = main.todos.filter((todo, i) => {
//             return index !== i;
//         })
//         setmain({
//             todos: newTodos
//         })
//     }

//     const editTodo = (index, newText) => {
//         const newTodos = main.todos.map((todo, i) => {
//             if (index === i) {
//                 return {
//                     ...todo,
//                     text: newText
//                 }
//             }
//             return todo
//         })
//         setmain({
//             todos: newTodos
//         })
//     }

//     const allDelete = () => {
//         setmain({
//             todos: main.todos.filter(todo => !todo.completed)
//         })
//     }

//     return (
//         <div className='App'>
//             <AddTodo addTodoToState={addTodoToState} filterHandler={filterHandler} />
//             {main.todos && main.todos.length === 0 && <p class="text-danger">Data Not Found</p>}
//             {main.arr && main.arr.length > 0 ? main.arr.map((todo, index) => {
//                 return <TodoItem editTodo={editTodo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} todo={todo} index={index} key={index} />
//             })
//                 : main.todos.map((todo, index) => {
//                     return <TodoItem editTodo={editTodo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} todo={todo} index={index} key={index} />
//                 })
//             }
//             {/* <span> {main.todos.filter((item) => item.completed === false).length}  Item Left</span><br /> */}
//             <button onClick={allDelete} class="btn btn-link" >Remove All</button>
//         </div>
//     )
// }

import React, { Component } from 'react'
import AddTodo from './AddTodo'
import './App.css'
import TodoItem from './TodoItem'

export default class App extends Component {
    state = {
        todos: [

        ],
        status: '',
        arr: [],
    }

    filterHandler = (e) => {
        // console.log(todos.completed);
        this.setState({
            status: e.target.value
        })
        // switch (this.state.status) {
        switch (e.target.value) {
            case 'active':
                this.setState({ arr: this.state.todos.filter((item) => item.completed === false) });
                break;
            case 'completed':
                this.setState({ arr: this.state.todos.filter((item) => item.completed === true) });
                break;
            case 'all':
                this.setState({ arr: this.state.todos });
                break;
        }
    }

    toggleComplete = (index) => {
        const newTodos = this.state.todos.map((todo, i) => {
            if (index === i) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        })

        this.setState({
            todos: newTodos
        })
    }

    addTodoToState = (data) => {
        const newTodos = this.state.todos.concat({
            text: data.todotext,
            completed: data.completed,
        });
        this.setState({

            todos: newTodos
        })
    }

    deleteTodo = (index) => {
        const newTodos = this.state.todos.filter((todo, i) => {
            //   if(index === i) {
            //       return false;
            //   }
            //   return true;
            return index !== i;
        })
        this.setState({
            todos: newTodos
        })
    }

    editTodo = (index, newText) => {
        const newTodos = this.state.todos.map((todo, i) => {
            if (index === i) {
                return {
                    ...todo,
                    text: newText
                }
            }
            return todo
        })
        this.setState({
            todos: newTodos
        })
    }

    allDelete = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.completed)
        })
    }

    render() {
        return (
            <div>
                <AddTodo addTodoToState={this.addTodoToState} deleteAll={this.deleteAll} statusHandler={this.statusHandler} filterHandler={this.filterHandler} />
                {this.state.todos.length === 0 && <p class="text-danger">Data Not Found</p>}
                {this.state.arr.length > 0 ? this.state.arr.map((todo, index) => {
                    return <TodoItem editTodo={this.editTodo} deleteTodo={this.deleteTodo} toggleComplete={this.toggleComplete} todo={todo} index={index} key={index} />
                })
                    : this.state.todos.map((todo, index) => {
                        return <TodoItem editTodo={this.editTodo} deleteTodo={this.deleteTodo} toggleComplete={this.toggleComplete} todo={todo} index={index} key={index} />
                    })
                }
                <span> {this.state.todos.filter((item) => item.completed === false).length}  Item Left</span><br />
                <button onClick={this.allDelete} className="btn btn-link" >Remove All</button>
            </div>
        )
    }
}

//End

// To Do List
// import React, { useState } from 'react'
// import ToDoList from './ToDoList'

// const App = () => {

//     const [inputList, setInputList] = useState('');
//     const [Items, setItems] = useState([]);

//    const itemEvent = (e) => {
//       setInputList(e.target.value);
//     };


//     const listofItem = () => {
//         if (inputList === "") return alert("Something Write in Input Box......");
//         else{
//       setItems((oldItems) => {
//           return [...oldItems, inputList];
//       })
//       setInputList('');
//     };
// }

//     const deleteItems = (id) => {
//       console.log('Delete Item');
//       setItems((oldItems) => {
//           return oldItems.filter((item, index) => {
//               return index !== id;
//           })
//       })
//     };
//     return (
//     <>
//     <div>
//         <br />
//         <h1>To Do List</h1>
//         <br />
//         <input type='text' placeholder='Add a Items' value={inputList} onChange={itemEvent}/>
//         <button onClick={listofItem} id='addBtn'>Add</button>

//         <ul>
//             {
//                 Items.map((item, index) => {
//                     return <ToDoList key={index} id={index} text={item} onSelect={deleteItems}/>
//                 })
//             }
//         </ul>
//     </div>
//     </>
//     );

// };

// export default App;
//End


// Photo Error Handling
// import React, { Component } from 'react'
// import gym1 from './gym1.jpg'
// import gym2 from './gym2.jpg'
// import Image from './Image'
// import Error from './Error'

// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 {/* <image src={gym1} /> */}
//                 <Error>
//                 <Image show={gym1}/><br /><br />
//                 </Error>
//                 <Error>
//                 <Image show={gym2}/><br />
//                 </Error>
//                 <Error>
//                 <Image show='NoImage'/>
//                 </Error>
//             </div>
//         )
//     }
// }
//End

// HOC
// import React, { Component } from 'react'
// import Piyush from './Piyush'
// import Crush from './Crush'

// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Piyush camp='140'/>
//                 <Crush camp='120'/>
//             </div>
//         )
//     }
// }
//End

// Context API
// import React, { Component } from 'react'
// import User from './User'


// export const MyContext = React.createContext();


// export default class App extends Component {
//     state = {
//         name : 'Piyush',
//         value : 10
//     };
//     showClickContext = () => {
//         this.setState({value : this.state.value + 1});
//     };

//     render() {
//         const contextValue  = {
//             data: this.state,
//             showClick: this.showClickContext
//         };
//         return (
//             <MyContext.Provider value={contextValue}>
//                 <User />
//             </MyContext.Provider>
//         );
//     }
// }
// End

// Lifting State
// import React, { Component } from 'react'
// import User from './User'
// import Guest from './Guest'

// export default class App extends Component {
//     state = {
//       name : 'Piyush',
//       value : 10,
//     }
//     render() {
//         return (
//             <div>
//                 <User name={this.state.name}/>
//                 <Guest value={this.state.value}/>

//             </div>
//         )
//     }
// }
//End

// Ref Method
// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor() {
//         super();

//        this.state = {
//             value : ''
//         }

//         this.textInput = null;

//         textUpdate = element => {
//             this.textInput = element;
//         };
//     }
//     componentDidMount = () => {
//         // console.log(this.textInput.current);
//         this.textInput.current.focus();
//     }

//     showSubmit = (e) => {
//         e.preventDefault();
//         // console.log(this.textInput.current.value);

//         this.setState({value : this.textInput.current.value.toUpperCase()})
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <h2>Type Text: {this.state.value}</h2>
//                 <form onSubmit={this.showSubmit}>
//                   Input :  <input type='text' ref={this.textUpdate} /> <input type='submit' value='submit' />
//                 </form>
//             </React.Fragment>
//         )
//     }
// }
//End

// Handling Form
// import React, { Component } from 'react'

// export default class App extends Component {
//     state = {
//         name : '',
//         password : '',
//     }

//     showSubmit = (e) => {
//         console.log(e);
//         e.preventDefault();
//     }

//     show = (e) => {
//         this.setState({[e.target.name] : e.target.value})
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.showSubmit}>
//                     <label>
//                         Name : <input type='text' name='name' value={this.state.name} onChange={this.show}/>
//                     </label>
//                     <br /> <br />
//                     <label>
//                         Password : <input type='text' name='password' value={this.state.password} onChange={this.show}/>
//                     </label>
//                     <br /> <br />
//                     <input type='submit' value='submit'/>
//                 </form>
//             </div>
//         )
//     }
// }
//End


// Input And Text Area
// import React, { Component } from 'react'

// export default class App extends Component {
//     state = {
//         value : 'this is my first file in react language so this file is bacis deatail in profile', 
//     }
//     show = (e) => {
//         this.setState({value: e.target.value.toUpperCase().substr(0,20)})
//     }

//     render() {
//         return (
//             <div>
//                 <form>
//                     <h1>React Component Input</h1>
//                     {/* <input type='text' value={this.state.value} onChange={this.show}/> */}
//                     <textarea type='text' value={this.state.value} onChange={this.show}/>
//                 </form>
//             </div>
//         )
//     }
// }
//End


// CSS
// import React, { Component } from 'react'

// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <button className='btn btn-success'>Info</button>
//             </div>
//         )
//     }
// }
//End


// Images
// import React, { Component } from 'react'
// import pic from './image/gym1.jpg'

// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <img src={pic} />
//             </div>
//         )
//     }
// }
//End

// External Style
// import React, { Component } from 'react'
// import x from './App.module.css'
// import User from './User'

// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1 className={x.styleColor}>Helo App Word</h1>
//                 <User />
//             </div>
//         )
//     }
// }
// //End



// Inline Style 
// import React, { Component } from 'react'

// export default class App extends Component {
//     state = {
//         change : false,
//     }
//      show = () => {
//         this.setState({change:true})
//     }
//     render() {
//         const btnStyle = {
//             color: 'blue',
//             backgroundColor: 'orange',
//         }
//         // const z = {
//         //     color: 'blue',
//         // }
//         // const x = {
//         //     backgroundColor: 'orange',
//         // }
//         if(this.state.change){
//             btnStyle.backgroundColor = 'white'
//         }
//         return (
//             <div>
//                 <button onClick={this.show} style={btnStyle}>Button</button>
//             </div>
//         )
//     }
// }
// End

// If Else Statement
// import React, { Component } from 'react'
// import User from './User'
// import Guest from './Guest' 

// export default class App extends Component {
//    state = {
//        isLoggedIn : false,
//    };

//    clickLogin = () => { 
//        this.setState({isLoggedIn : true});
//    }
//    clickOut = () => { 
//        this.setState({isLoggedIn : false});
//    }


//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         if(isLoggedIn){
//             return <User clickData={this.clickOut}/>
//         }else{
//             return <Guest clickData={this.clickLogin}/>
//         }
//     }
// }
//End

// If Statement
// import React, { Component } from 'react'
// import User from './User'
// import Guest from './Guest'

// export default class App extends Component{
//     render(){
//         const isRegistered = this.props.prime;
//         return (
//             <div>
//                 <h1>Welcome User</h1>
//                 {isRegistered && <User />}
//             </div>
//         )
//         // if(isRegistered){
//         //     return <User />

//         // }
//         // return <Guest />
//     }
// }
//End

// Custom Hooks
// import React from 'react'
// import useCostum from './Custom'

// function App(){
//     const data = useCostum();
//     const data1 = useCostum();

//     return (
//         <div>
//             <h1>Count Up: {data.count}</h1>
//             <button type='button' onClick={data.show}>Increment</button>
//             <h1>Count Up: {data1.count}</h1>
//             <button type='button' onClick={data1.show}>Increment</button>
//         </div>
//     )
// }

// export default App;

//End
//Use Effect
// import React, { useEffect, useState } from 'react'

// function App(){
//     const [count, setCount] = useState(0);
//     const [count1, setCount1] = useState(50);

//     const high = () => {
//         setCount(count + 1);
//     }


//     const low = () => {
//         setCount1(count1 - 1);
//     }

//     useEffect(() => {
//         console.log('useEffect');
//     },[count1,count])

//     return(
//     <div>
//         <h1>Count Up: {count}</h1>
//         <button type='button' onClick={high}>Increment</button>
//         <h1>Count Down: {count1}</h1>
//         <button type='button' onClick={low}>Decrement</button>
//     </div>
//     )

// }
// export default App;
//End
//UseState
// import React, { useState } from 'react';

// function App(){
//     const [name, setname] = useState('Piyush')

//    const show = () => {
//         setname('Raj');
//     }

//     return <div>
//          <h1>{name}</h1>
//          <button type='button' onClick={show}>Change</button>
//     </div>
// }

// export default App;
//End
// import React, { Component } from 'react'

// export default class App extends Component {
//     componentDidMount(){
//         console.log('App componentDidMount');
//     }
//     componentWillUnmount(){
//         console.log('App componentWillUnmount');
//     }
//     render() {
//         console.log('-----------');
//         return (
//             <div>
//                 <h1>Hello App Component</h1>
//             </div>
//         )
//     }
// }

// import React, { Component } from 'react'
// import Student from './Student'
// import Mark from './Mark'


// export default class App extends Component {
//     constructor(props){
//         super(props);
//         console.log('constructor Called');
//         console.log(props);
//         this.state = {
//             roll : '101'
//         }
//     }

//     static getDerivedStateFromProps(props, state){
//         console.log('get Derived State From Props');
//         console.log(props, state);
//         return null;

//     }

//     componentDidMount(){
//         console.log('component Did Mount');
//     }


//     render() {
//         console.log('Render Called');
//         return (
//             <div>
//                 <Student name='Piyush'/>
//                 <Mark />
//             </div>
//         )
//     }
// }


// import React, {Component} from "react";

// class App extends Component{
//     render() {
//       return  React.createElement("h1", null, "Hello Piyush ok");
//     }
// }

// export default App;

// import React, {Component} from "react";

// class App extends Component{
//     render(){        
//         return <>
//             <h1>Hello Piyush</h1>
//         <h2>How Are You</h2>
//             </>
//     }
// }

// export default App;

// import React from "react";
// import Student from "./Student";

// const App = () => {
//     return <div>
//         <Student name="Piyush"/>
//         <Student name="Mohil"/>
//         <Student name="Manish"/>
//     </div>
// }

// export default App;

// import React from "react";
// import "./App.css"

// function show(name){
//     return name
// }

// let user = {
//     firstname: "Raj"
// }

// const el = <h1 className="bg">Hello Piyush</h1>;

// export default el;