import React from "react";
import TodoListItem from "./TodoItem";

function TodoList({todos,onChange,onDelete}){
    return (
        <ul>
        {todos?.map(todo=>(<TodoListItem key={todo.id} onDelete={onDelete} onChange={onChange} todo={todo}></TodoListItem>))}
    </ul> 
    )
}

export default TodoList