import React from "react";
import Rain from "../icons/Rain";
import ClearSunny from "../icons/ClearSunny";
import ClearMoon from "../icons/ClearMoon";
import Cloudy from "../icons/Cloudy";

const now = new Date();
const hour = now.getHours();

const icons = {
    Clear:
        hour >= 6 && hour < 18 ? (
            <ClearSunny height={95} width="100%" />
        ) : (
            <ClearMoon height={95} width="100%" />
        ),
    Clouds: <Cloudy height={95} width="100%" />,
    Rain: <Rain height={95} width="100%" />,
};

function Card({ location }) {
    const { city, country_code, lastLog } = location;
    const temp = lastLog ? Math.round(lastLog.temperature) : 0;
    const type = lastLog ? lastLog.weather_condition : "";
    return (
        <div className="w-card">
            <h3>{city}</h3>
            <p>{country_code}</p>
            <div className="icon">
                {icons[type] || <Rain height={95} width="100%" />}
            </div>
            <b>
                <span>{temp}</span>
                <span>º</span>
            </b>
        </div>
    );
}

export default Card;
