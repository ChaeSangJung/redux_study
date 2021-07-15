import React from "react";
import Counter from "../../Components/Counter";
import Todo from "../../Components/Todo";

const MainLecturePresenter = () => {
    return (
        <>
            <div>
                <Counter />
            </div>
            <div style={{marginTop:"30px"}}>
                <Todo />
            </div>
        </>
    )
}

export default MainLecturePresenter;