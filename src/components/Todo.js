import React from "react";
import "./Todo.css"

const Todo = (props) => {
    const handleClick = ()=>{
        props.completed(props.todo.id);
      }
    return(<li onClick={handleClick} className={`todo${props.todo.completed ? ' completed' : ''}`}>{props.todo.task}</li>)
}
export default Todo;