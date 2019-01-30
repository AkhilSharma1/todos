import { _addNewTodo, _fetchTodos, _deleteTodo, _updateTodo } from "./_DATA";

export function fetchTodos() {
    return _fetchTodos()
}

export function addNewTodo(text) {
    return _addNewTodo(text)
}


export function deleteTodo(id) {
    return _deleteTodo(id)
}


export function updateTodo(todo) {
    return _updateTodo(todo)
}




