import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../actions/types";

const initalState = {
  counter: 0,
  list: [],
};

const todos = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        counter: state.counter + 1,
        list: [
          ...state.list,
          { id: state.counter + 1, text: action.text, completed: false },
        ],
      };
    case UPDATE_TODO:
      return {
        ...state,
        list: state.list.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, text: action.text };
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
};

export default todos;
