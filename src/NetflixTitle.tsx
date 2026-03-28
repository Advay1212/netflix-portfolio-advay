import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';

const LETTERS = ['A', 'D', 'V', 'A', 'Y'];

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isClicked) return;
    const audio = new Audio(netflixSound);
    audio.play().catch(() => {});
    setIsClicked(true);
  };

  useEffect(() => {
    if (!isClicked) return;
    // Stagger each letter highlight
    LETTERS.forEach((_, i) => {
      setTimeout(() => setActiveIdx(i), i * 180);
    });
    const timer = setTimeout(() => navigate('/browse'), 4000);
    return () => clearTimeout(timer);
  }, [isClicked, navigate]);

  return (
    <div className="nt-container" onClick={handleClick}>
      <div className="nt-hint">{!isClicked && 'Click to enter'}</div>
      <div className={`nt-word ${isClicked ? 'nt-word--animate' : ''}`}>
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className={`nt-letter ${activeIdx >= i ? 'nt-letter--lit' : ''}`}
            style={{ animationDelay: `${i * 0.18}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="nt-tagline">Generative AI &amp; Machine Learning Engineer</div>
    </div>
  );
};

export default NetflixTitle;
