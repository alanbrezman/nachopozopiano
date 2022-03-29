import React from 'react';
import facebook from ".//assets/social/facebook.svg";
import youtube from ".//assets/social/youtube.svg";
import tiktok from ".//assets/social/tiktok.svg";
import instagram from ".//assets/social/instagram.svg";

export function Footer(){

    return  <footer>
                <div className="social-icons-container">
                    <a href="https://www.facebook.com/ignacio.pozo.7" target="blank"><img className="social-icon" src={facebook} alt="facebook"/></a>
                    <a href="https://www.youtube.com/c/NachoPozoPiano" target="blank"><img className="social-icon" src={youtube} alt="youtube"/></a>
                    <a href="https://www.tiktok.com/@nachopozopiano" target="blank"> <img className="social-icon" src={tiktok} alt="tiktok"/></a>
                    <a href="https://www.instagram.com/nachopozopiano/" target="blank"> <img className="social-icon" src={instagram} alt="instagram"/></a>
                </div>
                <p className="footer-disclaimer">2022 ® <b>nachopozopiano</b> es una marca registrada.</p>
            </footer>
}