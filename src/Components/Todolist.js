import React, { useState } from "react";
import {useSelector} from 'react-redux'
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Todolist = () => {
  const [todos, setTodos] = useState([]);
console.log(todos.length)
  const handleDrag = (result) => {
      if(!result.destination) return;
    const newTodosArr = Array.from(todos);
    const [reOrderedItems] = newTodosArr.splice(result.source.index, 1);
    newTodosArr.splice(result.destination.index, 0, reOrderedItems);

    setTodos(newTodosArr);
  };
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = [todo, ...todos];
    setTodos(newTodo);
    console.log(...todos);
  };

  const completedTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  const removeTodo = (id) => {
    const delTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(delTodo);
  };

  return (
    <div className="container">
      <h1 className="capitalize text-3xl text-center text-blue-800 font-medium mb-5">
        What are you doing today?{" "}
      </h1>
      <TodoForm onSubmit={addTodo} />
      <DragDropContext onDragEnd={handleDrag}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className="todoR"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos.map((todo, i) => (
                <Todo
                  index={i}
                  key={i}
                  todo={todo}
                  completeTodo={completedTodo}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Todolist;
