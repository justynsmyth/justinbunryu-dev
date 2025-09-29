// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "../css/Header.css";
import ExternalLink from "./ExternalLink"
import InternalLink from "./InternalLink"
import CopyLink from "./CopyLink"
{ ` All react icons `}
import { GoHome } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { BsLaptop } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

{ ` React Router `}
import { Link, Outlet } from 'react-router-dom'


{ ` Size of Icons `}
const ICONSIZE_S: number = 32
const ICONSIZE_M: number = 36
const COLOR: string = "gray"

export default function Header() {

    return (
        <>
            <nav>        
                {/* Center: Home, Projects, Experiences, GitHub, LinkedIn */}
                <div className="nav-center">
                    <Link to="/" className="link">
                        <GoHome color={COLOR} size={ICONSIZE_M} />
                    </Link>
                    <InternalLink targetId="projects" label="Projects">
                        <BsLaptop color={COLOR} size={ICONSIZE_S} aria-hidden="true"/>
                    </InternalLink>
                    <InternalLink targetId="experiences" label="Experiences">
                        <PiSuitcaseSimpleLight color={COLOR} size={ICONSIZE_M} aria-hidden="true"/>
                    </InternalLink>
                    <ExternalLink href="https://github.com/justynsmyth" label="GitHub">
                        <FaGithub color={COLOR} size={ICONSIZE_M} aria-hidden="true"/>
                    </ExternalLink>
                    <ExternalLink href="https://www.linkedin.com/in/justin-bunryu-smith/" label="LinkedIn">
                        <FaLinkedinIn color={COLOR} size={ICONSIZE_S} aria-hidden="true" />
                    </ExternalLink>
                </div>

                {/* Right: , Email */}
                <div className="nav-left">
                    
                    <CopyLink>
                        <MdOutlineEmail color={COLOR} size={ICONSIZE_S} aria-hidden="true" />
                    </CopyLink>
                </div>
            </nav>
            <Outlet/>
        </>
    ) 
}

