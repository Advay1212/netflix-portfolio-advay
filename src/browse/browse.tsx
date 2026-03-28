import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import yellowImage from '../images/yellow.png';
import './browse.css';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: 'recruiter',
      label: 'Recruiter',
      image: blueImage,
      backgroundGif: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
    },
    {
      name: 'engineer',
      label: 'Engineer',
      image: greyImage,
      backgroundGif: 'https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif',
    },
    {
      name: 'researcher',
      label: 'Researcher',
      image: redImage,
      backgroundGif: 'https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif',
    },
    {
      name: 'guest',
      label: 'Guest',
      image: yellowImage,
      backgroundGif: 'https://media.giphy.com/media/xT0xelrGA7QtTNPaoA/giphy.gif',
    },
  ];

  const handleProfileClick = (profile: { name: string; image: string; backgroundGif: string }) => {
    navigate(`/profile/${profile.name}`, {
      state: { profileImage: profile.image, backgroundGif: profile.backgroundGif },
    });
  };

  return (
    <div className="browse-container">
      <p className="who-is-watching">Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.label}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
