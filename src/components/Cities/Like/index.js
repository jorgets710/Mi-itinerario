// mytineraryj@gmail.com
import axios from "axios";
import React, { useState } from "react";
import { useStateValue } from "../../../StateProvider";
import { FcLikePlaceholder } from "react-icons/fc"
import { FcLike } from "react-icons/fc";
import { useEffect } from "react";
import "./likes.css"

export default function Likes(props) {


    const [{ user }, dispatch] = useStateValue()
    const [likes, setLikes] = useState([])
    const [ids, setIds] = useState()

    useEffect(() => {
        axios.get(`http://localhost:4000/api/itinerario/${props.city}`)
            .then(response => {

                setIds(response.data.response.itinerary._id)
                //  setidItinerario(response.data.response.itinerary._id)
                setLikes(response.data.response.itinerary.likes)

            })
    }, [])



    const likeDislike = async () => {

        const token = localStorage.getItem("token")

        await axios.put(`http://localhost:4000/api/likesDislake/${ids}`, {}, {
            headers: { "Authorization": "Bearer " + token } // metodo de autorizacion/autoidentificacion standar 
        })
            .then(response => {
                
                setLikes(response.data.response.likes)

            })
    }

    

    return (
        <div className="posicionLike">
            {user? <div>
                {likes.length}
                <div>
                    {likes.includes(user.datosUser.id) ?
                        <button className="tamañoLike" onClick={likeDislike}> <FcLike></FcLike> </button> :
                        <button className="tamañoLike" onClick={likeDislike}>  <FcLikePlaceholder></FcLikePlaceholder></button>

                    }
                </div>
            </div>:
            <div>
                {likes.length}
                <FcLikePlaceholder></FcLikePlaceholder>
            </div>
            }
        </div>
    )
}
