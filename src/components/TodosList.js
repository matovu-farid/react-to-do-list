import React from "react";
import TodoListItem from "./TodoItem/TodoItem";

function TodoList({todos,onChange,onDelete,setUpdate}){
    return (
        <ul>
        {todos?.map(todo=>(<TodoListItem key={todo.id}  setUpdate={setUpdate} onDelete={onDelete} onChange={onChange} todo={todo}></TodoListItem>))}
    </ul> 
    )
}

export default TodoList