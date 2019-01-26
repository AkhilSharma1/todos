import React from "react";

export const TodoListItem = props => {
  const todo = props.todo;
  return (
    <>
      <p>
        {todo.value}
        <button onClick={() => props.removeTodo(todo.id)}>X</button>
      </p>
    </>
  );
};
