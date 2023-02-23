import React from "react";
import { useDispatch } from "react-redux";
import { addTodo,getTodos } from "../Redux/action";
import { useState } from "react";

//make a POST request (by dispatching the function), to save the data in db.json
//make a GET request (by dispatching the function), if the post request is successful, by chaining them together
const TodoInput = () => {
  const dispatch = useDispatch();
  let [input, setInput] = useState("");



  let HandleTodo = () => {
    let task = {
      title: input,
      status: false,
    }
    dispatch(addTodo(task));
    dispatch(getTodos());

  }
  return (
    <div>
      <input
        data-testid="todo-input" onChange={(e) => { setInput(e.target.value) }}
      />
      <button data-testid="todo-add-btn" onClick={HandleTodo} > Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
