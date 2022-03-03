import React, { useState } from "react";
import './infocities.css'
import { useStateValue } from "../../../StateProvider";
import { actionType } from '../../../reducer';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function InfoCities(params) {

    const [itineraries, setItineraries] = useState([])
    const { id } = useParams()

    const [{ cities }, dispatch] = useStateValue()

    const selecionCity = cities.filter(city => city._id === id)

    useEffect(() => {
        selecionCity.map(city =>
            axios.get(`http://localhost:4000/api/itinerario/${city.name}`)
                .then(response => {
                    setItineraries(response.data.response.itinerary.itinerary)
                })
        )
        console.log(itineraries);
    },[])

    

    return (
        <>

            <div>
                {selecionCity.map(item =>
                <h1 className="text-center">{item.name}</h1>
                    )}
                
            </div>
            
                    {itineraries.map((item) =>
                        <div>
                            <div className="card mb-3 tamañoCard" >
                <div className="row g-0">
                            <div className="col-md-4">
                                <img src={process.env.PUBLIC_URL +`/image/${item.image}`} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.day}</h5>
                                    <p className="card-text">{item.descrip}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>

                    
                    {/* <div className="col-md-4">
                        <img src="https://flagcdn.com/w320/ar.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div> */}
                </div>
            </div>)}
        </>
    )

}