import React from "react";

export default function Result() {
    return(
        <aside>
            <h2>Your Result</h2>
            <div className="circle">
                <h1>76</h1>
                <h2>of 100</h2>
            </div>
            <h1>Great</h1>
            <h2>You scored higher than 65% of<br />
            the people who have taken<br />
            these tests.</h2>
        </aside>
    );
}