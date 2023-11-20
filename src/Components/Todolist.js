import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const ToDoList = () => {
  const [todo, setTodo] = useState('')  //veena
  const [todoArray, setTodoArray] = useState([])


  const addtodo = () => {
    const newtodoObj = {
      title: todo, //veena
      complted: false
    }
    axios.post(' http://localhost:3001/posts ', newtodoObj)
      .then(() => {
        alert('data posted')
      })
      .catch(() => {
        alert('data not posted')
      })
  }

  return (
    <div>
      <label htmlFor="Todo">Todo : </label>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} /> <br />

      <button onClick={addtodo}>Add Todo</button>
      {/* veena */}
    </div>
  )
}

export default ToDoList