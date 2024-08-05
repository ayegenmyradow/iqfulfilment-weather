import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Constants } from "../common";

Chart.register(...registerables);

const WindChart = ({ items = {}}) => {
    const chartRef = useRef(null);
    const [gradient, setGradient] = useState(null);
    const [gradientBackground, setGradientBackground] = useState(null);
    useEffect(() => {
        if (chartRef.current) {
            const chart = chartRef.current;
            const ctx = chart.ctx;
            const gradient = ctx.createLinearGradient(0, 200, 200, 200);
            gradient.addColorStop(0, "#FFD8E1");
            gradient.addColorStop(1, "#FF2E5D");
            setGradient(gradient);

            const gradientBackground = ctx.createLinearGradient(200, 200, 200, 0);
            gradientBackground.addColorStop(0, "rgba(255, 216, 225, 3%)");
            gradientBackground.addColorStop(1, "rgba(255, 46, 93, 5%)");
            setGradientBackground(gradientBackground);
        }
    }, []);

    const data = {
        labels: Constants.TIME_LABELS,
        datasets: [
            {
                data: Constants.TIME_LABELS.map(lb => items[lb] ? items[lb].wind_speed : 0),
                fill: true,
                backgroundColor: gradientBackground,
                borderColor: gradient,
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.2,
            },
        ],
    };

    const options = {
        scales: {
            y: {display: false},
            x: {
                ticks: { font: { size: 7 } },
                border: { display: false },
                grid: { drawOnChartArea: false, drawTicks: false, margin: 10 },
            },
        },
        plugins: { legend: { display: false } },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div style={{ height: "106px", flex: "0 0 384px" }}>
            <Line ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default WindChart;
