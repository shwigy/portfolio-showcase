import { Link, useParams } from 'react-router-dom'

function ProjectDetail({ projects }) {
  const { id } = useParams()
  const project = projects.find((p) => String(p.id) === id)

  if (!project) {
    return (
      <section className="card project-detail">
        <p>Project not found.</p>
        <Link to="/" className="back-link">
          &larr; Back to projects
        </Link>
      </section>
    )
  }

  return (
    <section className="card project-detail">
      <Link to="/" className="back-link">
        &larr; Back to projects
      </Link>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {project.tech && (
        <p className="project-tech">
          <strong>Tech:</strong> {project.tech}
        </p>
      )}
      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
          View Project
        </a>
      )}
    </section>
  )
}

export default ProjectDetail
