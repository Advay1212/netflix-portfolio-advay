import React from 'react';
import './Blogs.css';
import { FaMedium, FaGithub, FaLinkedin } from 'react-icons/fa';

const blogs = [
  {
    title: 'Forget What You Know About AI Chatbots: A Real Guide to Building a RAG System That Actually Works',
    platform: 'Medium',
    icon: <FaMedium />,
    link: 'https://medium.com/@advay-12/forget-what-you-know-about-ai-chatbots-a-real-guide-to-building-a-rag-system-that-actually-works-d8e4b5c55cf3',
    description: 'A no-fluff, production-focused guide to building RAG systems that actually work — covering chunking strategies, hybrid retrieval, hallucination reduction, and deployment lessons from the field.',
  },
  {
    title: 'Building JARVIS — My Personal AI Assistant',
    platform: 'GitHub',
    icon: <FaGithub />,
    link: 'https://github.com/Advay1212',
    description: 'How I built a GPT-4o powered assistant with voice I/O, ChromaDB memory, and tool-use from scratch.',
  },
  {
    title: 'RAG in Production — Lessons from Softtek',
    platform: 'LinkedIn',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/advay-suryavanshi-55089b259/',
    description: 'What I learned building a 5,000-doc enterprise RAG pipeline with LangChain and Azure OpenAI.',
  },
  {
    title: 'Edge AI on Jetson Nano — Sensor Fusion Deep Dive',
    platform: 'LinkedIn',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/advay-suryavanshi-55089b259/',
    description: 'Deploying lightweight CNNs for real-time multi-modal sensor fusion at Carbine Systems.',
  },
];

const showComingSoon = false;

const Blogs: React.FC = () => {
  const hasPosts = !showComingSoon && blogs.length > 0;

  return (
    <div className="blogs-container">
      <h2 className="blogs-title">Writing & reflections</h2>
      <p className="blogs-intro">Where I unpack GenAI builds, ML research, and engineering lessons.</p>

      {hasPosts ? (
        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <a
              href={blog.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
              style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
            >
              <div className="blog-icon animated-icon">{blog.icon}</div>
              <div className="blog-info animated-text">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <span className="blog-platform">{blog.platform}</span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="blogs-placeholder">
          <p>Fresh blogs and LinkedIn write-ups are on the way.</p>
          <p>I'm packaging Build in Public recaps, fellowship takeaways, and design journals next.</p>
          <a
            href="https://www.linkedin.com/in/advay-suryavanshi-55089b259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on LinkedIn for live updates
          </a>
        </div>
      )}
    </div>
  );
};

export default Blogs;
