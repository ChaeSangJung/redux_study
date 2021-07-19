import React from "react";
import { useDispatch } from "react-redux";
import cityZones from "../cityZones";
import { addZone } from "../../modules/timezone_mod";
import { changeInput } from "../../modules/timezone_search"
import { useSelector, shallowEqual } from 'react-redux';

const ItemCities = ({city}) => {    
    const { input : serched_city } = useSelector((state)=>(state.timezone_search),shallowEqual);
    let index = city.toLowerCase().indexOf(serched_city.toLowerCase());
    const city_add = cityZones.find((word)=>(word.fullName === city)).zone;
    
    const dispatch = useDispatch();
    const addTimeZone = () =>{
        dispatch(addZone(city_add));
        dispatch(changeInput("", []));
    } 
    return (
        <li
            data-zone={city}
            onClick={addTimeZone}
        >
            {city.substring(0, index)}
            <span>{serched_city}</span>
            {city.substring(index + serched_city.length, city.length)}
        </li>
    )
}

export default ItemCities;