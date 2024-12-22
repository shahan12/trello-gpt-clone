import formatTodos from "./formatTodos";

const fetchSuggestion = async (board:Board) =>{
    const todos = formatTodos(board)
    const res = await fetch("/api/generateSummary", {
        method:"POST",
        headers :{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({todos})
    })

    const GPTData = await res.json();
    const {content} = GPTData;
    return GPTData;
}

export default fetchSuggestion
