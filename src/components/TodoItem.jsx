import React from 'react'
import { FaCheckSquare } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TodoItem = ({todo, setTodos, todos, notify}) => {

  const handleComplete = (todo)=>{
    let updatedTodos = todos.map((curr)=>{
      if(curr.content == todo.content) {
        return {
          content: todo.content,
          isCompleted: !todo.isCompleted,
        }
      }else{
        return curr;
      }
    })

    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    notify('Todo has been updated.', 'success');
  }

  const handleRemove = (todo)=>{
    let updatedTodos = todos.filter((curr)=>curr !== todo)
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
    notify('Todo has been deleted.', 'error');
  }

  return (
    <div className='row my-4 todolistmain'>
        <div className="col-md-8">
            {todo.isCompleted ? <del><p className='todoItemText'>{todo.content}</p></del> 
            : <p className='todoItemText'>{todo.content}</p>}
        </div>
        <div className="col-md-2">
            <button className='check-btn' onClick={()=>handleComplete(todo)}><FaCheckSquare /></button>
        </div>
        <div className="col-md-2">
        <button className='delete-btn' onClick={()=>handleRemove(todo)}><MdDeleteForever /></button>
        </div>
    </div>
  )
}

export default TodoItem