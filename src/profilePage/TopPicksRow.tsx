import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaCode, FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope, FaMusic, FaBook } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'engineer' | 'researcher' | 'guest';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: 'Work Experience', imgSrc: 'https://picsum.photos/seed/workexperience/250/200', icon: <FaBriefcase />, route: '/work-experience' },
    { title: 'Skills', imgSrc: 'https://picsum.photos/seed/skills/250/200', icon: <FaCode />, route: '/skills' },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/seed/certifications/250/200', icon: <FaCertificate />, route: '/certifications' },
    { title: 'Awards', imgSrc: 'https://picsum.photos/seed/awards/250/200', icon: <FaCertificate />, route: '/awards' },
    { title: 'Projects', imgSrc: 'https://picsum.photos/seed/projects/250/200', icon: <FaProjectDiagram />, route: '/projects' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/seed/contact/250/200', icon: <FaEnvelope />, route: '/contact-me' },
  ],
  engineer: [
    { title: 'Projects', imgSrc: 'https://picsum.photos/seed/development/250/200', icon: <FaProjectDiagram />, route: '/projects' },
    { title: 'Skills', imgSrc: 'https://picsum.photos/seed/coding/250/200', icon: <FaCode />, route: '/skills' },
    { title: 'Work Experience', imgSrc: 'https://picsum.photos/seed/work/250/200', icon: <FaBriefcase />, route: '/work-experience' },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/seed/badge/250/200', icon: <FaCertificate />, route: '/certifications' },
    { title: 'Awards', imgSrc: 'https://picsum.photos/seed/fellows/250/200', icon: <FaCertificate />, route: '/awards' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/seed/connect/250/200', icon: <FaEnvelope />, route: '/contact-me' },
  ],
  researcher: [
    { title: 'Projects', imgSrc: 'https://picsum.photos/seed/research/250/200', icon: <FaProjectDiagram />, route: '/projects' },
    { title: 'Work Experience', imgSrc: 'https://picsum.photos/seed/resume/250/200', icon: <FaBriefcase />, route: '/work-experience' },
    { title: 'Skills', imgSrc: 'https://picsum.photos/seed/ml/250/200', icon: <FaCode />, route: '/skills' },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/seed/achievements/250/200', icon: <FaCertificate />, route: '/certifications' },
    { title: 'Awards', imgSrc: 'https://picsum.photos/seed/award2/250/200', icon: <FaCertificate />, route: '/awards' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/seed/call/250/200', icon: <FaEnvelope />, route: '/contact-me' },
  ],
  guest: [
    { title: 'Projects', imgSrc: 'https://picsum.photos/seed/innovation/250/200', icon: <FaProjectDiagram />, route: '/projects' },
    { title: 'Music', imgSrc: 'https://picsum.photos/seed/music/250/200', icon: <FaMusic />, route: '/music' },
    { title: 'Reading', imgSrc: 'https://picsum.photos/seed/books/250/200', icon: <FaBook />, route: '/reading' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/seed/connect2/250/200', icon: <FaEnvelope />, route: '/contact-me' },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/seed/medal/250/200', icon: <FaCertificate />, route: '/certifications' },
  ],
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <div className="row-header">
        <h2 className="row-title">Top Picks for <span style={{ textTransform: 'capitalize' }}>{profile}</span></h2>
        <p className="row-subtitle">Curated highlights tailored for this persona.</p>
      </div>
      <div className="card-row" role="list">
        {topPicks.map((pick, index) => (
          <div
            key={index}
            className="pick-card"
            role="listitem"
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" loading="lazy" />
            <div className="pick-gradient" />
            <div className="overlay">
              <div className="pick-meta">
                <span className="pick-icon">{pick.icon}</span>
                <span className="pick-label">{pick.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
