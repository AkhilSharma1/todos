import React, { useState } from "react";


export const AddTodo = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");


  const changeInput = event => setInputValue(inputValue);

  const clearInput = () => setInputValue("");

  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <form onSubmit={clearInputAndAddTodo}>
      <input
        value={this.state.value}
        placeholder=" Add a todo here..."
        autoComplete="off"
        onChange={changeInput}
      />
      <input type="submit" value="ADD" />
    </form>
  );
};
