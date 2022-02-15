import React, { useEffect, useState } from "react"
import TodoList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo";
import { v4 } from "uuid";

const TodoContainer = () => {
  
       const [todos,setTodos] = useState([])
       useEffect(() => {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
         
          setTodos(loadedTodos)
        }
       },[])

       useEffect(() => {
        
          const temp = JSON.stringify(todos)
          localStorage.setItem("todos", temp)
        
       },[todos])
       
      
      
      const addToDoItem = title=>{
         
         setTodos([...todos,{
          id:v4(),
          title:title,
          completed:false
        }])
       }
       const  onChange = (id)=>{
        const newTodos = todos.map(todo=>(todo.id===id)? 
        {
          ...todo,
          completed: !todo.completed
        }: todo
    )
        setTodos( newTodos )
       }
       const onDelete = (id)=>{
         
         setTodos(todos.filter((todo)=>!(todo.id===id)))
       }
       const setUpdate = (updatedTitle, id) => {
        setTodos(
         todos.map(todo => {
            if (todo.id === id) {
              todo.title = updatedTitle
            }
            return todo
          }),
        )
      }
 
    return (
        <main>
        <Header/>
        <InputTodo addTodoProps={addToDoItem} />
        <TodoList todos={todos} setUpdate={setUpdate} onChange={onChange} onDelete={onDelete}/>
        </main>
    )
  
}

export default TodoContainer;