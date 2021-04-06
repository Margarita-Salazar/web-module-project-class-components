import React from "react";
import todos from "./data/todoData";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './../src/components/Todo.css'

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
      todos: [...this.state.todos, {
        task: task,
        id: this.state.todos.length,
        completed: false
      }]
    })
  }
  completed = (id) => {
    const updatTodos = this.state.todos.map(item => {
      if (item.id === id) {
        return( {
          ...item,
          completed: !item.completed
        });
      } else {
        return item
      }
    });

    this.setState({
      todos: updatTodos
    });
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} completed={this.completed}/>
        <TodoForm addTodo={this.addTodo}/>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default App;
