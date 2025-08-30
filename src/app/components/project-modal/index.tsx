import { Project } from '../project/index';
import Image from 'next/image';

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 rounded shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>

        {/* プロジェクト画像 */}
        <div className="mb-6 space-y-4">
          {project.imageUrls.map((url, i) => (
            <Image
              key={i}
              src={`/img/${url}`}
              alt={`${project.name} - ${i + 1}`}
              width={600}
              height={350}
              className="rounded-lg mx-auto"
            />
          ))}
        </div>

        <p className="mb-4 text-gray-600">{project.description}</p>

        <ul className="list-disc list-inside text-left text-gray-700">
          {project.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            className="inline-block mt-4 text-blue-600 underline"
          >
            GitHub リポジトリ
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
