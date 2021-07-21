import {
    ADD_COUNTER,
    RESET_COUNTER,
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    TOGGLE_TODO
  } from "./types";
  
  let count = 0;
  
  export const addCounter = () => {
    return {
      type: ADD_COUNTER,
      count: ++count
    };
  };
  
  export const resetCounter = () => {
    return {
      type: RESET_COUNTER,
      count: 0
    };
  };
  
  export const addTodo = text => {
    return {
      type: ADD_TODO,
      text
    };
  };
  export const updateTodo = (id,text)=> {
    return {
      type: UPDATE_TODO,
      payload: id,
      text,
    }
  }
  export const deleteTodo = id => {
    return {
      type: DELETE_TODO,
      id
    };
  };
  
  export const toggleTodo = id => {
    return {
      type: TOGGLE_TODO,
      id
    };
  };
  