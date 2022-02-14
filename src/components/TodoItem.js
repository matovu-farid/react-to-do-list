

function TodoListItem({todo:{title,completed,id},onChange,onDelete}) {
    return (
    <li><input type="checkbox"  checked={completed} onChange={()=>onChange(id)}/> 
    <button onClick={()=>onDelete(id)}>Delete</button>
    {title}</li>
    )
}

export default TodoListItem;
 