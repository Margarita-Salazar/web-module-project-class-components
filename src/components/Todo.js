import React from "react";
import "./Todo.css"

const Todo = (props) => {
    const handleClick = ()=>{
        props.completed(props.todo.id);
      }
    return(<h3 onClick={handleClick} className={`todo${props.todo.completed ? ' completed' : ''}`}>{props.todo.task}</h3>)
}
export default Todo;