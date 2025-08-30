import Image from 'next/image';
import { Project } from '../project';

const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => {
  return (
    <div
      className="cursor-pointer border rounded-lg p-4 shadow hover:shadow-lg transition"
      onClick={onClick}
    >
      <Image
        className="mx-auto mb-4"
        src={`/img/${project.imageUrls[0]}`}
        alt={project.name}
        width={200}
        height={120}
      />
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="text-gray-500">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
