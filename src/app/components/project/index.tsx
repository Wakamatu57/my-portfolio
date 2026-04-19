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
    {
      name: '議事録自動生成ツール',
      description: 'Next.js × Mastra で開発した AI 議事録生成ローカルアプリ',
      details: [
        'Teams のトランスクリプト（.docx / .vtt）をドラッグ&ドロップでアップロード',
        'システム名・プロジェクト名などの基本情報を入力して生成ボタンを押すだけ',
        'AI エージェント（Mastra）が指摘・質問・要確認を自動分類してプレビュー画面を生成',
        'プレビュー画面で担当者・期限を編集後、固定フォーマットの Excel ファイルとしてダウンロード',
        'Next.js App Router + TypeScript + Mastra で実装（プライベートリポジトリ）',
      ],
      imageUrls: ['議事録生成ツール初期画面.png', '議事録生成ツールプレビュー画面.png'],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="max-w-screen-xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
        PROJECTS
      </h2>
      <div className="flex flex-wrap justify-center gap-12 px-6 md:px-12">
        {projects.map((project, index) => (
          <div key={index} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)]">
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </div>
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
