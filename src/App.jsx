import { useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AddProjectForm from './components/AddProjectForm'
import SearchBar from './components/SearchBar'
import ProjectList from './components/ProjectList'
import ProjectDetail from './components/ProjectDetail'
import { useProjects } from './hooks/useProjects'
import './App.css'

function App() {
  const { projects, addProject } = useProjects()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    if (!term) return projects

    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term),
    )
  }, [projects, searchTerm])

  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddProjectForm onAddProject={addProject} />
                <section className="card projects-card">
                  <SearchBar value={searchTerm} onChange={setSearchTerm} />
                  <ProjectList projects={filteredProjects} />
                </section>
              </>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetail projects={projects} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
