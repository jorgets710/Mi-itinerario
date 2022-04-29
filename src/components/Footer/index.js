import React from "react";
import "./footer.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";


export default function Footer() {

    return (
        <div className="footer1 text-center text-white">

                <section className="text-center mb-5 mt-5">
                        <a href="https://www.instagram.com/" className="btn btn-outline-dark text-white me-4" target={"_blank"}><BsInstagram /> Instagram</a>


                        <a href="https://www.facebook.com/" className="btn btn-outline-dark text-white me-4" target={"_blank"}><AiOutlineFacebook /> Facebook</a>

                        <a href="mailto:mytineraryj@gmail.com" className="btn btn-outline-dark text-white me-4"><SiGmail /> Email</a>

                        <a href="https://www.whatsapp.com/" className="btn btn-outline-dark text-white me-4" target={"_blank"}><BsWhatsapp /> Whatsapp</a>
                    </section>
            
            
        </div>
    )
}