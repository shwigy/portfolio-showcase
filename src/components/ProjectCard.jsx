import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <li className="project-card">
      <Link to={`/projects/${project.id}`} className="project-card-link">
        <div className="project-thumb" aria-hidden="true">
          <span className="thumb-cross" />
        </div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </Link>
    </li>
  )
}

export default ProjectCard
