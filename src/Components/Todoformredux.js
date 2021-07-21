import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/index";

const Todoformredux = ({ edit }) => {
  const [text, setText] = useState(edit ? edit.value : "");
  console.log(edit);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (event) => {
    if (text !== "") {
      dispatch(addTodo(text.trim()));
      setText("");
    } else {
      // alert("cant not to empty text");
    }
    event.preventDefault();
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
