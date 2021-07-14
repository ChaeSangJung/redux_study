// 액션 타입
// ducks 패턴을 따를 경우 액션의 이름에 접두사
// 다른 모듈과 액션 이름이 중복되는 것 방지
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// 액션 생성함수 선언
let nextId = 1;
export const addTodo = (text) => ({
    type: ADD_TODO,
    todo:  {
        id: nextId++,
        text
    }
});
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

// 초기 상태 선언
// 객체, 배열, 원시타입(숫자, 문자, 불리언) 상관없음
const initialState = [
    {
        id: 1,
        text: "example",
        done: false
    }
]


// reducer
const todos = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO : 
            return state.concat(action.todo);
        case TOGGLE_TODO :
            return state.map((todo) => (
                todo.id === action.id 
                ? {...todo, done: !todo.done}
                : todo
            ))
        default : return state;
    }
};

export default todos;