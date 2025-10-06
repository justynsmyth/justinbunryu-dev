// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import '../css/Header.css';
import ExternalLink from './ExternalLink';
import InternalLink from './InternalLink';
import CopyLink from './CopyLink';
import DownloadFile from './DownloadFile';
import { useProjectFilter } from '../context/ProjectFilterContext';
import HoverAction from './HoverAction';
import { HoverContext } from './HoverAction';
import { useContext } from 'react';

{
  ` All react icons `;
}
import { GoHome } from 'react-icons/go';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { PiSuitcaseSimpleLight } from 'react-icons/pi';
import { BsLaptop } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { RiFileDownloadFill } from 'react-icons/ri';

{
  ` React Router `;
}
import { Link, Outlet, useLocation } from 'react-router-dom';

{
  ` Size of Icons `;
}
const ICONSIZE_S: number = 32;
const ICONSIZE_M: number = 36;
const COLOR: string = 'gray';

export default function Header() {
  const location = useLocation();
  const { setActiveSkill, setActiveCategory, setSearchParams } = useProjectFilter();
  function handleClick() {
    if (location.pathname === '/') {
      setActiveSkill(null);
      setActiveCategory('all');
      setSearchParams({});
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const { isHovering } = useContext(HoverContext);

  return (
    <>
      <nav className="nav-bar">
        {/* Left: , Email */}
        <div className="nav-left">
          <HoverAction>
            <CopyLink
              link="jbusmith@umich.edu"
              hoverHint={isHovering ? 'Click to copy email' : undefined}
            >
              <MdOutlineEmail color={COLOR} size={ICONSIZE_M} />
            </CopyLink>
          </HoverAction>
        </div>
        {/* Center: Home, Projects, Experiences, GitHub, LinkedIn */}
        <div className="nav-center">
          <Link to="/" className="link" onClick={handleClick}>
            <GoHome color={COLOR} size={ICONSIZE_M} />
            <span className="link-label">Home</span>
          </Link>
          <InternalLink targetId="projects" label="Projects">
            <BsLaptop color={COLOR} size={ICONSIZE_S} aria-hidden="true" />
            <span className="link-label">Jump toProjects</span>
          </InternalLink>
          <Link to="/experience" className="link">
            <PiSuitcaseSimpleLight color={COLOR} size={ICONSIZE_M} aria-hidden="true" />
            <span className="link-label">Experience</span>
          </Link>
          <ExternalLink href="https://github.com/justynsmyth" label="GitHub">
            <FaGithub color={COLOR} size={ICONSIZE_M} aria-hidden="true" />
            <span className="link-label">GitHub</span>
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/justin-bunryu-smith/" label="LinkedIn">
            <FaLinkedinIn color={COLOR} size={ICONSIZE_S} aria-hidden="true" />
            <span className="link-label">LinkedIn</span>
          </ExternalLink>
        </div>
        <div className="nav-right">
          <DownloadFile link="/Smith_1_2025.pdf">
            <RiFileDownloadFill color={COLOR} size={ICONSIZE_S} aria-hidden="true" />
          </DownloadFile>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
