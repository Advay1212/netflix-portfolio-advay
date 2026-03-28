import React, { useEffect, useMemo, useState } from 'react';
import './Skills.css';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage } from 'react-icons/si';
import { Skill } from '../types';
import { getSkills } from '../queries/getSkills';

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
  FaPython: <FaPython />,
  FaGitAlt: <FaGitAlt />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
};

const fallbackSkills: Skill[] = [
  {
    name: 'LangChain + Azure OpenAI',
    category: 'Genre: GenAI Systems',
    description: 'Build production RAG pipelines, agentic workflows, and LLM-powered APIs. Shipped a 5,000-doc enterprise RAG system at Softtek with 35% lower hallucination rate.',
    icon: 'FaPython',
  },
  {
    name: 'PyTorch + TensorFlow',
    category: 'Genre: GenAI Systems',
    description: 'Train and fine-tune deep learning models — CNNs, LSTMs, Transformers. Built plant disease detection (97.2% accuracy) and predictive maintenance systems.',
    icon: 'FaPython',
  },
  {
    name: 'ChromaDB + Vector Search',
    category: 'Genre: GenAI Systems',
    description: 'Design and optimize vector stores for semantic search and RAG. Implemented hybrid BM25 + dense retrieval for enterprise document systems.',
    icon: 'SiPostgresql',
  },
  {
    name: 'Python',
    category: 'Genre: Languages',
    description: 'Primary language for ML, data pipelines, and backend APIs. Used across all AI/ML projects including JARVIS, RAG pipelines, and sensor intelligence.',
    icon: 'FaPython',
  },
  {
    name: 'C / C++',
    category: 'Genre: Languages',
    description: 'Systems programming and embedded development. Used for edge ML deployment on Jetson Nano and signal processing algorithms at Carbine Systems.',
    icon: 'FaJava',
  },
  {
    name: 'TypeScript + React',
    category: 'Genre: Languages',
    description: 'Build responsive, accessible front-end interfaces. Used for ML dashboards, portfolio sites, and data visualization tools.',
    icon: 'FaReact',
  },
  {
    name: 'FastAPI + REST',
    category: 'Genre: Languages',
    description: 'Design and deploy high-performance async APIs. Served 200+ daily users on the Softtek RAG backend with sub-1.5s response times.',
    icon: 'FaNodeJs',
  },
  {
    name: 'Azure + AWS',
    category: 'Genre: Cloud & Tools',
    description: 'Deploy ML models and APIs on Azure OpenAI Service and AWS. Manage cloud infrastructure for production AI applications.',
    icon: 'FaAws',
  },
  {
    name: 'Docker + CI/CD',
    category: 'Genre: Cloud & Tools',
    description: 'Containerize ML services and automate deployment pipelines. Ensures reproducible environments from dev to production.',
    icon: 'FaDocker',
  },
  {
    name: 'OpenCV + Computer Vision',
    category: 'Genre: Cloud & Tools',
    description: 'Real-time image processing, object detection, and video analytics. Used in plant disease detection, emotion detection, and sensor fusion projects.',
    icon: 'FaPython',
  },
  {
    name: 'Git + GitHub',
    category: 'Genre: Cloud & Tools',
    description: 'Version control, code review, and open-source collaboration. Maintain multiple public repositories with active contributions.',
    icon: 'FaGitAlt',
  },
];

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>(fallbackSkills);

  useEffect(() => {
    let ignore = false;
    async function loadSkills() {
      try {
        const remoteSkills = await getSkills();
        if (!ignore && remoteSkills.length) {
          setSkillsData(remoteSkills);
        }
      } catch (error) {
        console.error('Failed to load skills from Supabase', error);
      }
    }
    loadSkills();
    return () => {
      ignore = true;
    };
  }, []);

  const skillsByCategory = useMemo(() => {
    return skillsData.reduce<Record<string, Skill[]>>((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});
  }, [skillsData]);


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
