import React from "react";
import SummaryElement from "./SummaryElement";

export default function Summary() {
    return(
        <section>
            <h1>Summary</h1>
            <SummaryElement 
                img="icon-reaction.svg"
                text="Reaction"
                results={80}
                rgb={[255, 85, 85]}
            />
            <SummaryElement 
                img="icon-memory.svg"
                text="Memory"
                results={92}
                rgb={[255, 178, 30]}
            />
            <SummaryElement 
                img="icon-verbal.svg"
                text="Verbal"
                results={61}
                rgb={[0, 187, 143]}
            />
            <SummaryElement 
                img="icon-visual.svg"
                text="Visual"
                results={72}
                rgb={[17, 37, 214]}
            />
            <input type="button" value="Continue" />
        </section>
    );
}