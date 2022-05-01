import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from '../assets/pizza_banner.jpg';
import '../styles/Home.css';
export default function Home() {
    return (
        <div className="home" style= {{ backgroundImage:`url(${BannerImage})` }}>
            <div className="headerContainer"  >
                <h1 className="text-white">Oreo Pizzeria</h1>
                <p className="text-white">PIZZA TO FIT ANY TASTE</p>
                <Link to="/menu">
                <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}
