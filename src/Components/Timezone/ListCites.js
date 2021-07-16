import React from "react";
import ItemCities from "./ItemCities";
import { useSelector, shallowEqual } from 'react-redux';

const ListCities= ({matchCity}) => {
    const { input : serched_city } = useSelector((state)=>(state.timezone_search),shallowEqual);
    
    return (
        <>
            {matchCity && (
                <ul>
                    {matchCity.map((city, index)=>(                        
                        <ItemCities key={index} city={city}/>
                    ))}
                    {matchCity.length === 0 && serched_city && (
                        <li>no result</li>
                    )}
                </ul>
            )}
        </>
    )
}

export default ListCities;