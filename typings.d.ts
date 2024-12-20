interface Board {
    columns: Map<TypedColumn , Column>
}

type TypedColumn = "todos" | "inprogress" | "done"

interface Column {
    id: TypedColumn,
    todos: Todo[]
}

interface Todo {
    $id:string,
    $createdAt:string,
    status:TypedColumn,
    image?:string,
}

interface Image {
    bucketId: string
    filedId:string
}