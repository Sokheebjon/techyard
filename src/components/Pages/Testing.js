import React from "react";
import testing from "../../assets/pages/Testing.png";
import Main from "./Main";

export default function Testing() {

    const data = {
        title: "Testing",
        img: testing,
        text: "Quality Assurance and Testing is a key part of the development cycle from technical and business point of view. It is QA that makes sure your product will work as it should and will not crash or lag all of a sudden upon performing its tasks."
    }


    return (
        <div>
            <Main data={data}/>
        </div>
    )
}