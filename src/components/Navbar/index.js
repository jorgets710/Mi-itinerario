import React from "react";
import "./navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";

export default function Navbar(params) {

    return (
        <>
            <ul className="nav  justify-content-end colorNav">
                <li className="nav-item">
                    <LinkRouter className="nav-link  hover-underline-animation" aria-current="page" to="/">Home</LinkRouter>
                </li>
                <li className="nav-item">
                <LinkRouter className="hover-underline-animation nav-link" aria-current="page" to="/cities">Cities</LinkRouter>    
                </li>
                <li className="nav-item  ">
                    <a className="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><FaUserCircle className="logo-nav" /></a>
                    <ul className="dropdown-menu">
                        <li>
                        <LinkRouter className="nav-link active hover-underline-animation" aria-current="page" to="/singUp">Sing Up</LinkRouter>
                        </li>
                        <li>
                        <LinkRouter className="nav-link active hover-underline-animation" aria-current="page" to="/singIn">Sing In</LinkRouter>
                        </li>

                    </ul>
                </li>
            </ul>

        </>
    )

}
