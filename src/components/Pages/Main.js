import React from "react";
import Navigation from "../Navigation"
import "./style.css";
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {CgFacebook} from "react-icons/cg";

export default function Main(props) {

    return (
        <div>
            <div id="main">
                <Navigation transparent={true}/>
                <div className="container">
                    <div className="m-done w-100 d-flex">
                        <div>
                            <h2 className="text-white font-weight-bold">Product? Done!</h2>
                            <h1 className="display-3 font-weight-bold">{props.data.title}</h1>
                        </div>
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
            <div className="bg-white">
                <img className="img-fluid" src={props.data.img} alt=""/>
                <div className="container" style={{padding: "160px 0"}}>
                    <h4>{props.data.title}</h4>
                    <p className="font-weight-bold mb-0">{props.data.text}</p>
                </div>
            </div>

        </div>
    )
}