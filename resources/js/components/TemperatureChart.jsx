import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Constants } from "../common";
Chart.register(...registerables);


const TemperatureChart = ({items = {}}) => {
    const chartRef = useRef(null);
    const [gradient, setGradient] = useState(null);
    const [gradientBackground, setGradientBackground] = useState(null);

    useEffect(() => {
        if (chartRef.current) {
            const chart = chartRef.current;
            const ctx = chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "#7947F7");
            gradient.addColorStop(1, "#4CDFE8");
            setGradient(gradient);

            const gradientBackground = ctx.createLinearGradient(0, 0, 0, 200);
            gradientBackground.addColorStop(0, "rgba(121, 71, 247, 10%)");
            gradientBackground.addColorStop(1, "rgba(76, 223, 232, 10%)");
            setGradientBackground(gradientBackground);
        }
    }, []);

    const data = {
        labels: Constants.TIME_LABELS,
        datasets: [
            {
                data: Constants.TIME_LABELS.map((lb) => items[lb] ? items[lb].temperature : 0),
                fill: true,
                backgroundColor: gradientBackground,
                borderColor: gradient,
                borderWidth: 2,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                ticks: {
                    font: {size: 10, weight: "bold"},
                    padding: 19,
                    stepSize: 10,
                    callback: function (value) {
                        return value + "°C";
                    },
                },
                grid: {
                    drawOnChartArea: true,
                    drawTicks: false,
                    color: "rgba(200,200,200,0.3)",
                },
                border: {
                    dash: [6,6],
                    display: false
                },
            },
            x: {
                ticks: {padding: 15, font: {size: 10, weight: "bold"}},
                border: {display: false,},
                grid: { drawOnChartArea: false, drawTicks: false, margin: 10 },
            },
        },
        plugins: { legend: { display: false }},
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div style={{ height: "156px", width: "100%" }}>
            <Line ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default TemperatureChart;
