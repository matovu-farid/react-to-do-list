import { useState } from "react";
import { FaTrash } from "react-icons/fa"
import './TodoItem.css'


function TodoListItem({todo:{title,completed,id},onChange,onDelete,setUpdate}) {
    const [editing,setEditing] = useState(false);
    const handleEditing = () => {
        setEditing(true)
      }
      let viewMode = {}
    let editMode = {}

    if (editing) {
    viewMode.display = "none"
    } else {
    editMode.display = "none"
    }
    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            setEditing(false)
          }
      }
    return (
    <li className="item"><div onDoubleClick={handleEditing} style={viewMode}>
        <input type="checkbox"   checked={completed} onChange={()=>onChange(id)}/> 
    <button onClick={()=>onDelete(id)}><FaTrash /></button>
    {title}
    </div>
    <input style={editMode} value={title}  onChange={({target:{value}}) => {
       
     setUpdate(value, id)
  }} onKeyDown={handleUpdatedDone} type="text" />
    </li>
    )
}

export default TodoListItem;
 