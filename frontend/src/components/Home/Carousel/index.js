import React,{ useEffect, useState } from "react";
import "./carousel.css"

import axios from "axios";



export default function Carousel(params) {


    const [randomcity, setRandomcity] = useState([])
    let indiceRandom=Math.floor(Math.random()*(30-0+1)+0)
    // const [{ cities }, dispatch] = useStateValue()

    
    // console.log(cities);
    // console.log( cities[indiceRandom] );
    // console.log( indiceRandom );

    // const random = cities[indiceRandom]
    
    // console.log(random);
    useEffect(()=>{
        axios.get("http://localhost:4000/api/datos")
      .then(response => {
        
        let city = response.data.response.cities
        
        setRandomcity(city[indiceRandom])

        
      })
    },[])

    
    return (
        
        <>
            <div id="app">
                <div className="title">
                    <div className="title-inner">
                        <div className="cafe">
                            <div className="cafe-inner">Explora</div>
                        </div>
                        <div className="mozart">
                            <div className="mozart-inner">el Mundo</div>
                        </div>
                    </div>
                </div>

                <div className="image">
                    <img src={process.env.PUBLIC_URL + `/image/${randomcity.image}`} alt=''/>
                </div>
            </div>

            

        </>
    )
}