interface Board {
    columns: Map<TypedColumn , Column>
}

type TypedColumn = "todo" | "inprogress" | "done"

interface Column {
    id: TypedColumn,
    todos: Todo[]
}

interface Todo {
    title: ReactNode
    $id:string,
    $createdAt:string,
    status:TypedColumn,
    image?:string,
}

interface Image {
    bucketId: string
    filedId:string
}