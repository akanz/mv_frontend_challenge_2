import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from "./reducers/index";

let preloadedState;
const persistedTodosString = localStorage.getItem("todos");

// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString),
//   };
// }

const store = createStore(todoReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
