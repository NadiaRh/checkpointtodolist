import React,{useState} from 'react' ;
import './App.css';
import {v4 as uuidv4} from 'uuid'


export default function App () {
  const [ selectedToDo, setSelectedTodo]=useState({})
  const [editMode,setEditMode]=useState(false)
  const [newTodo, setNewTodo]=useState('')
  const [todos, setTodos]=useState([
    {
      id: uuidv4(),
      text: 'Learn React Hooks'
    }, 
    {
      id: uuidv4() ,
      text: 'React.JS'
    }
  ])
  const add = () => {
    let newOne = { id: uuidv4(),text:newTodo}
    setTodos(todos.concat(newOne))
    setNewTodo("")
  }
  const deleteToDo = id =>  {
    setTodos(todos.filter(x => x.id !== id))
  }
  const edit = () => {
    setTodos(todos.map(el => el.id === selectedToDo.id ? selectedToDo : el))
    setEditMode(false)
  }
  return (
    <div className="App">
      <header className="App-header">
      {editMode ? (
        <div>
          <input type="text" onChange={e => setSelectedTodo({...selectedToDo,text:e.target.value})} value={selectedToDo.text}/>
          <button onClick={edit}> Edit </button>
          </div> ) : (

  <div>
  <input type="text" onChange={e => setNewTodo(e.target.value)} value={newTodo}/>
<button onClick={add}>ADD</button>
          </div> )}
           {

  todos.map(el => (
    <div style= {{ diplay:'flex', alignItems:'center'}}>
      <h3>{el.text}</h3>
      <button onClick={() => deleteToDo(el.id)}>Delete</button>
      <button onClick={() => { 
        setSelectedTodo(el)
        setEditMode(true)
      }}>Edit</button>
    </div>
           
  )
  
  )
    }

      </header>
    </div>
  )
} 