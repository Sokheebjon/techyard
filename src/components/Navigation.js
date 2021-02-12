import React from "react";
import "./Style.css";
import $ from 'jquery';
import {Link} from 'react-router-dom';
import menuBtn from "../assets/menu.svg"
import {HiOutlineMail} from 'react-icons/hi'
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {CgFacebook} from "react-icons/cg";


export default function Navigation(props) {

    $('body').css('padding-top', $('.navbar').outerHeight() + 'px')


    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }

    console.log(props.transparent)

    return (
        <nav id="navbar" style={props.transparent === true ? null : {backgroundColor: "#202020"}}
             className="navbar navbar-expand-lg fixed-top">
            <div className="container pl-0 py-2 pt-3">
                <Link to="./landing" className="navbar-brand text-white font-weight-bolder">
                    TECH YARD SOLUTIONS
                </Link>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbar-1"
                >
                    <img src={menuBtn} alt=""/>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbar-1"
                >
                    <ul className="navbar-nav w-100 text-uppercase m-auto">
                        <li className="nav-item text-lg-left text-center ml-lg-4 mr-lg-4">
                            <a href="#about" className="nav-link text-white">
                                About us
                            </a>
                        </li>
                        <li className="nav-item text-lg-left text-center mr-lg-4">
                            <a href="#portfolio" className="nav-link text-white">
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item text-lg-left text-center mr-lg-4">
                            <a href="#services" className="nav-link text-white">
                                Services
                            </a>
                        </li>
                        <li className="nav-item text-lg-left text-center mr-lg-4">
                            <a href="#contact" className="nav-link text-white">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item ml-auto d-none d-lg-block text-lowercase">
                            <a to="https://www.google.com/" className="nav-link text-white">
                                <HiOutlineMail/> techyard@info.com
                            </a>
                        </li>
                    </ul>
                    <ul className="list-unstyled w-50 mx-auto my-5 d-lg-none d-flex">
                        <li className="mr-2 mx-auto">
                            <a href="https://telegram.org/" target="_blank">
                                <FaTelegramPlane size={25} color={'#ffffff'}/>
                            </a>
                        </li>
                        <li className="mr-2 mx-auto">
                            <a href="https://instagram.com/" target="_blank">
                                <AiFillInstagram size={25} color={'#ffffff'}/>
                            </a>
                        </li>
                        <li className="mr-2 mx-auto">
                            <a href="https://facebook.com/" target="_blank">
                                <CgFacebook size={25} color={'#ffffff'}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

