import { useEffect, useState } from 'react';

import { IoLocationOutline } from "react-icons/io5";
import { LiaUniversitySolid } from "react-icons/lia";
import MichiganLogo from "../assets/Block_M-Hex.png";
import "./Home.css"


const Home = () => {
    return (
        <>        
            <span> About Me </span>
            <section className="about-section">
                <p className="intro">
                    Hi, I'm <span className="name">Justin Bunryu Smith</span>
                </p>

                <p className="location">
                    <IoLocationOutline className="icon" />
                    Windermere, FL
                </p>

                <p className="education">
                    <LiaUniversitySolid className="icon" />
                    Computer Science, University of Michigan
                    <img
                        src={MichiganLogo}
                        alt="University of Michigan Logo"
                        className="logo"
                    />
                </p>
            </section>
        </>
        
    )
}

export default Home;
