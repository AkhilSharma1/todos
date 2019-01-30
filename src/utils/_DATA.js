let todosObj = {
  "sfljgka8pfddbcer8nuxv":{
    id: "sfljgka8pfddbcer8nuxv",
    value: "TODO 1",
    timestamp: 1468479767190,
    isCompleted: false
  },
  "czpa59mg577x1oo45cup0d":{
    id: "czpa59mg577x1oo45cup0d",
    value: "TODO 2",
    timestamp: 1468479767190,
    isCompleted: true
  },
  "2mb6re13q842wu8n106bhk":{
    id: "2mb6re13q842wu8n106bhk",
    value: "ToDO 3",
    timestamp: 1468479767190,
    isCompleted: false
  }
};

function generateID () {
  return Math.random().toString(36).substring(2, 15)  +  Math.random().toString(36).substring(2, 15)
}

function createQuestion(text){
  return {
    id: generateID(),
    value:text,
    timestamp:Date.now(),
    isCompleted:false
  }
}

export function _fetchTodos() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...todosObj }), 1000);
  });
}

export function _addNewTodo(text) {
  return new Promise((res, rej) => {
    setTimeout(() => {

      const newTodo = createQuestion(text)
      todosObj = {
        ...todosObj,
        [newTodo.id]:newTodo
      };

      res(
        newTodo
      );
    }, 1000);
  });
}


export function _deleteTodo(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const {[id]:value , ...newTodosObj} = todosObj
      todosObj = newTodosObj
      res();
    }, 1000);
  });
}


export function _updateTodo(todo) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      todosObj = {
        ...todosObj,
        [todo.id]:todo
      };
      res();
    }, 1000);
  });
}