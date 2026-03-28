import React from 'react';
import './Awards.css';

interface Award {
  title: string;
  org: string;
  year: string;
  description: string;
}

const awards: Award[] = [
  {
    title: 'Best AI Project Award',
    org: 'University / Technical Fest',
    year: '2026',
    description:
      'Won Best AI Project for the Predictive Maintenance System — a multi-model ML pipeline achieving 94%+ accuracy on industrial sensor data, reducing unplanned downtime significantly.',
  },
  {
    title: 'Generative AI Intern',
    org: 'Softtek India',
    year: 'July 2025 – Jan 2026',
    description:
      'Selected for a competitive Generative AI internship. Engineered a production RAG pipeline over 5,000+ enterprise documents, cutting hallucination rate by 35% and response time from 8s to 1.4s.',
  },
  {
    title: 'R&D Intern',
    org: 'Carbine Systems',
    year: 'Feb – July 2025',
    description:
      'Chosen for R&D internship focused on edge AI and sensor fusion. Deployed lightweight CNN models on Jetson Nano for real-time inference and built automated labeling pipelines saving 60% annotation time.',
  },
  {
    title: 'Plant Disease Detection — 97.2% Accuracy',
    org: 'Personal Research Project',
    year: '2024',
    description:
      'Fine-tuned EfficientNet-B4 on 54,000+ PlantVillage images across 38 disease classes. Deployed with ONNX runtime achieving sub-200ms inference on mobile devices.',
  },
  {
    title: 'AI Assistant JARVIS',
    org: 'Personal Project',
    year: '2023 – 2024',
    description:
      'Built a fully functional personal AI assistant with GPT-4o function-calling, Whisper voice I/O, ElevenLabs TTS, and ChromaDB persistent memory — a complete end-to-end GenAI system.',
  },
  {
    title: 'Open Source Contributor',
    org: 'GitHub — Advay1212',
    year: 'Ongoing',
    description:
      'Maintain multiple public repositories including awesome-generative-ai-guide and various ML/AI projects. Active contributor to the GenAI community.',
  },
];

const Awards: React.FC = () => {
  return (
    <div className="awards-container">
      <div className="awards-header">
        <h2>Awards & Achievements</h2>
        <p>Milestones, recognitions, and projects that define the journey as a Generative AI & ML Engineer.</p>
      </div>
      <div className="awards-grid">
        {awards.map((award, index) => (
          <div key={index} className="award-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="award-meta">
              <span className="award-year">{award.year}</span>
              <span className="award-org">{award.org}</span>
            </div>
            <h3 className="award-title">{award.title}</h3>
            <p className="award-description">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
