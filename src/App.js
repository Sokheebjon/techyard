import React, {useState, useEffect} from 'react';
import LandingComponents from "./components/LandingComponents";
import JsonData from './data/data.json';
import Contact from "./components/Contact";
import MapCom from "./components/MapCom";
import Footer from "./components/Footer";
import MobileApp from "./components/Pages/MobileApp";
import WebApp from "./components/Pages/WebApp";
import Automation from "./components/Pages/Automation";
import Deployment from "./components/Pages/Deployment";
import Testing from "./components/Pages/Testing";
import UxUi from "./components/Pages/UxUi";
import NotFound from "./components/NotFound";
import {Redirect, Route, Switch} from "react-router-dom";


export default function App() {
    const [landingPageData, setLandingPageData] = useState({})


    function getLandingPageData() {
        setLandingPageData(JsonData)
    }

    useEffect(() => {
        getLandingPageData();
    }, [])

    const routes = [
        {
            path: "/webApp",
            component: WebApp
        },
        {
            path: "/mobileApp",
            component: MobileApp
        },
        {
            path: "/uxUi",
            component: UxUi
        },
        {
            path: "/testing",
            component: Testing
        },
        {
            path: "/deployment",
            component: Deployment
        },
        {
            path: "/automation",
            component: Automation
        }
    ]
    console.log = console.warn = console.error = () => {};
    return (
        <div>
            <Switch>
                <Route exact path="/" render={() => <Redirect
                    to={{
                        pathname: "/landing",
                        landingPageData: {landingPageData}
                    }}
                />}/>
                <Route exact path="/landing" render={() => <LandingComponents landingPageData={landingPageData}/>}/>
                {routes.map((r, i)=>
                    <Route exact path={r.path}  component={r.component} key={i}/>
                )}
                <Route exact path='*' render={() => <NotFound/>}/>
            </Switch>
            <Contact data={landingPageData.Contact}/>
            <MapCom/>
            <Footer/>
        </div>
    )

}

