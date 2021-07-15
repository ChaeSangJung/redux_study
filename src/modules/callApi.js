// 액션 타입
const SUCCESS = "callApi/SUCCESS";
const LOADING = "callApi/LOADING";
const ERROR = "callApi/ERROR";

// 액션 함수 선언
export const callSuccess = (data) => ({
    type : SUCCESS,
    data
});
export const callLoading = (loading) => ({
    type : LOADING,
    loading
});
export const callError = (error) => ({
    type: ERROR,
    error
});

// 초기 상태 선언
const initialState = {
    loading: true,
    data: null,
    error: null
}

// reducer
const callAPiReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                loading: true,
                data: null,
                error: null
            };
        case SUCCESS:
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case ERROR:
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            return state;
    }
}

export default callAPiReducer;