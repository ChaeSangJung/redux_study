// 액션 타입
const CHANGE_INPUT = "timezone_search/CHANGE_INPUT"

// 액션 함수 선언
export const changeInput = (input) => ({
    type : CHANGE_INPUT,
    input
});

// 초기 상태 선언
const initialState = {
    input : "",
}

// reducer
const cityFindReducer = (state = initialState, action)=> {
    switch(action.type) {
        case CHANGE_INPUT :
            return {
                ...state,
                input: action.input
            };
        default:
            return state;
    }
}

export default cityFindReducer;