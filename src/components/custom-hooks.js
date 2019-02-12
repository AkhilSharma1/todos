import { useState } from "react";
import { addNewTodo, deleteTodo, updateTodo, fetchTodos } from "../utils/api";
import { convertTodosObjToArr } from "../utils/helpers";

//These classes are not used  but show how to create custom hooks

export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    removeTodo: async id => {
      setTodos(todos.filter(todo => todo.id !== id));

      await deleteTodo(id);
    },
    updateTodo: async updatedTodo => {
      setTodos(
        todos.map((todo, index) => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo;
          }
          return todo
        })
      );
      await updateTodo(updatedTodo);
    },
    fetchTodos: async () => {
      const todosObj = await fetchTodos();
      const todosArr = convertTodosObjToArr(todosObj);
      setTodos(todosArr);
    },
    addTodo: async text => {
      const todo = await addNewTodo(text);
      setTodos(todos.concat(todo));
    }
  };
};

export const useInputValue = (initialValue = "") => {
    const [inputValue, setInputValue] = useState(initialValue)

    return{
        inputValue,
        changeInput: event => setInputValue(event.target.value),
        clearInput: () => setInputValue(""),


    }

}