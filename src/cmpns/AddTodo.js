import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoslices';

function AddTodo() {
    const [input,setInput] =useState("");


    const dispatch = useDispatch()


const addtodohandler =(e)=>{
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("")
}

  return (
    <form onSubmit={addtodohandler}>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button type='submit'>Add</button>
    
    </form>
  )
}

export default AddTodo