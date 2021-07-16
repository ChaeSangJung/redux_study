import moment from "moment-timezone";

// 액션 타입
const ADD_ZONE = "timezone_mod/ADD_ZONE";

// 액션 생성 함수
export const addZone = (zoneName) => ({
    type: ADD_ZONE,
    zoneName
});

// 초기상태 선언
const initialState = {
    zoneName : [moment.tz.guess()],
}

// reducer
const timezoneModReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ZONE :
            return {
                ...state,
                zoneName: [...state.zoneName, action.zoneName]            
            };
        default:
            return state;
    }
}

export default timezoneModReducer;