import React from "react";
import { useSelector, shallowEqual } from 'react-redux';
import CallApiResultPresenter from "./CallApiResultPresenter";

const CallApiResultContainer = () => {
    const { data, error, loading, keyword, totalPages } = useSelector((state) => (state.callApi),shallowEqual);
    
    return (
        <CallApiResultPresenter 
            data = {data}
            error = {error}
            loading= {loading}
            keyword={keyword}
            totalPages={totalPages}
        />
    )
};

export default CallApiResultContainer;