import React from "react";
import './Style.css'
import arrow from "../assets/right-arrow.svg"
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {CgFacebook} from "react-icons/cg";


export default function Header(props) {

    return (
        <header id="header">
            <div className="intro">
                <div className="container">
                    <div className="header-padding row">
                        <h1 className="display-1 mx-auto mb-5 ">
                            {props.data ? props.data.title : "Loading"}
                        </h1>
                        <div className="mt-5 w-100">
                            <p className="paragraph-header text-lg-left text-center  mt-5 mb-5 mb-lg-0">
                                {props.data ? props.data.paragraph : "Loading"}
                            </p>
                            <div className="d-flex">
                                <a
                                    href="#"
                                    className="btn btn-more btn-lg m-lg-0 m-auto mt-5"
                                >
                                    More
                                    <img src={arrow} alt=""/>
                                </a>
                                <ul className="list-unstyled my-5 ml-auto d-none d-lg-flex">
                                    <li className="mr-2">
                                        <a href="https://telegram.org/" target="_blank">
                                            <FaTelegramPlane size={25} color={'#ffffff'}/>
                                        </a>
                                    </li>
                                    <li className="mr-2">
                                        <a href="https://instagram.com/" target="_blank">
                                            <AiFillInstagram size={25} color={'#ffffff'}/>
                                        </a>
                                    </li>
                                    <li className="mr-2">
                                        <a href="https://facebook.com/" target="_blank">
                                            <CgFacebook size={25} color={'#ffffff'}/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}


