import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from "../../modules/counter" // 액션 생성함수 

import CounterPresenter from "./CounterPresenter"

const CounterContainer = () => {
    // const { number, diff } = useSelector(state => ({
    //     number: state.counter.number,
    //     diff: state.counter.diff
    // }));
    const { number, diff } = useSelector((state) => (state.counter));

    // 각 액션을 디스패치
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff));
    
    return (
        <CounterPresenter 
            // state
            number = {number}
            diff = {diff}
            // action dispatch
            onIncrease = {onIncrease}
            onDecrease = {onDecrease}
            onSetDiff = {onSetDiff}            
        />
    )
}

export default CounterContainer;