import fetchSuggestion from "./fetchSuggestion";

const formatTodos = (board :Board) =>{

    const todos = Array.from(board.columns.entries());

    const flatArray=todos.reduce((map , [key , val])=>{
        map[key] = val.todos;
        return map;
    }, {} as{[key in TypedColumn]:Todo[]}
)
// reduce to key: value(length)
    const flatArrayCounted = Object.entries(flatArray).reduce((map , [key, value]) =>{
        map[key as TypedColumn] = value.length;
        return map
    },{} as {[key in TypedColumn]:number})

    return flatArrayCounted;
}

export default formatTodos