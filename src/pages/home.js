import React, { Component } from "react";
import { Title } from "../components/Title";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { Footer } from "../components/Footer";

const todosArr = [
  {
    id: 0,
    value: "TODO 1",
    isCompleted: true
  },
  {
    id: 1,
    value: "TODO 2",
    isCompleted: false
  },
  {
    id: 2,
    value: "ToDO 3",
    isCompleted: false
  }
];

export class Home extends Component {
  state = {
    todos: todosArr
  };

  addTodo = text => {
    const newTodo = {
      id: this.state.todos.length,
      value: text,
      isCompleted: false
    };

    this.setState({
      todos: this.state.todos.concat(newTodo)
    });
  };

  removeTodo = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({
      todos: newTodos
    });
  };

  toggleCompleted = id => {
    const todoToUpdate = this.state.todos.find(todo => todo.id === id);
    todoToUpdate.isCompleted = !todoToUpdate.isCompleted;

    this.setState({ todos: this.state.todos });
  };

  render() {
    return (
      <div id="container">
        <Title />
        <AddTodo addTodo={this.addTodo} />
        {this.state.todos.length >0 ?
        <TodoList
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          toggleCompleted={this.toggleCompleted}
        /> :<h1> Add some Todos!</h1> }
        <Footer />
      </div>
    );
  }
}
