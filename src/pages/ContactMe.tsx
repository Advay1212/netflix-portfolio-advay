import React from 'react';
import './ContactMe.css';
import profilePic from '../images/ADVAY_PIC.jpg';
import { FaCoffee, FaLinkedin } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';

const contactInfo: IContactMe = {
  profilePicture: { url: profilePic },
  name: 'Advay Suryavanshi',
  title: 'Generative AI & Machine Learning Engineer',
  summary:
    'Generative AI & ML Engineer with hands-on production experience building RAG pipelines, computer vision systems, and LLM-powered applications. From engineering enterprise document search at Softtek India to deploying edge AI on Jetson Nano at Carbine Systems, I ship AI that works in the real world. Passionate about LangChain, PyTorch, Azure OpenAI, and turning cutting-edge research into scalable products.',
  companyUniversity: 'B.Tech Computer Engineering · 2026',
  linkedinLink: 'https://www.linkedin.com/in/advay-suryavanshi-55089b259/',
  email: '',
  phoneNumber: '',
};

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <section className="contact-hero">
        <p className="hero-eyebrow">Now Booking in India</p>
        <h1>Generative AI & Machine Learning Engineer</h1>
        <p className="hero-copy">{contactInfo.summary}</p>
        <div className="hero-buttons">
          <a
            href={contactInfo.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button primary"
          >
            <FaLinkedin /> Connect on LinkedIn
          </a>
        </div>
      </section>

      <section className="contact-grid">
        <div className="linkedin-badge-custom">
          <img src={contactInfo.profilePicture.url} alt="Advay Suryavanshi" className="badge-avatar" />
          <div className="badge-content">
            <h3 className="badge-name">{contactInfo.name}</h3>
            <p className="badge-title">{contactInfo.title}</p>
            <p className="badge-description">{contactInfo.summary}</p>
            <p className="badge-company">{contactInfo.companyUniversity}</p>
            <a
              href={contactInfo.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              <FaLinkedin className="linkedin-icon" /> View Profile
            </a>
          </div>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a
              href={contactInfo.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Message me on LinkedIn
            </a>
          </div>
          <div className="contact-fun">
            <p>Prefer IRL? Let&rsquo;s grab a coffee &#9749;</p>
            <FaCoffee className="coffee-icon" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;

