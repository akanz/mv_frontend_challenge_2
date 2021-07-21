import React, { useState, useRef, useEffect } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });
    setInput("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {props.edit ? (
          <div className='mb-2'>
            <input
              type="text"
              value={input}
              placeholder="Add a todo"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="bg-green-400 text-black button">edit</button>
          </div>
        ) : (
          <div className='mb-2'>
            <input
              type="text"
              value={input}
              placeholder="Add a todo"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="button">add</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
