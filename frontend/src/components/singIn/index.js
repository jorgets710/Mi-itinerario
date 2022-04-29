import React from "react";
import "./singIn.css"
import LoginUser from "./login/index";
import GoogleLogin from 'react-google-login';
import Facebook from './Facebook/index'
import axios from "axios";
import { actionType } from "../../reducer";
import { useStateValue } from "../../StateProvider"
import Swal from "sweetalert2";

export default function SingIn(params) {

    const [{ user }, dispatch] = useStateValue()

    const responseGoogle = async (response) => {
        
        const userData = {
            email: response.profileObj.email,
            password: response.googleId,
        }
        await axios.post("http://localhost:4000/api/signin", { userData })
            .then(response => {
                
                displayMessages(response.data)
            })

        function displayMessages(data) {
           

            if (!data.sucess) {
                
                Swal.fire({
                    icon: 'error',
                    title: 'El usuario o el password son incorrectos',
                   
                  })
            }
            else {
                
                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido ' + data.response.datosUser.firstname + " "+data.response.datosUser.lastname,
                   
                  })
                
                localStorage.setItem("token", data.response.token)
            }
            dispatch({
                type: actionType.USER,
                user: data.response
            })
        }
    }


    return (
        <>
            <div className="tamaño-login">
                <h1>Iniciar Sesion</h1>

                <div ><GoogleLogin
                    clientId="980767122625-br7nbpiqggtu3jf3ihffpknho9almh85.apps.googleusercontent.com"
                    buttonText="Sing In with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    className="botongoogle"
                />
                </div>
                <div >
                    <Facebook className="prueba"></Facebook>
                </div>
                <hr />
                <LoginUser />
            </div>



        </>
    )
}