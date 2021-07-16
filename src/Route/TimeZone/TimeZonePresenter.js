import React from "react";
import ListCities from "../../Components/Timezone/ListCites";

const TimeZonePresenter = ({cityNmae, updateCity, matchCity}) => {

    return (
        <>
            <div>Time Zone</div>
            <div>
                <div>
                    <input 
                        type="text"
                        placeholder="city name"
                        value={cityNmae}
                        onChange={updateCity}
                    />
                </div>

                <div>
                    <ListCities 
                        matchCity={matchCity}
                    />
                </div>
            </div>
            
        </>
    )
}

export default TimeZonePresenter;