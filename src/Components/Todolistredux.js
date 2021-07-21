import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, clearTodoList } from "../redux/actions/index";
import Todoredux from "./Todoredux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Todoformredux from "./Todoformredux";

const Todolistredux = () => {
  const { list } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDrag = (result) => {
    if (!result.destination) return;
    const newTodosArr = Array.from(list);
    const [reOrderedItems] = newTodosArr.splice(result.source.index, 1);
    newTodosArr.splice(result.destination.index, 0, reOrderedItems);
  };

  return (
    <div className="container">
      <h1 className="capitalize text-3xl text-center text-blue-800 font-medium mb-5">
        What are you doing today?{" "}
      </h1>
      <Todoformredux />
      <DragDropContext onDragEnd={handleDrag}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className="todoR"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {list.map((todo) => (
                <Todoredux key={todo.id} {...todo} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Todolistredux;
