import React from "react";
import Header from './Header';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Clients from './Clients';
import Navigation from "./Navigation";




export default function LandingComponents(props) {

    return (
        <div>
            <Navigation/>
            <Header data={props.landingPageData.Header}/>
            <About data={props.landingPageData.About}/>
            <Portfolio data={props.landingPageData.Portfolio}/>
            <Services data={props.landingPageData.Services}/>
            <Clients/>
        </div>
    )
}

