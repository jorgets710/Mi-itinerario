import React from "react";
import "./home.css"
import Carousel from "./Carousel/index";
// import Swal from 'sweetalert2'
import Favoritos from "./MasLikes";







export default function Home(params) {


    // const Toast = Swal.mixin({
    //     toast: true,
    //     position: 'top-end',
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //       toast.addEventListener('mouseenter', Swal.stopTimer)
    //       toast.addEventListener('mouseleave', Swal.resumeTimer)
    //     }
    //   })

    //   Toast.fire({
    //     icon: 'success',
    //     title: 'Signed in successfully'
    //   })



    return (
        <div className="grl-home">

            <Carousel />

            <div className="container px-4 px-lg-5 mt-5">
                <hr></hr>
                <div className="text-home">

                    <h1>Conoce información importante de viajes</h1>

                    <h3>
                        Nos apasiona viajar y compartir contigo las maravillas del mundo. 
                        A continuación, encontrarás información y orientación importante sobre las ciudades, moneda, idioma y localizacion .</h3>
                    <h3>  <br></br>
                        Encontraras las 30 ciudades mas visitadas con sus itinerarios,<br></br>
                        para que puedas visitar lo mejor de cada una.
                    </h3>
                </div>

                <hr></hr>

                <h1 className="subtitulo"> LOS DESTINOS FAVORITOS</h1>
                <Favoritos></Favoritos>

            </div>

        </div>
    )

}