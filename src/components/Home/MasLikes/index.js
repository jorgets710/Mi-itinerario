import React, { useState } from "react";
import { useStateValue } from "../../../StateProvider";
import { actionType } from '../../../reducer';
import { useEffect } from "react";
import axios from "axios";
import './styles.css'

export default function Favoritos(params) {



    const [{ cities }, dispatch] = useStateValue()
    const [allItinerarios, setAllItinerarios] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/api/itinerarios")
            .then(response => {
                setAllItinerarios(response.data.response.allItinerarios)

            })
    }, [])
    
    let aNuevo = allItinerarios.sort(function (a, b) { return a.likes.length - b.likes.length }).slice(allItinerarios.length - 3)
    let mayorLikes = []
    let citi= []
    
    aNuevo.map(item => {
        cities.map(city => {
            if (city.name === item.city) {
                mayorLikes.push(city.image)
                citi.push(city.name)
            }
        })
    }) 


    return (
        <div>

            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={process.env.PUBLIC_URL + `/image/${mayorLikes[0]}`} className="masimg" alt="..." />
                        <div className="carousel-caption  d-md-block titulocity">
                            <h1>{citi[0]}</h1>
                            <p>{}</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={process.env.PUBLIC_URL + `/image/${mayorLikes[1]}`} className="masimg" alt="..." />
                        <div className="carousel-caption  d-md-block titulocity">
                            <h1>{citi[1]}</h1>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + `/image/${mayorLikes[2]}`} className="masimg" alt="..." />
                        <div className="carousel-caption  d-md-block titulocity">
                            <h1>{citi[2]}</h1>
                            <p></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    )
}

