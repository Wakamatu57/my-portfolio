'use client';

import { useState } from 'react';
import ProjectCard from '../project-card';
import ProjectModal from '../project-modal';

export interface Project {
  name: string;
  description: string;
  details: string[];
  imageUrls: string[];
  link?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      name: '家事やってますアピールアプリ',
      description: 'Next.js × Supabase で開発した家事共有アプリ',
      details: [
        '家族間で家事タスクを共有・可視化',
        'Supabase の Row Level Security (RLS) でセキュリティを強化',
        'Next.js App Router + TypeScript + Tailwind で実装',
      ],
      imageUrls: ['kaji-app.png', 'kaji-app2.png'],
      link: 'https://github.com/Wakamatu57/kaji-app',
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="max-w-screen-xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 md:px-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* モーダル */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
