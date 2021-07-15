// 액션 타입
// ducks 패턴을 따를 경우 액션의 이름에 접두사
// 다른 모듈과 액션 이름이 중복되는 것 방지
const SET_DIFF = "counter/SET_DIFF"
const INCREASE = "counter/INCREASE"
const DECRESE = "counter/DECRESE"

// 액션 생성함수 
export const setDiff = (diff) => ({
    type: SET_DIFF,
    diff    
});
export const increase = () => ({
    type: INCREASE
});
export const decrease = () => ({
    type: DECRESE
});

// 초기 상태 선언
const initialState = {
    number: 0,
    diff: 1
}

// reducer
const counter = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_DIFF :
            return {
                ...state,
                diff: action.diff
            };
        case INCREASE :
            return {
                ...state,
                number: state.number + state.diff
            };
        case DECRESE :
            return {
                ...state,
                number: state.number - state.diff
            };
        default:
            return state;
    }
}
// 리듀서는 export default 로 내보내줘야 함.
export default counter;