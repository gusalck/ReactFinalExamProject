import React from "react";
import "./SVGPattern.css";

function SVGPattern() {
    return (
        <svg className="svg-pattern">
            <defs>
                <filter id="outline">
                    <feGaussianBlur stdDeviation="1" />
                    <feComponentTransfer>
                        <feFuncA type="table" tableValues="-3 4 -3" />
                    </feComponentTransfer>
                </filter>
                <linearGradient id="bwGrad" gradientTransform="rotate(35)">
                    <stop offset="0%" stopColor="#fff" />
                    <stop offset="75%" stopColor="#111" />
                </linearGradient>
                <pattern
                    id="hex"
                    viewBox="0 0 150 180"
                    width="150"
                    height="180"
                    patternUnits="userSpaceOnUse"
                    patternTransform="scale(0.3)"
                >
                    <g id="h">
                        <path
                            fill="#4F4F4F"
                            d="M 2 42 l 23 -40 h 46 l 23 40 l -23 40 h -46 z"
                        />
                        <path
                            opacity="0.3"
                            fill="url(#bwGrad)"
                            filter="url(#outline)"
                            d="M 2 42 l 23 -40 h 46 l 23 40 l -23 40 h -46 z"
                        />
                    </g>
                    <use href="#h" x="75" y="45" />
                    <use href="#h" x="75" y="-45" />
                    <use href="#h" x="-75" y="45" />
                    <use href="#h" x="-75" y="-45" />
                    <use href="#h" x="0" y="90" />
                    <use href="#h" x="75" y="135" />
                    <use href="#h" x="-75" y="135" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#616161" />
            <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
    );
}

export default SVGPattern;