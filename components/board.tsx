'use client'
import { useBoardStore } from '@/store/boardStore'
import React, { useEffect } from 'react'
import {DragDropContext, Droppable} from "react-beautiful-dnd"
function Board() {
    const getBoard = useBoardStore((state)=> state.getBoard)
    useEffect(()=>{
        getBoard()
    },[])

  return (
    <>acaca</>
    // <DragDropContext>
    //     <Droppable droppableId='board' direction='horizontal' type="column">
    //     {(provided)=> (
    //         <div>
    //             {/**Render cols */}
    //         </div>
    //     )}</Droppable>
    // </DragDropContext>
  )
}

export default Board