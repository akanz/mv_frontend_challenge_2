import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, updateTodo } from "../redux/actions/index";
import { Draggable } from "react-beautiful-dnd";
import { MdClose } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiFillCheckCircle } from "react-icons/ai";
import TodoForm from "./TodoForm";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const handleUpdate = () => {
    setEdit({ id: id, value: text });
  };

  const submitUpdate = (val) => {
    dispatch(updateTodo(id, val));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  if (edit.value === text && edit.id === id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return (
    <>
      <Draggable key={id} draggableId={id.toString()} index={id}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="todo-row"
          >
            <button onClick={handleToggle}>
              <AiFillCheckCircle
                className={completed ? "btnIcon " : "btnIcon text-white"}
              />
            </button>
            <div
              className={
                completed ? "todo-text line-through opacity-25" : "todo-text"
              }
            >
              <div>{text}</div>
            </div>
            <div className="todo-icon">
              <FiEdit3 onClick={handleUpdate} />
              <MdClose
                className="bg-red-700 text-white"
                onClick={handleDelete}
              />
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default TodoItem;
