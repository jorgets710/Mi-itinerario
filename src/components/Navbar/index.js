import React from "react";
import "./navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";

export default function Navbar(params) {

    return (
        <>
            <ul className="nav nav-tabs justify-content-end">
                <li className="nav-item">
                    
                    <a className="nav-link active" aria-current="page" href="#"><LinkRouter to="/">Home</LinkRouter></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><LinkRouter to="/cities">Cities</LinkRouter></a>
                </li>
                <li className="nav-item  ">
                    <a className="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><FaUserCircle className="logo-nav" /></a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#"><LinkRouter to="/singUP">Sing Up</LinkRouter></a></li>
                        <li><a className="dropdown-item" href="#"><LinkRouter to="/singIn">Sing In</LinkRouter></a></li>

                    </ul>
                </li>
                
                


            </ul>

        </>
    )

}