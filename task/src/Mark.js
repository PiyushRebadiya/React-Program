//Updating
// import React, { Component } from 'react'

// export default class Mark extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              mroll : this.props.roll,
//         }
//     }

//     static getDerivedStateFromProps(props, state){
//         console.log('get Derived State From Props');
//         console.log(props, state);
//         if(props.roll !== state.roll){
//             return {mroll : props.roll}
//         }
//         return null;
//     }

//     shouldComponentUpdate(nextProps, nextState){
//         if(this.state.mroll < 109){
//             console.log('Mark - shouldComponentUpdate');
//             console.log(nextProps, nextState);
//             return true;
//         }
//         console.log(nextProps, nextState);
//         return false;

//     }

//     getSnapshotBeforeUpdate(prevProps, prevState){
//         console.log('Mark - getSnapshotBeforeUpdate');
//         console.log(prevProps, prevState);
//         return 45;
//     }

//     componentDidUpdate(prevProps, prevState, snapShot){
//         console.log('Mark - componentDidUpdate');
//         console.log(prevProps, prevState, snapShot);
//     }

    
//     render() {
//         console.log('Marks Rendered');
//         return (
//             <div>
//                 <h1>{this.state.mroll}</h1>
//             </div>
//         )
//     }
// }
//End
// import React, { Component } from 'react'

// export default class Mark extends Component {
//     render() {
//         console.log('Mark Render');
//         return (
//             <div>
//                 <h1>Mark</h1>
//             </div>
//         )
//     }
// }
