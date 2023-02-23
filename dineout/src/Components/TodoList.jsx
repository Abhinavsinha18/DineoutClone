import React from "react";
import { useSelector } from "react-redux";


// get all the todos from the redux store, and map them inside this component
const TodoList = () => {
  const todoData = useSelector((state) => {
    return state.todos;
  })
  console.log(todoData)
  return (
    <div data-testid='todo-list-wrapper'>
      {todoData.map((todo, i) => {
        return (
         
          <div key={i} data-testid="single-todo" style={{ textAlign: "center" }} >
            {todo.title} - {todo.status ? "True" : "False"}
          </div>
        )
      })}
    </div >
  );
};

export default TodoList;
