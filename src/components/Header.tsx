// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./Header.css";
import { useRef } from "react"
import ExternalLink from "./ExternalLink"

{ ` All react icons `}
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

{ ` React Router `}
import { Link, Outlet } from 'react-router-dom'


{ ` Size of Icons `}
const ICONSIZE_S: number = 32
const ICONSIZE_M: number = 38
const COLOR: string = "gray"

export default function Header() {

    const inputRef = useRef<HTMLInputElement>(null)

    function openSearch() {
        inputRef.current?.focus()
    }

    return (
        <>
            <nav>
                <Link to="/" className="home-link">
                    <GoHome color={COLOR} size={ICONSIZE_M} />
                </Link>
                <div className="search-wrapper" onClick={openSearch}>
                    <IoIosSearch className="search-icon" size={ICONSIZE_M} aria-hidden="true" />
                    <input type="search" ref={inputRef} placeholder="Search" aria-label="Search" />
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

