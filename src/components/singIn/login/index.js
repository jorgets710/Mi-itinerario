import React from "react";
import axios from "axios";
import { actionType } from "../../../reducer";
import { useStateValue } from "../../../StateProvider"
import Swal from "sweetalert2";

export default function LoginUser(params) {

    const [{ user }, dispatch] = useStateValue()

    async function logiUser(e) {
        e.preventDefault()
        const userData = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        await axios.post("http://localhost:4000/api/signin", { userData })
            .then(response => {
                displayMessages(response.data)
                
                
            })
        function displayMessages(data) {
            console.log(data.sucess)
            if (!data.sucess) {
                
                Swal.fire({
                    icon: 'error',
                    title:  data.error,
                   
                  })
            }
            else {
                
                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido ' + data.response.datosUser.firstname + " "+data.response.datosUser.lastname,
                   
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
        <div>
            <form onSubmit={logiUser}>
                <div className="row mb-3" >
                    <div className="input-group flex-nowrap ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>


                <div className="row mb-3">

                    <div className="col-sm-12">
                        <input type="password" className="form-control" id="inputPassword3" required placeholder="Password" />
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Example checkbox
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>

        </div>
    )
}