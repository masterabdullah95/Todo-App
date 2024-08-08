import React from 'react'

const ClearTodo = ({setTodos, notify}) => {

  const handleClear = ()=>{
    setTodos([]);
    localStorage.setItem('todos','');
    notify('All todos cleared.','error')
  }

  return (
    <div>
      <button type="button" className="btn btn-danger" onClick={()=>handleClear()}>Clear all</button>
    </div>
  )
}

export default ClearTodo