import React from "react";
import "./singup.css"
import Form from './Form/form'
import GoogleLogin from "./GoogleLogin/index";

export default function SingUp(params) {

    return (
        <>
            <h1>Mi itinerario</h1>
            <div className="tamaño-form">

                <h3>Registrarse</h3>
                <GoogleLogin />
                <hr />
                <Form />
            </div>
        </>

    )
}