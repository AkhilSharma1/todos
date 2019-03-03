import React from "react";
import { TodoListItem } from "./TodoListItem";

export function TodoList({ todosArr, removeTodo, updateTodo }) {

  const todoItems = todosArr.map((todo) => (
    <TodoListItem key={todo.id} todo={todo} removeTodo ={removeTodo} updateTodo = {updateTodo} />
  ));

  return todoItems;
}
