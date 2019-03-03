export function convertTodosObjToArr(todosObj){
    return Object.keys(todosObj).map(id => todosObj[id])
}


export const isEmptyObject = (obj) => Object.entries(obj).length === 0 && obj.constructor === Object 