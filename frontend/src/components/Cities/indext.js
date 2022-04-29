import React from "react";
import { useStateValue } from "../../StateProvider";
import Carts from "./Carts/Carts";
import "./cities.css"
import Search from "./Search";

export default function Cities() {

    const [{filtercity},dispatch]= useStateValue()

    
    
    
    console.log(filtercity);
    // let americaSur = [];
    // let americaNorte = []
    // let europa = []
    // let asia = []
    // let oceania = []
    // let africa = []

    // // filterCity.forEach(continente => {
    // //     switch (continente.continents) {
    // //         case "America del Sur":
    // //             americaSur.push(continente)
    // //             break;
    // //         case "America del Norte":
    // //             americaNorte.push(continente)
    // //             break;
    // //         case "Europa":
    // //             europa.push(continente)
    // //             break;
    // //         case "Asia":
    // //             asia.push(continente)
    // //             break;
    // //         case "Oceania":
    // //             oceania.push(continente)
    // //             break;
    // //         case "Africa":
    // //             africa.push(continente)
    // //             break;
    // //         default:
    // //             break;
    // //     }
    // // })
    return (
        <div className="text-center gral-cities">
            

            <h1>Ciudades</h1>
            <Search></Search>

            <div className="carts px-4 px-lg-5 mt-5">
                    <Carts data={filtercity} key={2}/>
                </div>
            {/* <div>
                <h3 >Africa</h3>
                <div className="carts px-4 px-lg-5 mt-5">
                    <Carts data={africa} />
                </div>
                <h3>America del Sur</h3>
                <div className="carts px-4 px-lg-5 mt-5 ">
                    <Carts data={americaSur} />
                </div>

                <h3>America del Norte</h3>
                <div className="carts px-4 px-lg-5 mt-5 ">
                    <Carts data={americaNorte} />
                </div>

                <h3>Oceania</h3>
                <div className="carts px-4 px-lg-5 mt-5 ">
                    <Carts data={oceania} />
                </div>
                <h3>Asia</h3>
                <div className="carts px-4 px-lg-5 mt-5 ">
                    <Carts data={asia} />
                </div>
                <h3>Europa</h3>
                <div className="carts px-4 px-lg-5 mt-5 ">
                    <Carts data={europa} />
                </div>

            </div> */}
        </div>
    )
}