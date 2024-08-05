import React from "react";
import HumidityChart from "./HumidityChart";
import DropdownDate from "./DropdownDate";
import UpDownNumber from "./UpDownNumber";
import { Utils } from "../common";

function HumidityComponent({ data = [], comparing = {}, id }) {
    const days = Utils.getLastNDays(10);
    const [selectedDate, setDate] = React.useState(days[0]);

    const [info, setInfo] = React.useState({
        comparingWindSpeed: 0,
    });
    React.useEffect(() => {
        setDate(days[0]);
        let avgHumidity = 0;
        let count = 0;
        let isUp = false;
        Object.keys(data).forEach((key) => {
            avgHumidity += data[key].humidity;
            count++;
        });
        avgHumidity = avgHumidity / count;
        let percentage = 0;
        if (avgHumidity > comparing.humidity) {
            isUp = true;
            percentage = (
                ((avgHumidity - comparing.humidity) / comparing.humidity) *
                100
            ).toFixed(2);
        }

        setInfo({
            data: data,
            percentage,
            isUp,
            avgHumidity: avgHumidity.toFixed(2),
        });
    }, [id, data]);

    const changeDate = (dt) => {
        setDate(dt);

        axios.get("/api/weather-logs?id=" + id + "&date=" + dt).then((response) => {
            const {data, comparing} = response.data;
            let avgHumidity = 0;
            let count = 0;
            let isUp = false;
            Object.keys(data).forEach((key) => {
                avgHumidity += data[key].humidity;
                count++;
            });
            avgHumidity = avgHumidity / count;
            let percentage = 0;
            if (avgHumidity > comparing.humidity) {
                isUp = true;
                percentage = (
                    ((avgHumidity - comparing.humidity) / comparing.humidity) *
                    100
                ).toFixed(2);
            }
    
            setInfo({
                data: data,
                percentage,
                isUp,
                avgHumidity: avgHumidity ? avgHumidity.toFixed(2) : 0,
            });
    
        });
    }
    return (
        <div>
            <div className="flex-container" style={{ marginBottom: 35 }}>
                <h3 className="chart-title">Humidity (Last 24 Hours)</h3>
                <DropdownDate options={days} onSelect={changeDate} selected={selectedDate}/>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: "1", textAlign: "center" }}>
                    <h3 className="humidity-percentage">{info.avgHumidity}%</h3>
                    <UpDownNumber num={info.percentage} isUp={info.isUp} />
                </div>
                <HumidityChart items={info.data} />
            </div>
        </div>
    );
}

export default HumidityComponent;
