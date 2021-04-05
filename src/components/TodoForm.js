import React, { useState } from "react";

const TodoForm = (props) => {
    const [ todo, setTodo ] = useState();

    const handleChange = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value})
      }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo(todo.task)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="task"
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>)
}
export default TodoForm;