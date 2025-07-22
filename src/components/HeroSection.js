import React, { useEffect, useState, useMemo } from 'react';
import './HeroSection.css';
import Profile from '../assets/profile.jpg';
import Aniket_FResume_7 from '../assets/Aniket_FResume_7.pdf';

const HeroSection = () => {
  const lines = useMemo(() => [
    'Hi, I am ANIKET AWASTHI.',
    'Computer Science Engineer.',
    'Innovate! Implement!! Impress!!!'
  ], []);

  const [displayedText, setDisplayedText] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    if (lineIndex < lines.length) {
      if (charIndex <= lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          const currentLine = lines[lineIndex].slice(0, charIndex);
          const updatedText = [...displayedText];
          updatedText[lineIndex] = currentLine;
          setDisplayedText(updatedText);
          setCharIndex((prev) => prev + 1);
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const delay = setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 500);
        return () => clearTimeout(delay);
      }
    } else {
      const pause = setTimeout(() => {
        setDisplayedText([]);
        setLineIndex(0);
        setCharIndex(0);
        setIsPaused(false);
      }, 3000);
      setIsPaused(true);
      return () => clearTimeout(pause);
    }
  }, [charIndex, lineIndex, isPaused, displayedText, lines]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src={Profile} alt="Aniket Awasthi" className="hero-image" />
        <div className="typewriter-text">
          {lines.map((_, idx) => (
            <div key={idx}>{displayedText[idx]}</div>
          ))}
        </div>
        <a href={Aniket_FResume_7} className="resume-button" download>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
