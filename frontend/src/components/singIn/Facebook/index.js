import React from "react";
import FacebookLogin from 'react-facebook-login';
import axios from "axios";
import { actionType } from "../../../reducer";
import { useStateValue } from "../../../StateProvider"
import "./cssF.css"
import Swal from "sweetalert2";

export default function Facebook(params) {

    const [{ user }, dispatch] = useStateValue()

    const responseFacebook = async (response) => {
        
        const userData = {
            email: response.email,
            password: response.id
        }
        await axios.post("http://localhost:4000/api/signin", { userData })
            .then(response => {
                
                displayMessages(response.data)
                
            })
        function displayMessages(data) {

            if (!data.sucess) {
                
                Swal.fire({
                    icon:'error',
                    title:data.error ,         
                  })
            }
            else {
                
                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido ' + data.response.datosUser.firstname ,
                   
                  })
                localStorage.setItem("token",data.response.token)
            }
             dispatch({
                type: actionType.USER,
                user: data.response
            })
        }  
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