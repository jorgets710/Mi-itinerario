import React from "react";
import GoogleLogin from 'react-google-login';
import "./googleSesion.css"

export default function GoogleSesion(params) {

    const responseGoogle = (response) => {
        console.log(response);
      }
    return (
        <>
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Sing Up with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                className="fondo"
            />
        </>
    )
}