import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/actions/index";

const Todoformredux = ({ edit }) => {
  const [text, setText] = useState(edit ? edit.value : "");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  // add todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      edit
        ? dispatch(updateTodo(edit.id, text.trim()))
        : dispatch(addTodo(text.trim()));

      setText("");
    } else {
      // alert("cant not to empty text");
    }
  
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {edit ? (
          <div className="mb-2">
            <input
              type="text"
              value={text}
              autoFocus={true}
              onChange={handleChange}
            />
            <button className="bg-green-400 text-black button">edit</button>
          </div>
        ) : (
          <div className="mb-2">
            <input
              type="text"
              value={text}
              placeholder="Add a todo"
              autoFocus={true}
              onChange={handleChange}
            />
            <button className="button">add</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Todoformredux;
