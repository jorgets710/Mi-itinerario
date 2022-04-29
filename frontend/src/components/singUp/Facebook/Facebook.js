import React from "react";
import FacebookLogin from 'react-facebook-login';
import "./facecss.css"
import axios from "axios";
import Swal from "sweetalert2";

export default function Facebook(params) {

    const responseFacebook = async (response) => {
        

        const NuevoUsuario = {
            firstname: response.name,
            lastname: "facebook",
            email: response.email,
            password: response.id,
            from: "Facebook"
        }

        await axios.post("http://localhost:4000/api/singup", { NuevoUsuario })
            .then(response => {
                
                Swal.fire({
                    icon: 'success',
                    title: response.data.response,           
                  })
            })

    }
    return (
        <>
            <FacebookLogin
                appId="644260153300381"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="cssface"
                 />

        </>
    )
}