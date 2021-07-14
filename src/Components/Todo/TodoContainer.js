import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../../modules/todos';
// action 생성 함수
import TodoPresenter from "./TodoPresenter"

const TodoContainer = () => {
    const { todos: todoList } = useSelector((state)=>(state))
    const dispatch = useDispatch();

    const onCreate = (text) => {
        dispatch(addTodo(text));
    };
    const onToggle = useCallback((id)=>{
        dispatch(toggleTodo(id));
    },[dispatch]);

    return (
        <TodoPresenter 
            todoList={todoList}
            onCreate={onCreate}
            onToggle={onToggle}
        />
    )
}

export default TodoContainer;