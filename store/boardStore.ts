import { databases , storage } from '@/appwrite';
import { getTodoGroupedByColumn } from '@/lib/getTodoGroupedByColumn';
import { create } from 'zustand'

interface BoardState {
    board : Board;
    getBoard:() =>void;
    setBoardState:(board : Board) => void;
    deleteTask : (taskIndex: number , todoId: Todo, id : TypedColumn ) => void;
    updateTodoInDB: (todo:Todo , columnId:TypedColumn)=> void;
    searchString: string,
    newTaskInput:string,
    newTaskType:string,
    setNewTaskInput:(input:string)=> void;
    setSearchString:(searchString: string)=> void,
    setNewTaskType:(input:string)=>void;
}

export const useBoardStore = create<BoardState>((set , get) => ({
  board: {
    columns: new Map<TypedColumn , Column>()
  },
  getBoard: async()=>{
    const board = await getTodoGroupedByColumn()
    set({board})
  },
  
  setBoardState : (board) => set({board}),

  deleteTask : async (taskIndex: number , todo:Todo, id:TypedColumn) => {
    const newColumns = new Map<TypedColumn , Column>(get().board.columns);
    newColumns.get(id)?.todos.splice(taskIndex , 1);
    set({board : {columns : newColumns} })

    // if(todo.image){
    //   await storage.deleteFile(todo.image.bucketId, todo.image.fileId)
    // }

    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id
    )
  },

  updateTodoInDB : async(todo , columnId) =>{
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id,
      {
        title:todo.title,
        status:columnId,
      }
    )
  },

  searchString:"",
  setSearchString: (searchString)=> set({searchString}),
  newTaskInput:"",
  newTaskType:"",
  setNewTaskInput : (input:string) => set({newTaskInput: input}),
  setNewTaskType : (input:string) => set({newTaskType: input}),

}))