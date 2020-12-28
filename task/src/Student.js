//Updating
// import React, { Component } from 'react'
// import Mark from './Mark'

// export default class Student extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              roll : 101,
//         }
//     }
//     show = () => {
//         console.log('Click Change');
//         this.setState({roll : this.state.roll + 2});
//     }
//     render() {
//         return (
//             <div>
//                 <Mark roll={this.state.roll}/>
//                 <button onClick={this.show}>Change</button>
//             </div>
//         )
//     }
// }

//End
// import React, { Component } from 'react'

// export default class Student extends Component {
//     componentDidMount(){
//         console.log('Student componentDidMount');
//     }
//     render() {
//         console.log('+++++++');
//         return (
//             <div>
//                 <h1>Hello Student Component</h1>
//             </div>
//         )
//     }
// }


// import React, { Component } from 'react'

// export default class Student extends Component {
//     render() {
//         console.log('Student Render');
//         return (
//             <div>
//                 <h1>Hello {this.props.name}</h1>
//             </div>
//         )
//     }
// }


// import React, { Component } from 'react'

// class Student extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             id : 1,
//             name : "Raj",
//             roll : this.props.roll,
//         };
//     }
//     show = (id, e) => {
//         console.log(id);
//         console.log(e);
        
//     }

    // handle = (e) => {
    //     this.show(this.state.id, e);

    // }
//     render(){
//         return(
//             <div>
//                 <h1>Hello Piyush</h1>,
//                 <h1>Hello {this.state.name} Your roll number is {this.state.roll}</h1>
//                 <button onClick={this.show.bind(this, this.state.id)}>Delete</button>
//             </div>
//         )
//     }
// }

// export default Student;
// import { render } from 'react-dom';

// function Student(props){
//     function show(e){
//         e.preventDefault();
//         console.log('Click Btn');
//     }
//     return(
//         <div>
//             <h1>Hello {props.name}</h1>,
//             <a href='http://www.google.com' onClick={show}>Click Me</a>
//         </div>

//     )
// }
// export default Student;

// import React, { Component } from 'react'

// class Student extends Component{
//     constructor(props){
//         super(props);
//         this.handclick = this.handclick.bind(this);
//         this.state = {
//             name : 'Piyush',
//             roll : this.props.roll,
//         }
//     }
//     handclick (){
//         console.log('Click Btn', this);
//     }
//     render(){
//         return (
//             <div>
//                 <h1>Hello {this.state.name} Are U {this.state.roll}?</h1>,
//                 <button onClick={this.handclick}>Click Me</button>
//             </div>

//         );
//     }
// }
// export default Student;

// import React, { Component } from 'react';

// class Student extends Component{
//    constructor(props){
//        super(props);
//        this.state = {
//         name : 'Piyush',
//         roll : this.props.roll,
//     };
//    }
//     render() {
//         return <h1>Helo {this.state.name} Your Roll Number Is {this.state.roll}</h1>
//     }
// }
// export default Student;
// const Student = props => {
//     return <h1>Hello Rahul {props.children}</h1>
// }

// class Student extends Component{
//     render(){
//         return <h1>Hello Rahul {this.props.children}</h1>
//     }
// }

// export default Student;

// import React, { Component } from "react";
// import Pt from "prop-types";


// class Student extends Component{
//     render(){
//         return (
//             <div>
//             <h1>Hello {this.props.name}</h1>
//             <h2>Roll No: {this.props.roll}</h2>
//             </div>
//         );
        
//     }
// }
// export default Student;

// Student.propTypes = {
//     name : Pt.string.isRequired

// }
// Student.defaultProps = {
//     roll : "234"
// }

// import React from "react";

// const Student = (props) => {
//     return <h1>Hello {props.name}</h1>;
// }



// export default Student;


// const Student = props => {
//     return(
//         <div>
//         <h1>Hello {props.name}</h1>
//         <h2>Roll No: {props.roll}</h2>
//         </div>
//     );
// };

