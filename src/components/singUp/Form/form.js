import axios from "axios";
import React from "react";

export default function Form() {

    async function nuevoUsuario(e) {
        e.preventDefault()
        const NuevoUsuario = {
            firstname: e.target[0].value,
            lastname: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value
        }
        await axios.post("http://localhost:4000/api/singup",{NuevoUsuario})
        .then(response=> alert(response.data.response))
    }

    return (
        <>
            <form onSubmit={nuevoUsuario}>

            <div class="row mb-3">
                    
                    <label for="inputFirstName" class="col-sm-2 col-form-label">FirstName</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputFirstName" required />
                    </div>
                </div>
                <div class="row mb-3">
                    
                    <label for="inputLastName" class="col-sm-2 col-form-label">LastName</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputLastName" required />
                    </div>
                </div>

                <div class="row mb-3">

                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Repeat-Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" required />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-10 offset-sm-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" for="gridCheck1">
                                Example checkbox
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </>
    )
}