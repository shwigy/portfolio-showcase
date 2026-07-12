import ProjectCard from './ProjectCard'

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="empty-state">No projects match your search.</p>
  }

  return (
    <ul className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  )
}

export default ProjectList
