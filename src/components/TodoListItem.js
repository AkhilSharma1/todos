import React from "react";

export const TodoListItem = ({todo, removeTodo, toggleCompleted}) => {
  return (
    <div>
      <input type='checkbox' defaultChecked={todo.isCompleted} onChange={()=>toggleCompleted(todo.id)}/>
        <span style = {todo.isCompleted ?{textDecoration:'line-through'}:{}}>{todo.value}</span>
        <button onClick={() => removeTodo(todo.id)}>X</button>
    </div>
  );
};
