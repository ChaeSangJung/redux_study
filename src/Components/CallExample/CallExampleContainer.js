import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { callSuccess ,callLoading, callError } from "../../modules/callApi"
import { imgApi } from "../../api";
import styled from "styled-components";

const WrapSearch = styled.div`
    float: right;
`;
const BoxForm = styled.div`
    display: inline-block;
    vertical-align: top;
`;
const BtnSearch = styled.button`
    display: inline-block;
    vertical-align: top;
`;

const CallExampleContainer = ({history}) => {
    const dispatch = useDispatch();
    
    const [searchTerm, setSearchTerm] = useState("");
    
    const updateTerm = (event) => {
        const { target : {value} } = event;
        setSearchTerm(value)
    }

    const searchByTerm = async () => {
        dispatch(callLoading(true));
        try {
            const { data : { results } } = await imgApi.search(searchTerm);
            dispatch(callSuccess(results, searchTerm));
        } catch(e) {
            dispatch(callError(e));
        } finally {
            history.push('/api_1_result');
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(searchTerm !==""){
            searchByTerm();
            setSearchTerm("")
        }
    }
    return (
        <WrapSearch>
            <BoxForm>
                <form onSubmit={handleSubmit}>
                    <input 
                        value={searchTerm}
                        onChange={updateTerm}
                    />
                </form>
            </BoxForm>
            <BtnSearch onClick={handleSubmit}>검색</BtnSearch>
        </WrapSearch>
    )
}

export default withRouter(CallExampleContainer);