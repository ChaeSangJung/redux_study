import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const WrapCats = styled.div`
    width: 1500px;
    margin: 0 auto 0;    
    padding-bottom: 100px;
    box-sizing: border-box;
`;
const ListCat = styled.ul`
    width: 100%;
    font-size: 0;
    text-align: left;
`;
const ItemCat = styled.li`
    display: inline-block;
    width: 300px;
    padding: 5px;
    vertical-align: top;
    box-sizing: border-box;
`;
const BoxImg = styled.div`
    width: 100%;
    img {
        width: 100%;
    }
`;

const CallApiResultPresenter = ({ data, error, loading, keyword }) => {
    
    return (
        <>
            <WrapCats>
                {data.length === 0 && keyword ? <div>no search result of {keyword}</div> 
                    : !keyword ? <div>input in search</div>
                    : loading ? <div>loading..</div> 
                    : (
                        <>
                            <div>result of {keyword}</div>
                            <ListCat>
                                {data.map((elm)=>(
                                    <ItemCat key={elm.id}>
                                        <BoxImg>
                                            <img src={elm.urls.regular} alt={elm.alt_description} />
                                        </BoxImg>
                                    </ItemCat>
                                ))}
                            </ListCat>
                        </>
                    )
                }
                {error ? (<span>{error}</span>) : null}
            </WrapCats>
            {/* {data.length === 0 ? <div>no search result</div> : (
                <WrapCats>
                    <ListCat>
                        {data.map((elm)=>(
                            <ItemCat key={elm.id}>
                                <BoxImg>
                                    <img src={elm.urls.regular} alt={elm.alt_description} />
                                </BoxImg>
                            </ItemCat>
                        ))}
                    </ListCat>
                    {error ? (<span>{error}</span>) : null}
                </WrapCats>
            )} */}
        </>
    )
};

CallApiResultPresenter.propTypes = {
    data : PropTypes.array,
    error : PropTypes.string,
    loading : PropTypes.bool
    
};

export default CallApiResultPresenter;