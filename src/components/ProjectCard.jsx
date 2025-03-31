import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  // If the project has a pdfUrl, link directly to it
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
  
  // If it has a videoUrl, you might do something similar (or use a dedicated page)
  if (project.videoUrl) {
    return (
      <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
        <h2 className="text-xl font-semibold text-blue-600 hover:underline">
          <Link to={`/project/${project.id}`}>
            {project.title}
          </Link>
        </h2>
      </div>
    );
  }
  
  // Default: use React Router for CSV (or other) projects
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-blue-600 hover:underline">
        <Link to={`/project/${project.id}`}>
          {project.title}
        </Link>
      </h2>
    </div>
  );
};

export default ProjectCard;
