import React from "react";
import deploy from "../../assets/pages/deployment.png";
import Main from "./Main";

export default function Deployment() {
    const data = {
        title: "Deployment",
        img: deploy,
        text: "Web and mobile app publishing is an important process. Both for startups and for business it can become a fundamental component of the successful release of the application."
    }

    return (
        <div>
            <Main data={data}/>
        </div>
    )
}