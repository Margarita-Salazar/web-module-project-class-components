import React from "react";

const Todo = (props) => {
    
    return(<h3 onClick={()=>console.log("here")}>{props.todo.task}</h3>)
}
export default Todo;