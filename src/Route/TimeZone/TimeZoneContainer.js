import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { changeInput } from "../../modules/timezone_search";
import TimeZonePresenter from "./TimeZonePresenter";

import cityZones from "../../Components/cityZones";

const TimeZoneContainer = () => {
    
    const dispatch = useDispatch();
    const [cityName, setCityName] = useState("");
    
    const timeZoneCity = cityZones.map((city)=>(city.fullName));

    const updateCity = (event) => {
        const { target : { value } } = event;
        const regex = new RegExp(value, "gi");
        
        setCityName(value);
        if(value.length > 0) {
            let matchCities = timeZoneCity.filter((zone)=>(zone.match(regex)));
            dispatch(changeInput(value, matchCities));
        }
    }

    return (
        <>
            <TimeZonePresenter 
                cityName={cityName}
                updateCity={updateCity}
            />
        </>
    )
}

export default TimeZoneContainer;