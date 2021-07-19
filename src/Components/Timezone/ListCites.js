import React from "react";
import ItemCities from "./ItemCities";
import { useSelector, shallowEqual } from 'react-redux';

const ListCities= () => {
    const { input : serched_city, matchArr } = useSelector((state)=>(state.timezone_search),shallowEqual);
    
    return (
        <>
            {matchArr && (
                <ul>
                    {matchArr.map((city, index)=>(
                        <ItemCities 
                            key={index}
                            city={city}
                        />
                    ))}
                    {matchArr.length === 0 && serched_city && (
                        <li>no result</li>
                    )}

                </ul>
            )}
        </>
    )
}

export default ListCities;