import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import ListCities from "../../Components/Timezone/ListCites";
import TimeZoneContainer from "../../Components/Timezone/TimeZoneContainer"

const TimeZonePresenter = ({cityName, updateCity}) => {
    const { input : input_state} = useSelector((state) => (state.timezone_search),shallowEqual);
    
    return (
        <>
            <div>Time Zone</div>
            <div>
                <div>
                    <input 
                        type="text"
                        placeholder="city name"
                        value={input_state ? cityName : ""}
                        onChange={updateCity}
                    />
                </div>

                <div>
                    <ListCities />
                </div>
            </div>
            <TimeZoneContainer/>
        </>
    )
}

export default TimeZonePresenter;