import React from "react";
import automation from "../../assets/pages/automation.png";
import Main from "./Main";

export default function Automation() {
    const data = {
        title: "Automation",
        img: automation,
        text: "IT automation is the process of creating software and systems to replace repeatable processes and reduce manual intervention. It accelerates the delivery of IT infrastructure and applications by automating manual processes that previously required a human touch. Our team strategize to create the best solution, automating human touch process. We offer brilliant automation implementations that are used in real world, solving both time and energy consuming problems."
    }


    return (
        <div>
            <Main data={data}/>
        </div>
    )
}