import React from "react";
import GoogleLogin from 'react-google-login';
import "./googleSesion.css"
import axios from "axios";
import Swal from "sweetalert2";

export default function GoogleSesion(params) {

     const responseGoogle = async(response) => {
        
        const NuevoUsuario = {
            firstname:response.profileObj.givenName,
            lastname:response.profileObj.familyName,
            email:response.profileObj.email,
            password:response.googleId,
            from:"Google"
        }
        
        await axios.post("http://localhost:4000/api/singup",{NuevoUsuario})
        .then(response=>{
            

            Swal.fire({
                icon: 'success',
                title: response.data.response,           
              })
        
        })
        
      }
    return (
        <>
            <GoogleLogin
                clientId="980767122625-br7nbpiqggtu3jf3ihffpknho9almh85.apps.googleusercontent.com"
                buttonText="Sing Up with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                className="botongoogle"
            />
        </>
    )
}