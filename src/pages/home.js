import React, { Component } from "react";
import { Title } from "../components/Title";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { Footer } from "../components/Footer";
import { addNewTodo, deleteTodo, updateTodo, fetchTodos } from "../utils/api";
import { convertTodosObjToArr } from "../utils/helpers";

export class Home extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    console.log('called componentDidMount')
    await this.fetchTodos()    
  }

  fetchTodos = async () => {
    console.log('called fetchTodos')

    const todosObj = await fetchTodos();
    const todosArr = convertTodosObjToArr(todosObj)
    this.setState({
      todos: todosArr
    });
  };

    addTodo = async text => {
   
    
    const todo = await addNewTodo(text);
    console.log('called addTodo' + todo)
    this.setState({
      todos: this.state.todos.concat(todo)
    });
  };

  removeTodo = async id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: newTodos
    });

    await deleteTodo(id);
  };

  updateTodo = async todo => {
    await updateTodo(todo);
    this.setState({
      todos: {
        ...this.state.todos,
        [todo.id]: todo
      }
    });
  };
  render() {
    return (
      <div id="container">
        <Title />
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
        <Footer />
      </div>
    );
  }
}
