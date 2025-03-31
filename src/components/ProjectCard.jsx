import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  // Direct link for PDFs
  if (project.pdfUrl) {
    return (
      <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
        <h2 className="text-xl font-semibold text-blue-600 hover:underline">
          <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h2>
      </div>
    );
  }

  // Link to video or interactive project page
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-blue-600 hover:underline">
        <Link to={`/projects/${project.id}`}>
          {project.title}
        </Link>
      </h2>
    </div>
  );
};

export default ProjectCard;
