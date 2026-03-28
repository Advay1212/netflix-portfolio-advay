import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileBanner as ProfileBannerType } from '../types';

const bannerData: ProfileBannerType = {
  backgroundImage: {
    url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80',
  },
  headline: 'Generative AI & Machine Learning Engineer',
  resumeLink: {
    url: '/Advay_Resume.pdf',
  },
  linkedinLink: 'https://www.linkedin.com/in/advay-suryavanshi-55089b259/',
  profileSummary:
    'From engineering RAG pipelines over 5,000+ enterprise documents at Softtek to building award-winning predictive maintenance systems, I turn cutting-edge ML research into production-grade AI. I work across the GenAI stack — LangChain, Azure OpenAI, PyTorch, FastAPI — shipping systems that reduce costs, automate workflows, and scale cleanly. Passionate about the intersection of Generative AI, computer vision, and real-world impact.',
};

interface ProfileBannerProps {
  backgroundImageUrl?: string;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ backgroundImageUrl }) => {
  const heroBackground = backgroundImageUrl ?? bannerData.backgroundImage.url;
  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, '_blank');
  };

  return (
    <div
      className="profile-banner"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.9) 100%), url(${heroBackground})`,
      }}
    >
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          {bannerData.headline}
        </h1>
        <p className="banner-description">{bannerData.profileSummary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
