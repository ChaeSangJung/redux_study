import React from "react";

const CounterPresenter = ({ number, diff, onIncrease, onDecrease, onSetDiff }) => {
    const onChange = (event) => {
        let value = event.target.value;
        if(value==="") {
            value = "1"
        }
        onSetDiff(parseInt(value, 10));
    }
    return (
        <>
            <div>
                <h1>{number}</h1>
                <input type="number" value={diff} min="1" onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </>
    )
}

export default CounterPresenter;