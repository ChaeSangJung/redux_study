import React, {useState} from "react";
import TodoList from "../../Components/TodoList"

const TodoPresenter = ({todoList, onCreate, onToggle}) => {
    // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아닙니다.
    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
        onCreate(text);
        setText(''); // 인풋 초기화
    };
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <input 
                    value={text}
                    placeholder="add todo"
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <TodoList 
                todoList={todoList}
                onToggle={onToggle}
            />
        </>
    )
}

export default TodoPresenter;