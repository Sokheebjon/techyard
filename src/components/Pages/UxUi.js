import React from "react";
import uxUi from "../../assets/pages/uxui.png";
import Main from "./Main";

export default function UxUi() {

    const data = {
        title: "UX/UI design",
        img: uxUi,
        text: "Web and mobile app design is much more than just about visual effects. It is about the relationship between the product and the user. While working on any project, we primarily think about the end user and his/her impression of the product.\n" +
            "\n" +
            "User interface and user experience design services help to create a product that will bring maximum comfort and benefit to the user. It is crucial for businesses of all sizes. After all, from a large company to startup user acquisition and retention are the key objectives."
    }


    return (
        <div>
            <Main data={data}/>
        </div>
    )
}