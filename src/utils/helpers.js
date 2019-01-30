export function convertTodosObjToArr(todosObj){
    return Object.keys(todosObj).map(id => todosObj[id])
}
