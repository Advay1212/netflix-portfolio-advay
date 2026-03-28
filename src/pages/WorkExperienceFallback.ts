import { TimelineItem } from '../types';

export const fallbackTimeline: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'Softtek India - On-site',
    title: 'Generative AI Intern',
    techStack: 'LangChain | Azure OpenAI | ChromaDB | FastAPI | Python | RAG',
    summaryPoints: [
      'Engineered a RAG pipeline over 5,000+ enterprise documents using LangChain + Azure OpenAI, enabling conversational document search for internal teams.',
      'Implemented hybrid retrieval (BM25 + dense embeddings) with ChromaDB, cutting hallucination rate by 35%.',
      'Built async document ingestion microservice handling PDF, DOCX, and HTML; reduced average query response time from 8s to 1.4s.',
      'Deployed production FastAPI backend with caching layer, serving 200+ daily active users.',
    ],
    dateRange: 'Sep 2025 – Jan 2026',
    sortOrder: 1,
  },
  {
    timelineType: 'work',
    name: 'Carbine Systems - On-site',
    title: 'R&D Intern',
    techStack: 'Python | PyTorch | OpenCV | C++ | Jetson Nano | Signal Processing',
    summaryPoints: [
      'Developed signal processing algorithms for multi-modal sensor fusion (IMU, LIDAR, thermal) for defense-adjacent applications.',
      'Trained lightweight CNN models for edge deployment on Jetson Nano embedded hardware, achieving real-time inference at 30fps.',
      'Built automated data labeling pipeline reducing annotation time by 60%.',
      'Authored technical reports and presented findings to senior engineering leadership.',
    ],
    dateRange: 'Feb 2025 – July 2025',
    sortOrder: 2,
  },
  {
    timelineType: 'education',
    name: 'University - B.Tech Computer Engineering',
    title: 'B.Tech Computer Engineering',
    techStack: 'Machine Learning | Deep Learning | Data Structures | Computer Vision | NLP',
    summaryPoints: [
      'Relevant coursework: Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Data Structures & Algorithms, Cloud Computing.',
      'Built award-winning Predictive Maintenance System as final year project.',
      'Active member of AI/ML research group; presented papers on transformer architectures.',
    ],
    dateRange: '2022 – 2026',
    sortOrder: 90,
  },
];
