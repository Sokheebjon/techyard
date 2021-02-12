import React from "react";
import Main from "./Main";
import web from "../../assets/pages/web.png"

export default function WebApp() {

    const data = {
            title: "Web development",
            img: web,
            text: "Web application development has several objectives. It helps to shorten cycles of deploying of the product and reaches a significant amount of users on many different devices.\n" +
                "\n" +
                "Good design and smooth development works side by side. Beautiful looking websites also need to perform optimally - for users and search engines. Our award-winning design and development team brings eye-catching designs to life with functionality that wins the heart of the users and drives them to take their desired action."
        }



    return (
        <div>
            <Main data={data}/>
        </div>
    )
}