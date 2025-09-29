import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { IoLocationOutline } from 'react-icons/io5';
import { LiaUniversitySolid } from 'react-icons/lia';
import { LuLightbulb } from 'react-icons/lu';

import { SkillData } from '../types/types';

import skillsData from '../data/skills.json';

import MichiganLogo from '../assets/Block_M-Hex.png';
import '../css/Home.css';
import clsx from 'clsx';

const Home = () => {
  const skills: SkillData[] = skillsData.skills;

  // Create skill components
  const skillBubbles = skills.map((skill: SkillData, index: number) => {
    const color = skill.color || 'golang';
    return (
      <button key={index} className={`button-${color}`}>
        {skill.name}
      </button>
    );
  });
  const helloArray = ['こんにちは', 'Hi', 'Heyo', 'Greetings', 'Hello', 'Howdy'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  // Rotate greeting every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        let next;
        do {
          next = Math.floor(Math.random() * helloArray.length);
        } while (next === prev);
        return next;
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Reset when greeting changes
  useEffect(() => {
    setTextIndex(0);
    setDisplayText('');
  }, [currentIndex]);

  // Typewriter
  useEffect(() => {
    if (textIndex < helloArray[currentIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + helloArray[currentIndex][textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, currentIndex]);

  return (
    <div className="page-wrapper">
      <div className="about-container">
        <span className="about-section-label unselectable"> About Me </span>
        <section className="about-section unselectable">
          <p className="intro">
            <span className="greeting-line">
              <span className="greeting">{displayText}</span>
              <span className="cursor">|</span>
              <span>,</span>
            </span>
            <span>
              I'm <span className="name">Justin Bunryu Smith</span>
            </span>
          </p>
          <p className="location">
            <IoLocationOutline className="icon" />
            Windermere, FL
          </p>
          <p className="education">
            <LiaUniversitySolid className="icon" />
            B.S. Computer Science, University of Michigan
            <img src={MichiganLogo} alt="University of Michigan Logo" className="logo" />
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
        <div className="skill-bubble-container">{skillBubbles}</div>
        <Link className="projects-link" to="/projects">
          Jump to Projects
        </Link>
      </div>
    </div>
  );
};

export default Home;
