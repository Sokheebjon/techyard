import React from "react";
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {CgFacebook} from "react-icons/cg";

export default function Contacts(props) {

    return (
        <div>
            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Our Contacts</h1>
                            <p className="h4 text-danger font-weight-bold">{props.data ? props.data.phone : "loading ..."}
                                <br/>
                                <p className="font-weight-bold text-muted">Phone for information</p></p>
                            <p className="font-weight-bold text-muted">The address: <br/>
                                <p style={{color: "#000"}}
                                   className="lead font-weight-bold">{props.data ? props.data.address : "loading..."}</p>
                            </p>
                            <p className="font-weight-bold text-muted">
                                Mail: <br/>
                                <p style={{color: "#000"}} className="font-weight-bold h5"><small
                                    className="text-danger h5">Mon-Fri</small> {props.data ? props.data.workHours : "loading ..."}
                                    <br/> Sat-Sun Closed
                                </p>
                            </p>
                            <ul className="list-unstyled w-25 my-5 d-flex">
                                <li className="mr-3">
                                    <a href="https://telegram.org/" target="_blank">
                                        <FaTelegramPlane size={25} color={'#C73030'}/>
                                    </a>
                                </li>
                                <li className="mr-3">
                                    <a href="https://instagram.com/" target="_blank">
                                        <AiFillInstagram size={25} color={'#C73030'}/>
                                    </a>
                                </li>
                                <li className="mr-3">
                                    <a href="https://facebook.com/" target="_blank">
                                        <CgFacebook size={25} color={'#C73030'}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <form>
                                <div className="form-group">
                                    <label className="font-weight-bold" htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name"
                                           placeholder="Write your name"/>
                                </div>
                                <div className="d-lg-flex">
                                    <div className="form-group mr-lg-2">
                                        <label className="font-weight-bold" htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email" placeholder="E-mail"/>
                                    </div>
                                    <div className="form-group ml-lg-2">
                                        <label className="font-weight-bold" htmlFor="phoneNum">Phone number</label>
                                        <input type="phone" className="form-control" id="phoneNum" placeholder="(__)"/>
                                    </div>
                                </div>
                                <div className="d-lg-flex">
                                    <div className="form-group mr-lg-2">
                                        <label className="font-weight-bold" htmlFor="service">Service type</label>
                                        <input type="service" className="form-control" id="service"
                                               placeholder="Write services"/>
                                    </div>
                                    <div className="form-group ml-lg-2">
                                        <label className="font-weight-bold" htmlFor="country">Country</label>
                                        <input type="email" className="form-control" id="country" placeholder="Write your country"/>
                                    </div>

                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold" htmlFor="textarea">About project</label>
                                    <textarea name="aboutProject" className="form-control" placeholder="Message" id="textarea" cols="10"></textarea>
                                </div>
                                <button type="submit" className="btn btn-lg subBtn">More</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
