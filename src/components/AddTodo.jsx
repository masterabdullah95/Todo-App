import React, { useState } from 'react'

const AddTodo = ({todos, setTodos, notify}) => {

  const [inputText, setInputText] = useState("")

  const handleAddTodo = ()=>{

    // validate input text must not be empty
    if(!inputText) return;

    // if todo already there, then skip adding
    // if(todos.includes(inputText)) return;
    
    // clear input field
    setInputText('');

    setTodos((prev)=>{
      let data = [...prev, {
        content: inputText, 
        isCompleted: false,
      }];
      localStorage.setItem('todos', JSON.stringify(data));
      return data;
    })
    notify('Todo added!', 'success');
  }

  return (
    <div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Some todo ..." value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
        <button className="btn btn-success addTodoBtn" type="button" onClick={()=>handleAddTodo()}>Add</button>
      </div>
    </div>
  )
}

export default AddTodo