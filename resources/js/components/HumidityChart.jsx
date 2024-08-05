import React, { useRef, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Constants } from "../common";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const HumidityChart = ({ items = {} }) => {
    const data = {
        labels: Constants.TIME_LABELS,
        datasets: [
            {
                data: Constants.TIME_LABELS.map((lb) => items[lb] ? items[lb].humidity : 0),
                backgroundColor: '#F5F0FF',
                hoverBackgroundColor: "#7947F7",
                border: 0,
                pointRadius: 0,
                borderRadius: 2,
            },
        ],
    };

    const options = {
        scales: {
            y: {display: false},
            x: {
                ticks: {padding: 14, font: {size: 10}},
                border: {display: false,},
                grid: { drawOnChartArea: false, drawTicks: false, margin: 10 },
            },
        },
        plugins: { legend: { display: false }},
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div style={{ height: "128px", flex: "0 0 402px" }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default HumidityChart;
