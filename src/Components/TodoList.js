import React from "react"
import TodoItem from "./TodoItem"

const TodoList = ({todoList, onToggle}) => {
    
    return (
        <ul>
            {todoList.map((todo)=>(
                <TodoItem todo={todo} onToggle={onToggle} key={todo.id}/>
            ))}
        </ul>
    )
}

export default React.memo(TodoList);