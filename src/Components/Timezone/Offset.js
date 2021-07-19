import React from "react";
import moment from "moment-timezone";

const Offset = ({zone, defaultOffset}) => {
    const getGmt = moment.tz(zone).utcOffset() / 60;
    return (
        <span>{getGmt},{defaultOffset}</span>
    )
}

export default Offset