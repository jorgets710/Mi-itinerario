import React, { useEffect, useState } from "react";
import { useStateValue } from "../../../StateProvider";
import axios from "axios";
import './comments.css'
import userImage from '../../../assets/image/user.png'

import { RiDeleteBinFill } from "react-icons/ri"
import { RiEdit2Fill } from "react-icons/ri"


export default function Comments(props) {
    

    // console.log(props);
    const [comment, setCommet] = useState([])

    const [{ user }, dispatch] = useStateValue()

    const [reload, setReload] = useState(false)

    const [cambio, setCambio] = useState()

    const submitComent = async (e) => {
        e.preventDefault()

        const dataCommet = {
            itinerario: props.itinerario,
            mensaje: e.target[0].value,
            user: user.datosUser.id
        }

        axios.post("http://localhost:4000/api/comments", { dataCommet })
            .then(response => {

                // console.log(response)
                // console.log(response.data.response);
                setCommet(response.data.response.comentario)
            })


    }
    useEffect(() => {
        axios.get(`http://localhost:4000/api/comments/${props.itinerario}`)
            .then(response => {
                // console.log("ver commets");
                // console.log(response);
                setCommet(response.data.response.comentario)
            })


    }, [reload])



    function borrarComentario(id) {
        axios.delete(`http://localhost:4000/api/comments/${id}`)
        setReload(!reload)
    }

    const handeChange = (e) => {
        setCambio(e.target.value)
    }

    const modificarComentario = (id) => {
        let data = cambio
        axios.put(`http://localhost:4000/api/comments/${id}`, { data })
            .then(response => console.log(response.data.mensaje))
        setReload(!reload)
    }

    return (
        <div>
            {user ?
                <div>
                    <div>

                        {comment.map((item) =>
                            <div className="containerss">

                                <div className="bordesimg">
                                    <img src={userImage} style={{ height: "100%" }} alt="..." ></img>
                                </div>

                                <div className="bordesComments" >
                                    <p className="pstyle">{item.user.firstname}</p>
                                    <input className="texteras" onKeyUp={handeChange} defaultValue={item.mensaje}></input>
                                </div>

                                <div className="botones">
                                    <button style={{ height: "50%" }} onClick={() => borrarComentario(item._id)}><RiDeleteBinFill /></button>
                                    <button style={{ height: "50%" }} onClick={(e) => modificarComentario(item._id)}><RiEdit2Fill /> </button>
                                </div>

                            </div>

                        )}

                    </div>


                    <form onSubmit={submitComent}>
                        <div className="containerss">
                            <div className="form-floating texteras">
                                <textarea className="form-control " style={{ height: "100%" }} placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                                <label for="floatingTextarea2">Comments</label>

                            </div>
                            <div className="d-md-flex justify-content-md-end">
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>
                        </div>


                    </form>


                </div> :
                <div>
                    <div>

                        {comment.map((item) =>
                            <div className="containerss">

                                <div className="bordesimg">
                                    <img src={userImage} style={{ height: "100%" }} alt="..."></img>
                                </div>

                                <div className="bordesComments" >
                                    <p className="pstyle">{item.user.firstname}</p>
                                    <input className="texteras" onKeyUp={handeChange} defaultValue={item.mensaje} disabled></input>
                                </div>

                                

                            </div>

                        )}

                    </div>
                    <div className="text-center">
                        <h1>Logueate para comentar</h1>
                    </div>

                </div>
            }
        </div>
    )
}