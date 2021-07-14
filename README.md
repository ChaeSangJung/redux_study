## 1. 리덕스에서 사용되는 키워드 숙지하기
### 액션(action)
    - 상태에 변화가 필요할 때(count를 늘리거나 줄이거나...)
    - 객체로 표현
```javascript
    {
        type : "INCREASE"
    }
```
        - type은 필수, 그 외의 값은 필요에 따라 넣는다.
```javascript
    {
    type: "ADD_TODO",
    data: {
        id: 0,
        text: "리덕스 배우기"
    }
    }
    {
    type: "CHANGE_INPUT",
    text: "안녕하세요"
    }
```

### 액션 생성함수(Action Creator)
    - 액션을 만드는 함수
    - 파라미터를 받아와서 액션을 객체 형태로 만들어 준다.
    - 화살표 함수도 가능
```javascript
    export function addTodo(data) {
        return {
            type: "ADD_TODO",
            data
        }
    }

    export const addTodo = (data) => ({
        type: "ADD_TODO",
        data
    })
```
    - 액션 생성함수를 사용하는 것이 필수는 아님
    - 직접 액션 객체를 작성할 수 있음
```javascript
    store.dispatch({
        type: "ADD_TODO",
        data: {
            id: 1,
            text : "익힌 것 잘 기억하기"
        }
    })
```

### 리듀서 (Reducer)
    - 변화를 일으키는 함수
    - 이전 상태(state)와 action 두가지의 파라이터를 받아 옴
    - 현재의 상태와 전달 받은 액션을 참고하여 새로운 상태를 만들어서 반환
```javascript
    function reducer(state, action) {
        // your logic
        return alered state;
    }
```
    - 형태는 useReducer와 같다.
```javascript
    function counter(state, action) {
        switch (action.type) {
            case: "INCREASE" {
                return state + 1;
            }
            case: "DECEASE" {
                return state - 1;
            }
            default:
                return state
        }
    }
```
    - useReducer : dafault => throw new Error("") 에러를 발생시켜 처리
    - redux : default => state 그대로 반환
    - 여러개의 reducer를 만들고 이를 합쳐 root Reducer를 만들 수 있음
    - root Reducer안의 작은 reDucer들은 sub reDucer라고 부름

### 스토어 (Store)
    - 리덕스에서는 한 애플리케이션당 하나의 스토어
    - 스토어 안에는, 현재의 앱 상태와, 리듀서가 있음
    - 몇가지 내장 함수들도 있음

### 디스패치 (dispatch)
    - store의 내장함수
    - dispatch는 action을 발생 시키는 것
    - dispatch는 action을 파라미터로 전달
    - dispatch(action)
```javascript
    store.dispatch(increase());
    store.dispatch(addToList({ id: 2, text: '음...' }));
    // 직접 액션 객체를 작성할 수 있음
    store.dispatch({
        type: ADD_TO_LIST,
        item : {
            id: 3,
            text: "돼냐?"
        }
    })
```
    - reducer(현재의 상태와 전달 받은 액션을 참고하여 새로운 상태를 만들어서 반환 하는 함수)를 실행
    - reducer에 전달 받은 액션이 있으면 액션을 참고하여 새로운 상태를 만들어 반환

### 구독 (subscribe)
    - store의 내장함수
    - 함수 형태의 파라미터를 받아 옴
```javascript
    const listener = () => {
        const state = store.getState();
        console.log(state);
    };
    
    const unsubscribe = store.subscribe(listener);
```
    - dispatch 될 때마다 전달해준 함수가 호출 됨
    - react-redux에서 제공하는 connect 또는 useSelector Hook을 사용함

## 2. 리덕스의 3가지 규칙
### 2-1. 하나의 애플리케이션 안에는 하나의 스토어
### 2-2. 상태는 읽기전용 입니다.
    - 기존의 상태는 건들이지 않고 새로운 상태를 생성하여 업데이트
    - state 업데이트 => setState
    - 배열 업데이트 => push(X), concat... 기존의 배열을 수정하지 않음
    - 새로운 배열을 만들어 "교체"
    - 객체 => Object.assign 또는 spread 연산자 (...)를 사용
    - redux => 기존의 상태는 건들이지 않고 새로운 상태를 생성하여 업데이트
        - 개발자 도구를 통해서 뒤로 돌릴 수도 있고 다시 앞으로 돌릴 수도 있음
    - 리덕스에서 불변성을 유지해야 하는 이유
        - 내부적으로 데이터가 변경 되는 것을 감지하기 위하여 shallow equality 검사를 하기 때문
        - 객체의 변화를 감지 할 때 객체의 깊숙한 안쪽까지 비교를 하는 것이 아니라 겉핥기 식으로 비교를 하여 좋은 성능을 유지
        - Immutable.js, Immer.js => 불변성을 유지하며 상태를 관리
### 2-3. 변화를 일으키는 함수, 리듀서는 순수한 함수여야 합니다.
    - 리듀서 함수는 이전 상태와, 액션 객체를 파라미터로 받음
```javascript
    function counter(state, action) {
        switch (action.type) {
            case: "INCREASE" {
                return state + 1;
            }
            case: "DECEASE" {
                return state - 1;
            }
            default:
                return state
        }
    }
```
    - 이전의 상태는 절대로 건들이지 않고, 변화를 일으킨 새로운 상태 객체를 만들어서 반환합니다.
    - 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과값을 반환해야만 합니다.
    - 일부 로직들 중에서는 실행 할 때마다 다른 결과값이 나타날 수도 있음
        - new Date()
        - 랜덤 숫자를 생성
        - 네트워크에 요청
    - 위의 경우 리듀서 함수의 바깥에서 처리해줘야 함
        - 리덕스 미들웨어를 사용

## 3. 리덕스 사용 할 준비하기
## 4. 리덕스 모듈 만들기
    - 리덕스 모듈 ? 
        - 액션 타입
        - 액션 생성함수
        - 리듀서
    - 위의 항목들이 모두 들어있는 자바스크립트 파일
    - Ducks 패턴
        - 리듀서와 액션 관련 코드들을 하나의 파일에 몰아서 작성
    - 순서 다시 한번 기억!
        - 액션 타입
```javascript
    const SET_DIFF = "counter/SET_DIFF"
```    
        - 액션 생성함수 
```javascript
    export const setDiff = (diff) => ({
        type: SET_DIFF,
        diff    
    });
```
        - 초기 상태 선언
```javascript
    const initialState = {
        number: 0,
        diff: 1
    }
```
        - reducer : export default 로 내보내줘야 함.
```javascript
    export default const counter = (state = initialState, action) => {
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
```
    - 루트 리듀서(root reducer) 만들기
        - 한 프로젝트에 여러 개의 reducer가 있는 경우 하나의 reducer로 합쳐서 사용
        - 합쳐진 reducer => root reducer
        - redux 내장 함수인 combineReducers 사용

## 5. 카운터 구현하기
    - 컨테이너 컴포넌트란 ? 
        - 리덕스 스토어의 상태를 조회
        - 액션을 디스패치 할 수 있는 컴포넌트
        - HTML 태그들을 사용하지 않고 다른 프리젠테이셔널 컴포넌트들을 불러와서 사용
    - 프리젠테이셔널 컴포넌트란?
        - 리덕스 스토어에 직접적으로 접근하지 않고 필요한 값 또는 함수를 props 로만 받아와서 사용하는 컴포넌트
    - useSelector : 리덕스 스토어의 상태를 조회하는 Hook
        - state의 값은 store.getState() 함수를 호출했을 때 나타나는 
  결과물과 동일
```javascript
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    const { number, diff } = useSelector((state) => state.counter);
```
    - useDispatch : dispatch 를 함수에서 사용 할 수 있게 해주는 Hook
```javascript
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));


```
[redux-hook](https://react-redux.js.org/api/hooks)

## 6. 리덕스 개발자도구 적용하기
    - 1. 확장 프로그램 설치 (Redux DevTools)
    - 2. 프로젝트에 redux-devtools-extension을 설치 (yarn add redux-devtools-extension)
    - 3. index.js 파일 수정
```javascript
    import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

    const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.
    // composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화
```

## 7. 할 일 목록 구현하기
    - useCallback : 메모이제이션된 콜백을 반환
        - 인라인 콜백과 그것의 의존성 값의 배열을 전달
        - 콜백의 메모이제이션된 버전을 반환
        - 그 메모이제이션된 버전은 콜백의 의존성이 변경되었을 때에만 변경
        - 불필요한 렌더링을 방지
            - 참조의 동일성에 의존적인 최적화된 자식 컴포넌트에 콜백을 전달할 때 유용
```javascript
const memoizedCallback = useCallback (
    () => {
        doSomething(a, b);
    },[a, b],
);
```
        - React.memo : 당신의 컴포넌트가 동일한 props로 동일한 결과를 렌더링 ?
            - React.memo를 호출하고 결과를 메모이징(Memoizing)하도록 래핑
            - 경우에 따라 성능 향상을 누릴 수 있습니다. 
            - React는 컴포넌트를 렌더링하지 않고 마지막으로 렌더링된 결과를 재사용
            - props 변화에만 영향을 줌
                - useState, useReducer 또는 useContext 훅을 사용?       
                    -여전히 state나 context가 변할 때 다시 렌더링
            - 이 메서드는 오직 성능 최적화를 위하여 사용됨 
            - 렌더링을 “방지”하기 위하여 사용 X 
            - 버그를 만들 수 있습니다.
```javascript
    const MyComponent = React.memo(function MyComponent(props) {
        /* props를 사용하여 렌더링 */
    });

    function MyComponent(props) {
        /* props를 사용하여 렌더링 */
    }
    function areEqual(prevProps, nextProps) {
        /*
        nextProp가 prevProps와 동일한 값을 가지면 true를 반환하고, 그렇지 않다면 false를 반환
        */
    }

    export default React.memo(MyComponent, areEqual);
```
    - 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아님