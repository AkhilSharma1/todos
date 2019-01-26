import React from "react";
import { TodoListItem } from "./TodoListItem";

export function TodoList({ todos, removeTodo }) {

  const todoItems = todos.map((todo) => (
    <TodoListItem key={todo.id} todo={todo} removeTodo ={removeTodo} />
  ));

  return todoItems;
}
