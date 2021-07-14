import { createStore } from "redux";

// createStore store를 만들어 주는 함수
// react project에서 "하나만" 만들 수 있음

// 초기 상태 정의
const initialState = {
    counter:0,
    text: "",
    list: []
}

// action type 정의
// action type은 대문자로 작성
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// action 생성함수 정의
// action 객체에는 "type값이 필수"
const increase = () => ({
    type: INCREASE
});
const decrease = () => ({
    type: DECREASE
});
const changeText = (text) => ({
    type: CHANGE_TEXT,
    text
});
const addToList = (item) => ({
    type: ADD_TO_LIST,
    item
});

// reducer 만들기
// action 생성함수들을 통해 만들어진 객체들을 참조한다.
// reducer는 새로운 상태를 만드는 함수
// "불변성"을 꼭 지켜야 한다.

const reducer = (state = initialState, action) => {
    switch (action.type){
        case INCREASE :
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }
};

// store 만들기
const store = createStore(reducer);

// 현재 store 안의 상태를 조회
console.log(store.getState());

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
    const state = store.getState();
    console.log(state);
};
  
  const unsubscribe = store.subscribe(listener);
  // 구독을 해제하고 싶을 때는 unsubscribe() 를 호출하면 됩니다.
  
  // 액션들을 디스패치 해봅시다.
  store.dispatch(increase());
  store.dispatch(decrease());
  store.dispatch(changeText('안녕하세요'));
  store.dispatch(addToList({ id: 1, text: '와우' }));
  store.dispatch(addToList({ id: 2, text: '음...' }));