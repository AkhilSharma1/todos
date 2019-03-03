import React, { Component } from "react";
import { Title } from "../components/Title";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { Footer } from "../components/Footer";
import { addNewTodo, deleteTodo, updateTodo, fetchTodos } from "../utils/api";
import { convertTodosObjToArr, isEmptyObject } from "../utils/helpers";

export class Home extends Component {
  state = {
    todos: {}
  };

  async componentDidMount() {
    console.log("called componentDidMount");
    await this.fetchTodos();
  }

  fetchTodos = async () => {
    const todosObj = await fetchTodos();
    this.setState({
      todos: todosObj
    });
  };

  addTodo = async text => {
    const todo = await addNewTodo(text);
    this.setState({
      todos: {
        ...this.state.todos,
        [todo.id]: todo
      }
    });
  };

  removeTodo = async id => {
    const { [id]: value, ...newTodosObj } = this.state.todos;
    this.setState({
      todos: newTodosObj
    });

    await deleteTodo(id);
  };

  toggleCompleted = async id => {
    const todoToUpdate = this.state.todos[id];
    todoToUpdate.isCompleted = !todoToUpdate.isCompleted;
    await this.updateTodo(todoToUpdate);
  };

  updateTodo = async todo => {
    this.setState({
      todos: {
        ...this.state.todos,
        [todo.id]: todo
      }
    });
    await updateTodo(todo);
  };
  render() {
    const todosObj = this.state.todos;

    return (
      <div id="container">
        <Title />
        <AddTodo addTodo={this.addTodo} />
        {isEmptyObject(todosObj) ? (
          <h1> Add some Todos!</h1>
        ) : (
          <TodoList
            todosArr={convertTodosObjToArr(todosObj)}
            removeTodo={this.removeTodo}
            updateTodo={this.updateTodo}
          />
        )}
        <Footer />
      </div>
    );
  }
}
