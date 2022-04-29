import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

export default function Form() {

    async function nuevoUsuario(e) {
        e.preventDefault()
        const NuevoUsuario = {
            firstname: e.target[0].value,
            lastname: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
            from:"signup"
        }
        
        await axios.post("http://localhost:4000/api/singup",{NuevoUsuario})
        .then(response=>
        // console.log(response)
        displayMessages(response.data)
        )

        function displayMessages(data) {
            
            if (!data.sucess) {
                console.log(data.response);// el mail ya esta en uso
                Swal.fire({
                    icon: 'error',
                    title: data.response 
                   
                  })
            }else{
                //envio de email
                
                Swal.fire({
                    icon: 'success',
                    title: 'hola '+ data.response ,
                  })
            }
            if (data.sucess==="falseVAL") {
                
                Swal.fire({
                    icon:'error',
                    title: data.response.error.details.map(error=>error.message)
                })
                
                
            }else if (data.sucess ==="trueUE") {
                console.log(alert(data.response))
            }else if (data.sucess === "false") {
                console.log(alert(data.response))
            }else if (data.sucess === "falseUE") {
                console.log(alert(data.response))
            }
        }
    }

    return (
        <>
            <form onSubmit={nuevoUsuario} >

            <div className="row mb-3">
                    
                    <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">FirstName</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputFirstName"  />
                    </div>
                </div>
                <div className="row mb-3">
                    
                    <label htmlFor="inputLastName" className="col-sm-2 col-form-label">LastName</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputLastName"  />
                    </div>
                </div>

                <div className="row mb-3">

                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3"  />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">Repeat-Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword4"  />
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
        </>
    )
}