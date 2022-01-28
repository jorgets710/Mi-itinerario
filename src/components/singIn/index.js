import React from "react";
import "./singIn.css"
import LoginUser from "./login/index";
import GoogleLogin from "../singUp/GoogleLogin";

export default function SingIn(params) {

    return (
        <>
            <div className="tamaño-login">

                <h1>Iniciar Sesion</h1>
                <GoogleLogin />


                <hr />

                <LoginUser />
            </div>



        </>
    )
}