import React, { useState } from 'react';
import { Link as LinkRouter } from "react-router-dom";
import "./carts.css";

export default function Carts(props) {
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
                            <img  className='tamañoImg' src={process.env.PUBLIC_URL +`/image/${item.image}`} alt="..." / >
                            <figcaption>
                                <h3>{item.name} <br/> {item.country}</h3>
                           </figcaption>
                        </figure> 
                            <div className="cardBody">
                                <div className="item">
                                    <div className="title" onClick={() => toggle(i)}>
                                        <p>Descripcion</p>
                                        <span>{selected === i ? '-' : '+'}</span>
                                    </div>

                                    <div className={selected === i ? 'content show' : 'content'}>
                                        {item.description}
                                    </div>
                                </div>

                                <LinkRouter to={`/infoCities/${item._id}`} className="btn btn-primary boton">Ver Info</LinkRouter>

                            </div>
                        </div>

                    </div>


                )
            }
            )}





        </>
    )
}