import React from "react";
import "./navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import axios from "axios";
import { actionType } from "../../reducer";
import Loguito from '../../assets/image/logo.png'
import Swal from "sweetalert2";


export default function Navbar(params) {

    const [{ user }, dispatch] = useStateValue()


    async function cerrarSesion() {
        
        const email = user.datosUser.email
        

        await axios.post("http://localhost:4000/api/signout", { email })
            .then(response => {
                
                Swal.fire({
                    icon:'success',
                    title:response.data.response ,         
                  })
                localStorage.removeItem("token")
                dispatch({
                    type: actionType.USER,
                    user: null
                })
            })
    }

    return (
        <div className="gral-navbar">
            <div className="nombre-pagina">
                <img className="logo-nav" src={Loguito}></img>
                <h1>MyTinerary </h1>
                </div>
            <div className="navbar-alin">
                <ul className="nav  justify-content-end colorNav">
                    {/* <li className="nombre-pagina">
                    <img className="logo-nav" src={Loguito}></img>
                    MyTinerary
                    </li> */}
                    <li className="nav-item nav-home">
                        <LinkRouter className="nav-link  hover-underline-animation" aria-current="page" to="/home">Home</LinkRouter>
                    </li>
                    <li className="nav-item nav-citi ">
                        <LinkRouter className="hover-underline-animation nav-link" aria-current="page" to="/cities">Cities</LinkRouter>
                    </li>
                    <li className="nav-item nav-user ">
                        <a className="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><FaUserCircle className="logo-user" /></a>
                        <ul className="dropdown-menu ">
                            <li>
                                <LinkRouter className="nav-link active hover-underline-animation" aria-current="page" to="/singUp">Sing Up</LinkRouter>
                            </li>
                            <li>
                                {!user ?
                                    <LinkRouter className="nav-link active hover-underline-animation" aria-current="page" to="/singIn">Sing In</LinkRouter>
                                    : <div className="nav-link active hover-underline-animation" onClick={cerrarSesion}>Sing Out</div>}
                            </li>

                        </ul>
                    </li>
                </ul>
            </div>


        </div>
    )

}
