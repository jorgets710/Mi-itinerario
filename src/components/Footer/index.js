import React from "react";
import "./footer.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";


export default function Footer() {

    return (
        <div className="footer1 text-center text-white">

                <section class="text-center mb-5 mt-5">
                        <a href="#" class="btn btn-outline-dark text-white me-4"><BsInstagram /> Instagram</a>

                        <a href="#" class="btn btn-outline-dark text-white me-4"><AiOutlineFacebook /> Facebook</a>

                        <a href="#" class="btn btn-outline-dark text-white me-4"><SiGmail /> Email</a>

                        <a href="#" class="btn btn-outline-dark text-white me-4"><BsWhatsapp /> Whatsapp</a>
                    </section>
            
            
        </div>
    )
}