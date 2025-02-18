import { useState, useEffect } from "react"
/* useState: for stateless var
useEffect: to use local storage/save todo lists */
import TodoInput from "./components/TodoInput"; 
import TodoList from "./components/TodoList";

function App() { /*func name is always capital*/
 /* highest level parent component*/

const [todos, setTodos]= useState([])
/*stateful var */
const [todoValue, setTodoValue] =useState('')
/* todos is a stateful var with functions defined as 
setTodos and the default values are in the array passed*/

function persistData(newList){
  localStorage.setItem('todos', JSON.stringify({todos: newList}))
}
function handleAddTodos(newTodo){
 const newTodoList =[...todos, newTodo]
 persistData(newTodoList)
 setTodos(newTodoList)
}

function handleDeleteTodo(index){
  const newTodoList =todos.filter((todo, todoIndex)=>{
  return todoIndex !== index})
  persistData(newTodoList)
 setTodos(newTodoList)
}

function handleEditTodo(index){
  const valueToBeEdited =todos[index]
  setTodoValue(valueToBeEdited)
  handleDeleteTodo(index)
}

useEffect(()=>{
  if(!localStorage){
    return
  }
  let localTodos =localStorage.getItem('todos')
  if(!localTodos){
    return
  }

  localTodos =JSON.parse(localTodos).todos
  setTodos(localTodos)
}, [])
/* this func takes an arrow func and a 
dependency array */


  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} handleEditTodo={handleEditTodo}/>
    </>
  )
}



export default App






/*function App() { 
return (
  <>
   a function returns a jsx
   it allows writing js within html 
   eg: <div> {4*4} </div>
  </>
)
} this is a component */