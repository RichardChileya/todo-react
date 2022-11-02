import React from "react";
import TodosList from './TodosList'
import Header from "./Header";
class TodoCOntainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "first todo",
        completed: false
      },
      {
        id: 2,
        title: "second todo",
        completed: false
      },
      {
        id: 3,
        title: "third todo",
        completed: false
      }
    ],
  };

  handleChange = (id) => {
     this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
     });
   
  };
  render() {
    return (
      <div  id="todo-container">
      <Header />
      <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} />
  </div>
    );
  }
  
}

export default TodoCOntainer;