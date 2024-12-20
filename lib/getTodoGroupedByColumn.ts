import { databases } from "@/appwrite"

export const getTodoGroupedByColumn = async () =>{
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
    )

    console.log(process.env.NEXT_PUBLIC_DATABASE_ID , data)
}