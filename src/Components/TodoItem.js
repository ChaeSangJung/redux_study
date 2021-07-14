import React from "react";

const TodoItem = ({todo, onToggle}) => {
    
    return (
        <li 
            onClick={()=>{onToggle(todo.id)}}
            style = {{ textDecoration: todo.done ? "line-through" : "none" }}
        >
            {todo.text}{todo.id}
        </li>
    )   
}

export default React.memo(TodoItem);