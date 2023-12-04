import React from 'react'
import './style.css';

function listitem(props) {
  return (
    <div className={props.obj.completed && 
    "Completed"}>
        <p> {props.obj.name}</p>
        <button onClick={() =>props.onDone 
          (props.obj)}>Mark as done</button>
        <button onClick={() => props.onDelete
          (props.obj)}> Delete</button>
    </div> 
  )
}

export default listitem