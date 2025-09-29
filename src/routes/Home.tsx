import { useEffect, useState } from 'react';

import { IoLocationOutline } from "react-icons/io5";
import { LiaUniversitySolid } from "react-icons/lia";
import { LuLightbulb } from "react-icons/lu";

import { SkillData } from "../types/types"

import skillsData from '../data/skills.json'

import MichiganLogo from "../assets/Block_M-Hex.png";
import "../css/Home.css"
import clsx from "clsx"

const Home = () => {
    const skills : SkillData[] = skillsData.skills

    // Create skill components
    const skillBubbles = skills.map((skill: SkillData, index: number) => {
    const color = skill.color || "golang";
    return (
        <button
            key={index}
            className={`button-${color}`}
        >
            {skill.name}
        </button>
    )
})

    return (
        <div className="page-wrapper">
            <div className="about-container">
                <span className="about-section-label unselectable"> About Me </span>
                <section className="about-section unselectable">
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
                <p className="target-positions">
                    <LuLightbulb className="icon" />
                    Prospective Entry Level
                    <span className="highlight bubble-blue">Software Engineer</span>
                    <span className="highlight bubble-purple">Game Developer</span>
                </p>
                </section>
            </div>
            <div className="skills-container">
                <span className="about-section-label unselectable"> Skills </span>
                <div className="skill-bubble-container">
                    {skillBubbles}
                </div>
            </div>
        </div>
    )
}

export default Home;
