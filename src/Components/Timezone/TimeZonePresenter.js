import React from "react";
import cityZones from "../cityZones";
import Offset from "./Offset";

import { useSelector } from "react-redux";

const TimeZonePresenter = () => {
    const { zoneName, defaultOffset } = useSelector((state)=>(state.timezone_mod));


    return (
        <>
            {zoneName && (
                zoneName.map((zone, index)=>(
                    <div key={index}>
                        <span>{zone}</span>
                        <Offset 
                            zone={zone}
                            defaultOffset={defaultOffset}
                        />
                    </div>
                ))
            )}
        </>
    )
}

export default TimeZonePresenter;