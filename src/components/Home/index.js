import React from "react";
import "./home.css"
import Carousel from "./Carousel/index";
import Carts from "../Cities/Carts/carts";


export default function Home(params) {

    return (
        <>


            <Carousel />



            <div className="container px-4 px-lg-5 mt-5">
                <h3>Explora el Mundo</h3>
                <h4>DESTACADOS</h4>
                <Carts />
                <Carts />
                <Carts />
            </div>









        </>
    )

}