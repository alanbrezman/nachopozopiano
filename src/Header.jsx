import React from 'react';
import logo from ".//assets/logo.svg";


export function Header(){

    return  <header>
                <img className="logotipo" src={logo} alt="logotipo"/>
            </header>
}