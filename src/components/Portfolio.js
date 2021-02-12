import React from "react";
import carImage1 from '../assets/carouselmage1.png'
import carImage2 from '../assets/carouselmege2.png'
import {Link} from "react-router-dom"
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'

export default function Portfolio(props) {

    return (
        <div id="portfolio">
            <div className="container">
                <h2>{props.data ? props.data.title : "loading..."}</h2>
                <h5 className="font-weight-bold mb-0">{props.data ? props.data.text : "loading ..."}</h5>
                <p className="text-muted">{props.data? props.data.paragraph: "loding ..."}</p>
                <div id="carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={carImage1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={carImage2} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel" role="button"
                       data-slide="prev">
                        <IoIosArrowBack size={50} color="black"/>
                    </a>
                    <a className="carousel-control-next" href="#carousel" role="button"
                       data-slide="next">
                        <IoIosArrowForward size={50} color="black"/>
                    </a>
                </div>
                <p className="link mt-5">Link : <a href="https://it-academy.uz/" target="_BLANK" className="text-danger">www.it-academy.uz</a></p>
            </div>
        </div>
    );

}


