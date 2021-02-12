import React from "react";
import useWindowSize from "./useWindowSize";
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import {GrNext, GrPrevious} from 'react-icons/gr'
import 'pure-react-carousel/dist/react-carousel.es.css';
import clients from '../assets/clients.png';
import clientsVec from '../assets/clients.svg';
import BMV from '../assets/bmwLogo.png';
import EA from '../assets/EALogo.png';
import nike from '../assets/nikeLogo.png';
import TRLogo from '../assets/trLogo.png';
import ecommerce from '../assets/industries/ecommerce.svg';
import education from '../assets/industries/education.svg';
import finance from '../assets/industries/finance.svg';
import hr from '../assets/industries/hr.svg';
import logistics from '../assets/industries/logistics.svg';
import medical from '../assets/industries/medical.svg';
import production from '../assets/industries/production.svg';
import services from '../assets/industries/services.svg';
import socialNet from '../assets/industries/socialNet.svg';



export default function Clients() {
    const windowSize = useWindowSize();
    const clientsLogo = [
        {
            img: EA
        },
        {
            img: BMV
        },
        {
            img: nike
        },
        {
            img: TRLogo
        },
        {
            img: BMV
        },
        {
            img: nike
        },
        {
            img: TRLogo
        }
    ]
    const industries = [
        {
            img: logistics,
            name: "Logistics"
        },
        {
            img: ecommerce,
            name: "E-commerce",
            grid: "col-lg-2"
        },
        {
            img: hr,
            name: "HR"
        },
        {
            img: finance,
            name: "Finance"
        },
        {
            img: medical,
            name: "Medicine"
        },
        {
            img: production,
            name: "Production"
        },
        {
            img: services,
            name: "Services"
        },
        {
            img: education,
            name: "Education"
        },
        {
            img: socialNet,
            name: "Social Networking"
        }

    ]

    return (
        <div id="clients">
            <div className="container">
                <h1 className="pt-5">CLIENTS</h1>
                {windowSize === "lg" ?
                    <ul className="list-unstyled d-flex my-5">
                        {clientsLogo ? clientsLogo.map((img, i) => (
                            <li className="mx-auto" key={i}>
                                <img src={img.img} alt=""/>
                            </li>
                        )) : null}
                    </ul> :
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={30}
                        totalSlides={4}
                        infinite={true}
                        className="text-center"
                    >
                        <Slider>
                            <Slide index={0}  className="mt-5">
                                <img className="img-fluid" src={BMV} alt=""/>
                            </Slide>
                            <Slide index={1} className="mt-5">
                                <img className="img-fluid" src={EA} alt=""/>
                            </Slide>
                            <Slide index={2} className="mt-5">
                                <img className="img-fluid" src={nike} alt=""/>
                            </Slide>
                            <Slide index={2} className="mt-5">
                                <img className="img-fluid" src={TRLogo} alt=""/>
                            </Slide>

                        </Slider>
                        <ButtonBack className="btn pureCarBtn pureCarBtn-prev">
                            <GrPrevious size={35}/>
                        </ButtonBack>
                        <ButtonNext className="btn pureCarBtn pureCarBtn-next">
                           <GrNext size={35}/>
                        </ButtonNext>
                    </CarouselProvider>
                }
                <h1 className="pt-5 mb-5">INDUSTRIES</h1>
                <div className="row justify-content-between">
                    {industries ? industries.map((val, i) => (
                        <div className="col-lg-1 col-md-4 col-4 text-center" key={i}>
                            <img src={val.img} alt=""/>
                            <p className="font-weight-bold">{val.name}</p>
                        </div>
                    )) : null}
                </div>
            </div>
            <img style={{zIndex: 10}} className="clients d-none d-lg-block" src={clients} alt=""/>
            <img className="clients img-fluid d-none d-lg-block" src={clientsVec} alt=""/>
        </div>
    );
}