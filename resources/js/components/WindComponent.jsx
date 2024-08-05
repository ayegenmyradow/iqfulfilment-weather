import React, { useEffect } from "react";
import WindChart from "./WindChart";
import DropdownDate from "./DropdownDate";
import UpDownNumber from "./UpDownNumber";
import { Utils } from "../common";

function WindComponent({ data = {}, comparing = {}, id }) {
    const [info, setInfo] = React.useState({
        comparingWindSpeed: 0,
    });
    const days = Utils.getLastNDays(10);
    const [selectedDate, setDate] = React.useState(days[0]);

    useEffect(() => {
        setDate(days[0]);
        let avgWindSpeed = 0;
        let count = 0;
        let isUp = false;
        Object.keys(data).forEach((key) => {
            avgWindSpeed += data[key].wind_speed;
            count++;
        });
        avgWindSpeed = avgWindSpeed / count;
        let percentage = 0;
        if (avgWindSpeed > comparing.wind_speed) {
            isUp = true;
            percentage = (
                ((avgWindSpeed - comparing.wind_speed) / comparing.wind_speed) *
                100
            ).toFixed(2);
        }

        setInfo({
            data: data,
            percentage,
            isUp,
            avgWindSpeed: avgWindSpeed.toFixed(2),
        });
    }, [id, data]);

    const changeDate = (dt) => {
        setDate(dt);

        axios.get("/api/weather-logs?id=" + id + "&date=" + dt).then((response) => {
            const {data, comparing} = response.data;
            let avgWindSpeed = 0;
            let count = 0;
            let isUp = false;
            Object.keys(data).forEach((key) => {
                avgWindSpeed += data[key].wind_speed;
                count++;
            });
            avgWindSpeed = avgWindSpeed / count;
            let percentage = 0;
            if (avgWindSpeed > comparing.wind_speed) {
                isUp = true;
                percentage = (
                    ((avgWindSpeed - comparing.wind_speed) / comparing.wind_speed) *
                    100
                ).toFixed(2);
            }
    
            setInfo({
                data: data,
                percentage,
                isUp,
                avgWindSpeed: avgWindSpeed ? avgWindSpeed.toFixed(2):0,
            });    
        });
    }
    
    return (
        <div style={{ marginBottom: 69 }}>
            <div className="flex-container" style={{ marginBottom: 35 }}>
                <h3 className="chart-title">Wind (Last 24 Hours)</h3>
                <DropdownDate
                    options={days}
                    selected={selectedDate}
                    onSelect={changeDate}
                />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: "1", textAlign: "center" }}>
                    <h3 className="wind-speed">{info.avgWindSpeed} km/h</h3>
                    <UpDownNumber num={info.percentage} isUp={info.isUp} />
                </div>
                <WindChart items={info.data} />
            </div>
        </div>
    );
}

export default WindComponent;
