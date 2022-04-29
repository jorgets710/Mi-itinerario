import React, { useState } from "react";
import './infocities.css'
import { useStateValue } from "../../../StateProvider";
import { actionType } from '../../../reducer';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Comments from "../Comments";
import Likes from "../Like";
import tierra from "../../../assets/image/tierra.jpg"
import dinero from "../../../assets/image/dinero.png"
import idioma from "../../../assets/image/idioma.png"
import googleMaps from "../../../assets/image/google.png"

import { FcLike } from "react-icons/fc";

export default function InfoCities(params) {

    const [itineraries, setItineraries] = useState([])
    const [uniti, setUniti] = useState([])
    const [idItinerario, setidItinerario] = useState([])

    const { id } = useParams()

    
    const [{ cities }, dispatch] = useStateValue()

    const selecionCity = cities.filter(city => city._id === id)

    // para q me funciones un solo comentario
    let prueba = selecionCity.map(itin => itin.name)
    
    
    
    useEffect(() => {
        axios.get(`http://localhost:4000/api/itinerario/${prueba}`)
            .then(response => {
                setidItinerario(response.data.response.itinerary._id)
                // setUniti(response.data.response.itinerary.likes)
               
            })
    }, [])
    

    useEffect(() => {
        selecionCity.map(city =>

            axios.get(`http://localhost:4000/api/itinerario/${city.name}`)
                .then(response => {

                    // console.log(response.data.response.itinerary)
                    setUniti(response.data.response.itinerary.likes)

                    setItineraries(response.data.response.itinerary.itinerary)
                })
        )

    }, [])
    return (
        <div>
            <div>
                {selecionCity.map(item =>
                    <div>
                        <div className="containers">
                            <div className="tarjeta">
                                <img src={tierra} className="imgs" alt="..." />
                                <h4>Continente: {item.continents}</h4>
                            </div>

                            <div className="tarjeta">

                                <img src={item.flag} className="imgs"></img>
                                <h4>Pais: {item.country}</h4>
                            </div>

                            <div className="tarjeta">
                                <img src={dinero} className="imgs" alt="..." />
                                <h4>Moneda: {item.currencies} </h4>
                            </div>

                            <div className="tarjeta">
                                <img src={idioma} className="imgs" alt="..." />
                                <h4>Idioma: {item.language} </h4>
                            </div>

                            <div className="tarjeta">
                                <img src={googleMaps} className="imgs" alt="..." />
                                <h4><a href={item.googleMaps} target="_blank">Ubicacion </a></h4>

                            </div>
                        </div>
                        <h1 className="text-center">Ciudad de {item.name}</h1>
                    </div>

                )}

            </div>
            <div>
                {itineraries.map((item) =>
                    <div>
                        <div className="card mb-3 tamañoCard" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={process.env.PUBLIC_URL + `/image/${item.image}`} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.day}</h5>
                                        <p className="card-text">{item.descrip}</p>
                                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}


                                    </div>
                                    {/* <div className="megusta">
                                        <button className="btnmegusta"> <FcLike className="iconmegusta "></FcLike></button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>

            <hr></hr>

            <div className="card mb-3 tamañoCard">
                <div>
                    <Comments itinerario={id}> </Comments>
                </div>
            </div>

        </div>
    )

}