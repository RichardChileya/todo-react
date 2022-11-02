import React from "react";
class TodoItem extends React.Component {
  render() {
    return (
      <li id="item-list">
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        /> null
        {this.props.todo.title}
      </li>
    );
  }

}

export default TodoItem;