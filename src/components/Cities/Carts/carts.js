import React, { useState } from 'react';
import { Link as LinkRouter } from "react-router-dom";
import "./carts.css";
import { useEffect } from 'react';
import axios from "axios";
import Likes from '../Like';

export default function Carts(props) {
    
    const [idItinerario, setidItinerario] = useState([])

    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <>

            {props.data.map((item, i) => {
                return (
                    <div className='mb-3'>
                        <div className="card tamañoCar" >

                            <figure className="hover-img">
                                <img className='tamañoImg' src={process.env.PUBLIC_URL + `/image/${item.image}`} alt="..." />
                                
                                <figcaption>
                                    <h3>{item.name} <br /> {item.country}</h3>

                                </figcaption>
                            </figure>
                            <Likes city={item.name}></Likes>
                        
                            <div className="cardBody">
                                <LinkRouter to={`/infoCities/${item._id}`} key={item._id} className="btn btn boton">Ver Info</LinkRouter>

                                <div className="item">
                                    <div className="title-city" onClick={() => toggle(i)}>
                                        <p>Descripcion</p>
                                        <span>{selected === i ? '-' : '+'}</span>
                                    </div>

                                    <div className={selected === i ? 'content show' : 'content'}>
                                        <hr></hr>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            )}


        </>
    )
}