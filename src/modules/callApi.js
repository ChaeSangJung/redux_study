// 액션 타입
const SUCCESS = "callApi/SUCCESS";
const LOADING = "callApi/LOADING";
const ERROR = "callApi/ERROR";

// 액션 함수 선언
export const callSuccess = (data, keyword, totalPages) => ({
    type : SUCCESS,
    data,
    keyword,
    totalPages
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
    data: [],
    error: "",
    keyword: "",
    totalPages : 0
}

// reducer
const callAPiReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                loading: true,
                data: [],
                error: "",
                keyword: "",
                totalPages: 0
            };
        case SUCCESS:
            return {
                loading: false,
                data: action.data,
                error: "",
                keyword: action.keyword,
                totalPages: action.totalPages
            };
        case ERROR:
            return {
                loading: false,
                data: [],
                error: action.error,
                keyword: "",
                totalPages: 0
            };
        default:
            return state;
    }
}

export default callAPiReducer;