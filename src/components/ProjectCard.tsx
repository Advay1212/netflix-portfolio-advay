import React, { useState } from 'react';
import './ProjectCard.css';

export interface ProjectCardData {
  title: string;
  subtitle: string;
  matchScore: number;
  dateRange: string;
  description: string;
  bullets: string[];
  tags: string[];
  image: string;
  isOriginal?: boolean;
  award?: string;
}

interface ProjectCardProps {
  data: ProjectCardData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="pc-card" onClick={() => setOpen(true)} role="button" tabIndex={0}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(true)}>
        <div className="pc-poster">
          <img src={data.image} alt={data.title} loading="lazy" />
          {data.isOriginal && <span className="pc-badge pc-badge--original">ADVAY ORIGINAL</span>}
          {data.award && <span className="pc-badge pc-badge--award">🏆 {data.award}</span>}
          <div className="pc-hover-overlay">
            <div className="pc-match">{data.matchScore}% Match</div>
            <div className="pc-hover-title">{data.title}</div>
            <div className="pc-hover-tags">
              {data.tags.slice(0, 3).map(t => <span key={t} className="pc-tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="pc-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="pc-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="pc-modal-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
            <div className="pc-modal-hero" style={{ backgroundImage: `url(${data.image})` }}>
              <div className="pc-modal-hero-gradient" />
              <div className="pc-modal-hero-content">
                {data.isOriginal && <span className="pc-badge pc-badge--original">ADVAY ORIGINAL</span>}
                <h2 className="pc-modal-title">{data.title}</h2>
                <p className="pc-modal-subtitle">{data.subtitle}</p>
              </div>
            </div>
            <div className="pc-modal-body">
              <div className="pc-modal-meta">
                <span className="pc-match pc-match--lg">{data.matchScore}% Match</span>
                <span className="pc-modal-date">{data.dateRange}</span>
                {data.award && <span className="pc-badge pc-badge--award">🏆 {data.award}</span>}
              </div>
              <p className="pc-modal-desc">{data.description}</p>
              {data.bullets.length > 0 && (
                <ul className="pc-modal-bullets">
                  {data.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}
              <div className="pc-modal-tags">
                <span className="pc-modal-tags-label">Cast / Tools:</span>
                {data.tags.map(t => <span key={t} className="pc-tag">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
