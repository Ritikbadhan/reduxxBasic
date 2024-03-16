import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoslices";

function TodosList() {
  const todosList = useSelector((state) => state.todos);

  const dispatch = useDispatch();
console.log(todosList);
  return (
    <>
      <div>TodosList</div>
      {todosList.map((todo) => (
        <li key={todo.id}>
          {todo.textvalue}
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </>
  );
  
}

export default TodosList;
