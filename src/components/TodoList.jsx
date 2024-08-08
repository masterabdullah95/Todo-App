import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({todos, setTodos, activeTab, searchText, notify}) => {
  
  return (
    <>
      {todos?.map((todo, index)=>{

        // if completed tab is selected then dont show non-completed todos
        if(activeTab == 2 && !todo.isCompleted) return;
        // if non-completed tab is selected then dont show completed todos
        if(activeTab == 3 && todo.isCompleted) return;
        // if searchtext does not match then skip
        if(!todo.content.includes(searchText)) return;

        return (
          <TodoItem notify={notify} key={index} todos={todos} todo={todo} index={index} setTodos={setTodos}/>
        )
      }
      )}
    </>
  )
}

export default TodoList