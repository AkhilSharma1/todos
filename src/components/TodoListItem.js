import React, { Component } from "react";

// export const TodoListItem = ({ todo, removeTodo, toggleCompleted }) => {
//   return (
//     <div>
//       <input
//         type="checkbox"
//         defaultChecked={todo.isCompleted}
//         onChange={() => toggleCompleted(todo.id)}
//       />
//       <span style={todo.isCompleted ? { textDecoration: "line-through" } : {}}>
//         {todo.value}
//       </span>
//       <button onClick={() => removeTodo(todo.id)}>X</button>
//     </div>
//   );
// };

export class TodoListItem extends Component {
  state = {
    isEditing: false
  };

  toggleEditMode = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  toggleCompleted = () => {
    const todo = this.props.todo;
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    this.props.updateTodo(updatedTodo);
  };

  changeTodoText = text => {
    const todo = this.props.todo;
    const updatedTodo = { ...todo, value: text };
    this.toggleEditMode()
    this.props.updateTodo(updatedTodo);
  };

  render() {
    const { todo, removeTodo } = this.props;

    return !this.state.isEditing ? (
      <DisplayTodoListItem
        todo={todo}
        removeTodo={removeTodo}
        toggleCompleted={this.toggleCompleted}
        toggleEditMode={this.toggleEditMode}
      />
    ) : (
      <EditTodoListItem
        todo={todo}
        changeTodoText={this.changeTodoText}
        toggleEditMode={this.toggleEditMode}
      />
    );
  }
}

const DisplayTodoListItem = ({
  todo,
  removeTodo,
  toggleCompleted,
  toggleEditMode
}) => {
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={todo.isCompleted}
        onChange={toggleCompleted}
      />
      <span style={todo.isCompleted ? { textDecoration: "line-through" } : {}}>
        {todo.value}
      </span>
      <button onClick={toggleEditMode}>EDIT</button>
      <button onClick={() => removeTodo(todo.id)}>X</button>
    </div>
  );
};

class EditTodoListItem extends Component {
  state = {
    text: this.props.todo.value
  };

  handleTodoChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //   if(this.state.value !== '') {
    //     this.props.addTodo(this.state.value);
    //     this.setState({
    //         value: ''
    //     });
    // }
    this.props.changeTodoText(this.state.text);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.text}
          autoComplete="off"
          onChange={this.handleTodoChange}
        />
        <input type="submit" value="OK" />
        <button onClick={this.props.toggleEditMode}>CANCEL</button>
      </form>
    );
  }
}
