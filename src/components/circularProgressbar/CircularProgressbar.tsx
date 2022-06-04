import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export default function StyledProgressbar(props: any) {
    return (
        <CircularProgressbar 
            value={props.percentage} 
            text={`${props.percentage}%`}
            strokeWidth={10}
            styles={{
                root: {
                    width: "60%",
                    display: "flex",
                    margin: "0 auto",
                    maxWidth: 180
                },
                path: {
                    stroke: '#19C706',
                    strokeLinecap: 'butt',
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                },
                trail: {
                  stroke: '#2A2A2A',
                },
                text: {
                    fontFamily: 'Verdana',
                    letterSpacing: 0.5,
                    fill: '#C9C9C9',
                    fontSize: '17px',
                    fontWeight: 'bold',
                },
              }}
        />
    )
}
