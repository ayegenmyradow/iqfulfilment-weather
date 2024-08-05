import React from "react";
import LineChart from "./TemperatureChart";
import DropdownDate from "./DropdownDate";
import { Utils }  from '../common';

function TemperatureComponent({ data, comparing, id }) {
    const days = Utils.getLastNDays(10);
    const [selectedDate, setDate] = React.useState(days[0]);
    const [info, setInfo] = React.useState({});
    
    React.useEffect(() => {
        setDate(days[0]);
        setInfo({data, comparing});
    }, [id, data]);

    const changeDate = (dt) => {
        setDate(dt);

        axios.get("/api/weather-logs?id=" + id + "&date=" + dt).then((response) => {
            const {data, comparing} = response.data;
            setInfo({data, comparing});
        });
    }
    
    return (
        <div style={{ marginBottom: 69 }}>
        <div
            className="flex-container"
            style={{ marginBottom: 35 }}
        >
            <h3 className="chart-title">
                Temperature (Last 24 Hours)
            </h3>
            <DropdownDate
                options={days}
                selected={selectedDate}
                onSelect={changeDate}
            />
        </div>
        <LineChart items={info.data} id={id}/>
    </div>
    )
}

export default TemperatureComponent;