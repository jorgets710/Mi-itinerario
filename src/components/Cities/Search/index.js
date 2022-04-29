import React from "react";
import { actionType } from "../../../reducer";
import { useStateValue } from "../../../StateProvider";
import './search.css'
import {FcSearch} from 'react-icons/fc';

export default function Search (params) {

    const [{cities},dispatch] = useStateValue()

    const inputSearch= (event)=>{
        dispatch({
            type: actionType.FILTERCITY,
            value:event.target.value
        })
    }
    return(
        <div>
            <FcSearch className="iconSearch"></FcSearch>
            <input type="text" onChange={inputSearch} className="filter" placeholder="Buscador">
            </input>
        </div>
    )
}