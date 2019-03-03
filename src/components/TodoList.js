import React from "react";
import { TodoListItem } from "./TodoListItem";

export function TodoList({ todos, removeTodo, toggleCompleted }) {

  const todoItems = todos.map((todo) => (
    <TodoListItem key={todo.id} todo={todo} removeTodo ={removeTodo} toggleCompleted = {toggleCompleted} />
  ));

  return todoItems;
}
