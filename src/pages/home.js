import React, { Component } from "react";
import { Title } from "../components/Title";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { Footer } from "../components/Footer";

const todosArr = [
  {
    id: 0,
    value: "TODO 1",
    isCompleted: false
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
      value:text,
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

  render() {
    return (
      <div id="container">
        <Title />
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
        <Footer/>
      </div>
    );
  }
}
