import React from "react";
import { useSelector, shallowEqual } from 'react-redux';
import CallApiResultPresenter from "./CallApiResultPresenter";

const CallApiResultContainer = () => {
    const { data, error, loading, keyword } = useSelector((state) => (state.callApi),shallowEqual);
    console.log(data, keyword)
    return (
        <CallApiResultPresenter 
            data = {data}
            error = {error}
            loading= {loading}
            keyword={keyword}
        />
    )
};

export default CallApiResultContainer;