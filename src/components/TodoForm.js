import React from "react";

class TodoForm extends React.Component{
    constructor(){
        super()
        this.state = {
            input: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
      }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.input)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="input"
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>)
    }
}
export default TodoForm;