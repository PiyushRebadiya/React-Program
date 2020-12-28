//List
// import React, { Component } from 'react'

// export default class List extends Component {
//     state = {
//       users :  [
//         { id:1, name:'Piyush', password:87948},
//         { id:2, name:'Raj', password:98445},
//         { id:3, name:'Mohil', password:79496},
//     ],
// }
//     render() {
//         const Arr = this.state.users.map((item,i) => {
//             console.log(item);
//             return ( <h1 key={i}>ID : {item.id} Name : {item.name} Password : {item.password}</h1>)
//         })
        
//         return (
//             <div>
//                 {Arr}
//             </div>
//         )
//     }
// }
//End

// import React, { Component } from 'react'

// export default class List extends Component {
//     render() {
//         const Arr = [10,20,30,40];

//         const newArr = Arr.map((item) => {
//             console.log(item);
//             return <li name='Piyush'>{item * 2}</li>;
//         })
//         console.log('oldArr', Arr);
//         console.log('newArr', newArr);
//         return (
//             <ul>
//                {
//                    newArr
//                    /* <li>{Arr[0] * 2}</li>
//                    <li>{Arr[1] * 2}</li>
//                    <li>{Arr[2] * 2}</li>
//                 <li>{Arr[3] * 2}</li> */}
//             </ul>
//         )   }
//     }
    //End
