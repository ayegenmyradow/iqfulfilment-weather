import React from "react";

function FullMoon({ width = 91, height = 95 }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 272 267"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_bdd_4_271)">
                <mask id="path-1-inside-1_4_271" fill="white">
                    <path d="M233.316 120.023C233.316 164.814 197.006 201.124 152.215 201.124C107.425 201.124 71.1147 164.814 71.1147 120.023C71.1147 75.2327 107.425 38.9229 152.215 38.9229C197.006 38.9229 233.316 75.2327 233.316 120.023Z" />
                </mask>
                <path
                    d="M233.316 120.023C233.316 164.814 197.006 201.124 152.215 201.124C107.425 201.124 71.1147 164.814 71.1147 120.023C71.1147 75.2327 107.425 38.9229 152.215 38.9229C197.006 38.9229 233.316 75.2327 233.316 120.023Z"
                    fill="url(#paint0_linear_4_271)"
                />
                <path
                    d="M231.316 120.023C231.316 163.709 195.901 199.124 152.215 199.124V203.124C198.11 203.124 235.316 165.918 235.316 120.023H231.316ZM152.215 199.124C108.529 199.124 73.1147 163.709 73.1147 120.023H69.1147C69.1147 165.918 106.32 203.124 152.215 203.124V199.124ZM73.1147 120.023C73.1147 76.3373 108.529 40.9229 152.215 40.9229V36.9229C106.32 36.9229 69.1147 74.1282 69.1147 120.023H73.1147ZM152.215 40.9229C195.901 40.9229 231.316 76.3373 231.316 120.023H235.316C235.316 74.1282 198.11 36.9229 152.215 36.9229V40.9229Z"
                    fill="url(#paint1_linear_4_271)"
                    mask="url(#path-1-inside-1_4_271)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_bdd_4_271"
                    x="0.114746"
                    y="0.922852"
                    width="271.201"
                    height="265.201"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="7" />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_4_271"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx="-21" dy="15" />
                    <feGaussianBlur stdDeviation="25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.113438 0 0 0 0 0.148981 0 0 0 0 0.275 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect1_backgroundBlur_4_271"
                        result="effect2_dropShadow_4_271"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="19" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.619608 0 0 0 0 0.423529 0 0 0 0 1 0 0 0 0.4 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect2_dropShadow_4_271"
                        result="effect3_dropShadow_4_271"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect3_dropShadow_4_271"
                        result="shape"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_4_271"
                    x1="148.532"
                    y1="40.3516"
                    x2="148.532"
                    y2="202.552"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.0001" stop-color="#DECFFF" />
                    <stop offset="1" stop-color="#7E2FFF" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_4_271"
                    x1="201.67"
                    y1="-26.4822"
                    x2="163.725"
                    y2="166.454"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default FullMoon;
