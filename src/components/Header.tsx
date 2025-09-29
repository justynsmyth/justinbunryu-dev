// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./Header.css";
import ExternalLink from "./ExternalLink"
import InternalLink from "./InternalLink"
{ ` All react icons `}
import { GoHome } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

{ ` React Router `}
import { Link, Outlet } from 'react-router-dom'


{ ` Size of Icons `}
const ICONSIZE_S: number = 32
const ICONSIZE_M: number = 38
const COLOR: string = "gray"

export default function Header() {

    return (
        <>
            <nav>
                <Link to="/" className="link">
                    <GoHome color={COLOR} size={ICONSIZE_M} />
                </Link>

                <div className="internal-wrapper">
                    <InternalLink targetId="projects" label="Projects">
                        Projects
                    </InternalLink>
                    <InternalLink targetId="experiences" label="Experiences">
                        Experiences
                    </InternalLink>
                </div>

                <div className="external-wrapper">
                    <ExternalLink href="https://github.com/justynsmyth" label="GitHub">
                        <FaGithub color={COLOR} size={ICONSIZE_M} aria-hidden="true"/>
                    </ExternalLink>
                    <ExternalLink href="https://www.linkedin.com/in/justin-bunryu-smith/" label="LinkedIn">
                        <FaLinkedinIn color={COLOR} size={ICONSIZE_S} aria-hidden="true" />
                    </ExternalLink>
                </div>
            </nav>
            <Outlet/>
        </>
    ) 
}

