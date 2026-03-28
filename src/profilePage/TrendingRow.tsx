import React, { useRef } from 'react';
import ProjectCard, { ProjectCardData } from '../components/ProjectCard';
import './TrendingRow.css';

const advayProjects: ProjectCardData[] = [
  {
    title: 'Predictive Maintenance System',
    subtitle: 'Award-Winning Industrial AI',
    matchScore: 99,
    dateRange: '2024',
    description:
      'Award-winning ML system that predicts equipment failures before they occur, reducing unplanned downtime and maintenance costs in industrial environments.',
    bullets: [
      'Built multi-class classification models (Random Forest, XGBoost, LSTM) achieving 94%+ accuracy on sensor data',
      'Engineered real-time anomaly detection pipeline processing 10,000+ sensor readings per minute',
      'Reduced false positive alerts by 40% through ensemble model stacking and threshold tuning',
      'Deployed REST API with FastAPI; integrated with SCADA dashboards for live monitoring',
    ],
    tags: ['Python', 'PyTorch', 'XGBoost', 'FastAPI', 'LSTM', 'Scikit-learn'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    isOriginal: true,
    award: 'Best AI Project',
  },
  {
    title: 'Plant Disease Detection',
    subtitle: 'Computer Vision · Agriculture AI',
    matchScore: 96,
    dateRange: '2024',
    description:
      'Deep learning system that identifies plant diseases from leaf images with high accuracy, enabling early intervention for farmers.',
    bullets: [
      'Fine-tuned EfficientNet-B4 on PlantVillage dataset (54,000+ images, 38 disease classes) achieving 97.2% test accuracy',
      'Built data augmentation pipeline (rotation, color jitter, cutmix) to improve generalization on field images',
      'Deployed as a mobile-friendly web app with sub-200ms inference using ONNX runtime',
      'Integrated Grad-CAM visualizations so farmers can see which leaf regions triggered the diagnosis',
    ],
    tags: ['Python', 'PyTorch', 'EfficientNet', 'OpenCV', 'ONNX', 'Grad-CAM'],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
    isOriginal: false,
  },
  {
    title: 'AI Assistant (JARVIS)',
    subtitle: 'Generative AI · Voice & Chat',
    matchScore: 98,
    dateRange: '2023 – 2024',
    description:
      'Personal AI assistant inspired by Iron Man\'s JARVIS — combines LLM reasoning, voice I/O, and tool-use to automate tasks and answer questions conversationally.',
    bullets: [
      'Integrated GPT-4o with function-calling for web search, calendar management, and code execution',
      'Built speech-to-text (Whisper) + text-to-speech (ElevenLabs) pipeline for natural voice interaction',
      'Implemented memory module using ChromaDB vector store for persistent context across sessions',
      'Added RAG over personal notes and documents for personalized, grounded responses',
    ],
    tags: ['Python', 'GPT-4o', 'LangChain', 'ChromaDB', 'Whisper', 'ElevenLabs'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80',
    isOriginal: true,
  },
  {
    title: 'RAG Enterprise Pipeline',
    subtitle: 'Softtek India · Generative AI Intern',
    matchScore: 97,
    dateRange: 'Jun 2024 – Aug 2024',
    description:
      'Production RAG system built during internship at Softtek India, enabling enterprise employees to query 5,000+ internal documents conversationally.',
    bullets: [
      'Engineered a RAG pipeline over 5,000+ enterprise documents using LangChain + Azure OpenAI',
      'Implemented hybrid retrieval (BM25 + dense embeddings) with ChromaDB, cutting hallucination rate by 35%',
      'Built document ingestion microservice handling PDF, DOCX, and HTML with chunking strategies',
      'Reduced average query response time from 8s to 1.4s through async processing and caching',
    ],
    tags: ['LangChain', 'Azure OpenAI', 'ChromaDB', 'Python', 'FastAPI', 'BM25'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    isOriginal: true,
  },
  {
    title: 'R&D Sensor Intelligence',
    subtitle: 'Carbine Systems · R&D Intern',
    matchScore: 94,
    dateRange: 'Jan 2024 – May 2024',
    description:
      'R&D project at Carbine Systems focused on intelligent sensor data processing and anomaly detection for defense-adjacent applications.',
    bullets: [
      'Developed signal processing algorithms for multi-modal sensor fusion (IMU, LIDAR, thermal)',
      'Trained lightweight CNN models for edge deployment on embedded hardware (Jetson Nano)',
      'Built automated data labeling pipeline reducing annotation time by 60%',
      'Authored technical reports and presented findings to senior engineering team',
    ],
    tags: ['Python', 'PyTorch', 'OpenCV', 'Jetson Nano', 'Signal Processing', 'C++'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    isOriginal: false,
  },
];

const TrendingRow: React.FC = () => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({ left: dir === 'right' ? 440 : -440, behavior: 'smooth' });
  };

  return (
    <div className="trending-row">
      <div className="row-header">
        <h2 className="row-title">Trending Now</h2>
        <p className="row-subtitle">Projects & Roles — click any card for the full breakdown.</p>
      </div>
      <div className="trending-track-wrapper">
        <button className="trending-arrow trending-arrow--left" onClick={() => scroll('left')} aria-label="Scroll left">‹</button>
        <div className="trending-track" ref={rowRef}>
          {advayProjects.map((project, i) => (
            <ProjectCard key={i} data={project} />
          ))}
        </div>
        <button className="trending-arrow trending-arrow--right" onClick={() => scroll('right')} aria-label="Scroll right">›</button>
      </div>
    </div>
  );
};

export default TrendingRow;
