import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { Draggable } from "react-beautiful-dnd";
import { MdClose } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import {AiFillCheckCircle} from 'react-icons/ai'

const Todo = ({ todo, completeTodo, removeTodo, updateTodo, index }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (val) => {
    updateTodo(edit.id, val);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
      <>
      <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="todo-row"
        >
          <button onClick={() => completeTodo(todo.id)}>
            <AiFillCheckCircle className={todo.isComplete ? 'btnIcon ': 'btnIcon text-white'} />
          </button>
          <div
            className={
              todo.isComplete
                ? "todo-text line-through opacity-25"
                : "todo-text"
            }
          >
            <div>
              {todo.text}
            </div>
          </div>
          <div className="todo-icon">
            <FiEdit3
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
            />
            <MdClose
              className="bg-red-700 text-white"
              onClick={() => removeTodo(todo.id)}
            />
          </div>
        </div>
      )}
    </Draggable>
      </>
    
  );
};

export default Todo;
