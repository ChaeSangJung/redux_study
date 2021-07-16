import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { changeInput } from "../../modules/timezone_search";
import TimeZonePresenter from "./TimeZonePresenter";
import { useSelector, shallowEqual } from 'react-redux';

import cityZones from "../../Components/cityZones";

const TimeZoneContainer = () => {
    const { zoneName } = useSelector((state)=>(state.timezone_mod),shallowEqual);
    console.log(zoneName)
    
    const dispatch = useDispatch();
    const [cityNmae, setCityName] = useState("");
    const [matchCity, setMatchCity] = useState([])
    
    const timeZoneCity = cityZones.map((city)=>(city.fullName));

    const findCities = (city) => {
        const regex = new RegExp(city, "gi");
        let matchCities = timeZoneCity.filter((zone)=>(zone.match(regex)));
        setMatchCity(matchCities);
    }

    const updateCity = (event) => {
        const { target : { value } } = event;
        setCityName(value);
        dispatch(changeInput(value));
        if(value.length > 0) {
            findCities(value);
        } else {
            setMatchCity([]);
        }
    }

    return (
        <>
            <TimeZonePresenter 
                cityNmae={cityNmae}
                updateCity={updateCity}
                matchCity= {matchCity}
            />
        </>
    )
}

export default TimeZoneContainer;