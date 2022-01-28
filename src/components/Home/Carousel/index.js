import React from "react";
import "./carousel.css"
import Rond1 from "../../../assets/image/cataratas.jpg"
import Rond2 from "../../../assets/image/greece.jpg"
import Rond3 from "../../../assets/image/peru.jpg"


export default function Carousel(params) {

    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={Rond1} className="d-block w-100 img-carousel" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Rond2}className="d-block w-100 img-carousel" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Rond3} className="d-block w-100 img-carousel" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            
        </>
    )
}