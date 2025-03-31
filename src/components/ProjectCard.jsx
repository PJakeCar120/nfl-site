import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="block bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition p-4 h-full"
    >
      <h3 className="text-lg font-semibold text-blue-600 mb-2">
        {project.title}
      </h3>
      {project.description && (
        <p className="text-sm text-gray-600">{project.description}</p>
      )}
    </Link>
  );
}
