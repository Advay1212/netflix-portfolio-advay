import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiOracle, SiAmazon } from 'react-icons/si';
import { FaLink } from 'react-icons/fa';

interface CertItem {
  title: string;
  issuer: string;
  issuedDate: string;
  link: string;
  icon: JSX.Element;
}

const certifications: CertItem[] = [
  {
    title: 'Oracle Cloud Infrastructure Certified GenAI Professional',
    issuer: 'Oracle',
    issuedDate: '2024',
    link: 'https://www.linkedin.com/in/advay-suryavanshi-55089b259/overlay/Certifications/1207222625/treasury/?profileId=ACoAAD-rVkwBt1nn3WCXDeXu_IoFpVjEEmcoMgA',
    icon: <SiOracle />,
  },
  {
    title: 'LangGraph Foundation',
    issuer: 'LangChain Academy',
    issuedDate: '2024',
    link: 'https://academy.langchain.com/certificates/p0wv26fvim',
    icon: <FaLink />,
  },
  {
    title: 'LangChain for LLM Application Development',
    issuer: 'DeepLearning.AI',
    issuedDate: '2024',
    link: 'https://learn.deeplearning.ai/accomplishments/88114f18-5f70-488e-bb7b-bf5f5d66e475?usp=sharing',
    icon: <FaLink />,
  },
  {
    title: 'AWS Generative AI Practitioner',
    issuer: 'Amazon Web Services',
    issuedDate: '2024',
    link: 'https://www.linkedin.com/in/advay-suryavanshi-55089b259/overlay/Certifications/351579938/treasury/?profileId=ACoAAD-rVkwBt1nn3WCXDeXu_IoFpVjEEmcoMgA',
    icon: <SiAmazon />,
  },
];

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <h2 className="certifications-title">Certifications & Badges</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="certification-content">
              <div className="certification-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <span className="issued-date">Issued {cert.issuedDate}</span>
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
