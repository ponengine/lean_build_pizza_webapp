import React from 'react'
import MultiplePizza from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

export default function Abount() {
    return (
        <div className="about">
            <div className="aboutTop" style= {{ backgroundImage:`url(${MultiplePizza})` }}></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
              
            </div>
        </div>
    )
}
