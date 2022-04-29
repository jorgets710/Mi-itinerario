import React from "react";
import "./singup.css"
import Form from './Form/form'
import GoogleLogin from "./GoogleLogin/index";
import Facebook from "./Facebook/Facebook";

export default function SingUp(params) {

    return (
        < div>
            <h1>Mi itinerario</h1>
            <div className="tamaño-form">

                <h3>Registrarse</h3>
                <div><Facebook/></div>
                <div><GoogleLogin /></div>              
                <hr />
                <Form />
            </div>
        </div>

    )
}