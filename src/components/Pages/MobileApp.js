import React from "react";
import Main from "./Main";
import mobile from "../../assets/pages/mobileDevelopment.png"


export default function MobileApp() {
    const data = {
        title: "Mobile development",
        img: mobile,
        text: "Mobile has already become prevalent over the desktop. In current market`s conditions, a mobile application is a must for businesses and startups.\n" +
            "\n" +
            "When a company is faced with the issue of mobile app development, we offer our customers a native mobile development, as it allows delivering the best customer service and gives wider options for post-MVP development."
    }

    return (
        <div>
            <Main data={data}/>
        </div>
    )
}