import React from "react";
import {Link} from "react-router-dom"
import web from '../assets/web.svg';
import mobileDev from '../assets/mobileDev.svg';
import automation from '../assets/automation.svg'
import deployment from '../assets/deployment.svg'
import ux from '../assets/ux.svg'
import testing from '../assets/test.svg'
import fish from '../assets/fish.png';
import reptilia from '../assets/reptilia.png';


export default function Services() {

    const ServiceData = [
        {
            img: web,
            text: "Web Development",
            link: "webApp"
        },
        {
            img: mobileDev,
            text: "Mobile Development",
            link: "mobileApp"
        },
        {
            img: ux,
            text: "UI/UX Design",
            link: "uxUi"
        },
        {
            img: testing,
            text: "Testing",
            link: "testing"
        },
        {
            img: deployment,
            text: "Deployment",
            link: "deployment"
        },
        {
            img: automation,
            text: "Automation",
            link: "automation"
        }
    ]

    return (
        <div id="services" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2 className="text-left">Services</h2>
                </div>
                <div className="row justify-content-around">
                    {ServiceData ? ServiceData.map((d, i) => (
                        <div className="col-lg-5 col-md-4 my-5" key={i}>
                            <div className="row">
                                <div className="col-lg-3">
                                    <img className="img-fluid" src={d.img} alt=""/>
                                </div>
                                <div className="col-lg-9 ">
                                    <div className="service-info text-lg-left">
                                        <h3 className="text-uppercase text-center text-lg-left mx-auto">{d.text}</h3>
                                        <Link to={`/${d.link}`}>More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )): null}

                </div>
            </div>
            <img className="fish d-none d-lg-block" src={fish} alt=""/>
            <img className="reptilia d-none d-lg-block" src={reptilia} alt=""/>
        </div>
    );

}


