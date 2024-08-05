import React from "react";

function UpDownNumber({ num, isUp }) {
    if (isUp) {
        return (
            <b>
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        verticalAlign: "middle",
                        marginRight: 8,
                        marginBottom: 2,
                    }}
                >
                    <circle cx="9" cy="9" r="8.5" stroke="#13CD3C" />
                    <path
                        d="M5.5 11L8.1482 7.59517C8.56725 7.05639 9.39099 7.08649 9.76961 7.65441L12 11"
                        stroke="#13CD3C"
                    />
                </svg>
                <span
                    style={{
                        fontSize: 16,
                        lineHeight: "19px",
                        color: "#13CD3C",
                    }}
                >
                    {num}%
                </span>
            </b>
        );
    }
    return (
        <b>
            <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    verticalAlign: "middle",
                    marginRight: 8,
                    marginBottom: 2,
                }}
            >
                <circle
                    cx="9"
                    cy="9"
                    r="8.5"
                    transform="matrix(1 0 0 -1 0.553711 18)"
                    stroke="#FF2F5E"
                />
                <path d="M5.05371 8L9.28448 12L13.5537 8" stroke="#FF2F5E" />
            </svg>
            <span
                style={{ fontSize: 16, lineHeight: "19px", color: "#FF2F5E" }}
            >
                -{num}%
            </span>
        </b>
    );
}

export default UpDownNumber;
