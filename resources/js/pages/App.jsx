import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/WeatherCard";
import DropdownCountry from "../components/DropdownCountry";
import TemperatureComponent from "../components/TemperatureComponent";
import WindComponent from "../components/WindComponent";
import HumidityComponent from "../components/HumidityComponent";
import axios from "axios";

function formatDate(date) {
    let d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
}

function App() {
    const locations = React.useMemo(() => window.__INITIAL_STATE__.locations);
    const [activeLocation, setActiveLocation] = useState(locations[0]);
    const [stats, setStats] = useState([]);

    useEffect(() => {
        axios.get("/api/weather-logs?id=" + activeLocation.id + "&date=" + formatDate(new Date())).then((response) => {
            setStats(response.data);
            console.log(response.data)
        });
    }, [activeLocation.id]);
    return (
        <main className="main-wrapper">
            <Sidebar />
            <div>
                <Navbar />
                <div className="content">
                    <div className="weather">
                        <h2 style={{ margin: "0 0 42px" }} className="title">
                            Weather Reports
                        </h2>
                        <div className="list">
                            {locations.map((location) => (
                                <Card key={location.id} location={location} />
                            ))}
                        </div>
                    </div>
                    <div className="stats">
                        <div
                            className="flex-container"
                            style={{ marginBottom: 56 }}
                        >
                            <h2 className="title">Statistics</h2>
                            <DropdownCountry
                                options={locations}
                                onSelect={(l) => setActiveLocation(l)}
                            />
                        </div>
                        <TemperatureComponent {...stats} id={activeLocation.id}/>
                        <WindComponent {...stats} id={activeLocation.id}  />
                        <HumidityComponent {...stats} id={activeLocation.id}/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
