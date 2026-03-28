import React from 'react';
import './Projects.css';
import { FaGithub, FaPython, FaReact } from 'react-icons/fa';
import { SiPytorch, SiOpencv, SiFastapi, SiTensorflow, SiTypescript } from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';

const techIcons: { [key: string]: JSX.Element } = {
  'Python': <FaPython />,
  'PyTorch': <SiPytorch />,
  'OpenCV': <SiOpencv />,
  'FastAPI': <SiFastapi />,
  'TensorFlow': <SiTensorflow />,
  'React': <FaReact />,
  'TypeScript': <SiTypescript />,
  'Azure OpenAI': <FaMicrosoft />,
  'LangChain': <FaPython />,
  'GPT-4o': <FaPython />,
  'ChromaDB': <FaPython />,
  'Whisper': <FaPython />,
  'XGBoost': <FaPython />,
  'Scikit-learn': <FaPython />,
  'EfficientNet': <SiPytorch />,
  'ONNX': <SiPytorch />,
  'C++': <FaPython />,
  'Gemini AI': <FaPython />,
  'Supabase': <FaReact />,
};

interface Project {
  title: string;
  summary: string;
  techUsed: string[];
  githubUrl: string;
  image: string;
  imageAlt: string;
  award?: string;
}

const projects: Project[] = [
  {
    title: 'Predictive Maintenance System',
    summary:
      'Award-winning ML system predicting equipment failures before they occur. Multi-model pipeline (Random Forest, XGBoost, LSTM) achieving 94%+ accuracy on industrial sensor data with real-time anomaly detection processing 10,000+ sensor readings per minute.',
    techUsed: ['Python', 'PyTorch', 'XGBoost', 'FastAPI', 'Scikit-learn'],
    githubUrl: 'https://github.com/Advay1212',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Predictive Maintenance System',
    award: '🏆 Best AI Project',
  },
  {
    title: 'Plant Disease Detection',
    summary:
      'Deep learning system identifying plant diseases from leaf images. Fine-tuned EfficientNet-B4 on 54,000+ PlantVillage images achieving 97.2% accuracy across 38 disease classes. Deployed with ONNX runtime for sub-200ms mobile inference with Grad-CAM visualizations.',
    techUsed: ['Python', 'PyTorch', 'EfficientNet', 'OpenCV', 'ONNX'],
    githubUrl: 'https://github.com/Advay1212',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Plant Disease Detection',
  },
  {
    title: 'AI Assistant (JARVIS)',
    summary:
      'Personal AI assistant with GPT-4o function-calling, Whisper speech-to-text, ElevenLabs TTS, and ChromaDB persistent memory. Supports web search, calendar management, code execution, and RAG over personal documents for context-aware conversations.',
    techUsed: ['Python', 'GPT-4o', 'LangChain', 'ChromaDB', 'Whisper'],
    githubUrl: 'https://github.com/Advay1212',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'AI Assistant JARVIS',
  },
  {
    title: 'RAG Enterprise Pipeline',
    summary:
      'Production RAG system built at Softtek India over 5,000+ enterprise documents. Hybrid BM25 + dense retrieval with ChromaDB cut hallucination rate by 35% and response time from 8s to 1.4s. Served 200+ daily active users.',
    techUsed: ['LangChain', 'Azure OpenAI', 'ChromaDB', 'Python', 'FastAPI'],
    githubUrl: 'https://github.com/Advay1212',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'RAG Enterprise Pipeline',
  },
  {
    title: 'Edge AI — Sensor Fusion',
    summary:
      'R&D project at Carbine Systems: multi-modal sensor fusion (IMU, LIDAR, thermal) with lightweight CNN models deployed on Jetson Nano for real-time 30fps inference. Built automated data labeling pipeline reducing annotation time by 60%.',
    techUsed: ['Python', 'PyTorch', 'OpenCV', 'C++'],
    githubUrl: 'https://github.com/Advay1212',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Edge AI Sensor Fusion',
  },
  {
    title: 'Netflix-Inspired Portfolio',
    summary:
      'This very site — a cinematic Netflix-style portfolio where visitors pick a persona and explore projects, experience, and skills. Powered by React, TypeScript, Supabase, and Gemini AI.',
    techUsed: ['React', 'TypeScript', 'Supabase', 'Gemini AI'],
    githubUrl: 'https://github.com/Advay1212/netflix_portfolio',
    image: 'https://raw.githubusercontent.com/Advay1212/netflix_portfolio/main/image.png',
    imageAlt: 'Netflix inspired portfolio',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-cta">
        <div>
          <h2>Advay's Builds & Experiments</h2>
          <p>ML systems, GenAI pipelines, and computer vision projects.</p>
        </div>
        <a
          href="https://github.com/Advay1212?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub /> Explore GitHub
        </a>
      </div>

      <section className="project-section">
        <h3>Spotlight Builds</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card"
              style={{ '--delay': `${index * 0.07}s` } as React.CSSProperties}
            >
              <div className="project-card-media">
                <img src={project.image} alt={project.imageAlt} className="project-image" />
                {project.award && <span className="project-chip">{project.award}</span>}
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tech-used">
                  {project.techUsed.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {techIcons[tech] || null} {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
