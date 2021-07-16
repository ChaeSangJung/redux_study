import React from "react";
import { useSelector, shallowEqual } from 'react-redux';

const ItemCities = ({city}) => {    
    const { input : serched_city } = useSelector((state)=>(state.timezone_search),shallowEqual);

    let index = city.toLowerCase().indexOf(serched_city.toLowerCase());

    return (
        <li>
            {city.substring(0, index)}
            <span>{serched_city}</span>
            {city.substring(index + serched_city.length, city.length)}
        </li>
    )
}

export default ItemCities;