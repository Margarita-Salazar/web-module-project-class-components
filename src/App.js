import React from "react";
import todos from "./data/todoData";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: todos,
    }
  }
  
  addTodo = (task) => {
    this.setState({
      todos: [...todos, {
        task: task,
        id: new Date(),
        completed: false
      }]
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm addTodo={this.addTodo}/>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default App;
