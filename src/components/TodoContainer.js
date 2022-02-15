import React from "react"
import TodoList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo";
import { v4 } from "uuid";
export default class TodoContainer extends React.Component {
  state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
       };
       addToDoItem = title=>{
         this.setState(({todos})=>({
           todos:[...todos,{
             id:v4(),
             title:title,
             completed:false
           }]
         }))
       }
       onChange = (id)=>{
        this.setState(({todos})=>({  
        todos:  todos.map(todo=>(todo.id===id)? 
              {
                ...todo,
                completed: !todo.completed
              }: todo
          )
        }))
       }
       onDelete = (id)=>{
         this.setState(({todos})=>({
           todos: todos.filter((todo)=>!(todo.id===id))
         }))
       }
       setUpdate = (updatedTitle, id) => {
        this.setState({
          todos: this.state.todos.map(todo => {
            if (todo.id === id) {
              todo.title = updatedTitle
            }
            return todo
          }),
        })
      }
  render() {
    return (
        <>
        <Header/>
        <InputTodo addToDoItem={this.addToDoItem} />
        <TodoList todos={this.state.todos} setUpdate={this.setUpdate} onChange={this.onChange} onDelete={this.onDelete}/>
        </>
    )
  }
}