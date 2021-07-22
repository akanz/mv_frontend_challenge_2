import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todoredux from "./Todoredux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Todoformredux from "./Todoformredux";

const Todolistredux = () => {
  const [Items, setItems] = useState([]);
  const data = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const item = data.list.map((data) => data);

  useEffect(() => {
    setItems(item);
  }, [data]);

  const handleDrag = (result) => {
    if (!result.destination) return;
    const newTodosArr = Array.from(data.list);
    const [reOrderedItems] = newTodosArr.splice(result.source.index, 1);
    newTodosArr.splice(result.destination.index, 0, reOrderedItems);
    setItems(newTodosArr);
  };
  
  return (
    <div className="container">
      <h1 className="capitalize text-3xl text-center text-blue-800 font-medium mb-5">
        What are you doing today?{" "}
      </h1>
      <Todoformredux />
      {Items.length > 0 && (
        <DragDropContext onDragEnd={handleDrag}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div
                className="todoR"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {/* {Items.length &&} */}
                {data.list.map((todo) => (
                  <Todoredux key={todo.id} {...todo} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};

export default Todolistredux;
