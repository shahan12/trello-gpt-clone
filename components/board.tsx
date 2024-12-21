"use client";
import { useBoardStore } from "@/store/boardStore";
import React, { useEffect } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import Column from "./Column";
function Board() {
  const getBoard = useBoardStore((state) => state.getBoard);
  const board = useBoardStore((state) => state.board);
  const setBoardState = useBoardStore((state) => state.setBoardState);
  useEffect(() => {
    getBoard();
  }, []);
  console.log(board);
  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;
    console.log(type);
    // if drag is outside the drag area
    if (!destination) return;

    // Handle A collumn drag
    if (type == "column") {
      const entries = Array.from(board.columns.entries());
      const [removed] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, removed);
      const rearrangedColumn = new Map(entries);
      setBoardState({
        ...board,
        columns: rearrangedColumn,
      });
    }
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable
        droppableId="board"
        direction="horizontal"
        type="column"
        isDropDisabled={false}
        isCombineEnabled={true}
        ignoreContainerClipping={true}
      >
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column key={id} id={id} todos={column.todos} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
