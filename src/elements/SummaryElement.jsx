import React from "react";

export default function SummaryElement(props) {
    return(
        <div 
            className="statistic" 
            style={{backgroundColor: "rgba("+props.rgb+", 0.05)"}}
        >
            <div>
                <img src={props.img} />
                <h2 
                    style={{color: "rgb("+props.rgb+")"}}
                >{props.text}</h2>
            </div>
            <p>{props.results} / 100</p>
        </div>
    );
}