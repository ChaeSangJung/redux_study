import React from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { callSuccess ,callLoading, callError } from "../../modules/callApi"
import { imgApi } from "../../api";


const CallExampleContainer = () => {
    
    const { data, error, loading } = useSelector((state) => (state.callApi),shallowEqual);
    
    const dispatch = useDispatch();
    const handleCall = async () => {
        dispatch(callLoading(true));
        try {
            const { data : { results } } = await imgApi.search("cat", 1);
            dispatch(callSuccess(results));
        } catch(e) {
            dispatch(callError(e));
        }
    }

    console.log(data, error, loading)

    return (
        <>
            <div>call</div>
            <button onClick={handleCall}>button</button>
        </>
    )
}

export default CallExampleContainer;