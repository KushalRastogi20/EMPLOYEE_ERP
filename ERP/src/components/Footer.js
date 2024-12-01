    import React from 'react';
    import { FaInstagram } from "react-icons/fa";
    import { FaTwitter } from "react-icons/fa";
    import { FaWhatsapp } from "react-icons/fa";
    import { FaFacebook } from "react-icons/fa";

    const Footer = () => {
        return (

            <footer className="footer">
                <div className="footcontainer">
                    <div className="col1">
                       <ul className="footicons">
                            <li><a href='#'><FaFacebook /></a></li>
                            <li><a href='#'><FaInstagram /></a></li>
                            <li><a href='#'><FaTwitter /></a></li>
                            <li><a href='#'><FaWhatsapp /></a></li>
                        </ul> 
                    </div>
                   
                </div>
            </footer>           
        );
    };

    export default Footer;