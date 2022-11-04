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
      ,
      {
        id: 4,
        title: "4th todo",
        completed: false
      }
    ],
  };

  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
  };

  // Todo method 
  delTodo = id => {
    console.log("deleted", id)
  }
  render() {
    return (
      <div id="todo-container">
        <Header />
        <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} />
      </div>
    );
  }

}

export default TodoCOntainer;