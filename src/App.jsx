import { useEffect, useState } from 'react'
import './App.css'
import DateTime from './components/DateTime'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import ClearTodo from './components/ClearTodo'
import Tabs from './components/Tabs'
import Search from './components/Search'
import ThemeToggle from './components/ThemeToggle'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const notify = (msg,type) => {
    if(type == 'error'){
      toast.error(msg);
    }else{
      toast.success(msg);
    }
    
  }
  const [activeTab, setActiveTab] = useState(1);
  const [searchText, setSearchText] = useState("")
  const [mode, setMode] = useState('dark')

  const [todos, setTodos] = useState(()=>{
    let data = localStorage.getItem('todos');
    if(data){
      return JSON.parse(data);
    }else{
      return [];
    }
  })

  useEffect(() => {
    document.querySelector('body').setAttribute('data-theme', mode);    
  }, [mode])
  

  return (
    <div className='row'>
      <div className="col-md-12">
      <ToastContainer/>
      <ThemeToggle mode={mode} setMode={setMode}/>
      </div>
      <div className='col-md-12'>
        
        <h1>Todo List</h1>
        <DateTime/>
        <AddTodo setTodos={setTodos} todos={todos} notify={notify}/>
        <Search searchText={searchText} setSearchText={setSearchText}/>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TodoList searchText={searchText} activeTab={activeTab} setTodos={setTodos} todos={todos} notify={notify}/>
        <ClearTodo setTodos={setTodos} notify={notify}/>
      </div>
    </div>
  )
}

export default App
