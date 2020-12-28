import React from 'react'

const ToDoList = (props) => {

 
    // const deleteItems = () => {
    //     console.log('Deleted');
    // }
    const updateList = (e) => {
        console.log('Edit');

    }
    return (
        <>
         <div>
          <li> {props.text}   <button onClick={() => {props.onSelect(props.id)}} >Delete</button> <button onClick={updateList}>Update</button></li>
                  
         </div>
        </>
    )
}

export default ToDoList;