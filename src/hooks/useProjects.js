import { useEffect, useState } from 'react'
import seedData from '../../db.json'

const STORAGE_KEY = 'portfolio-showcase-projects-v2'

function loadInitialProjects() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return seedData.projects

  try {
    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed : seedData.projects
  } catch {
    return seedData.projects
  }
}

export function useProjects() {
  const [projects, setProjects] = useState(loadInitialProjects)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
  }, [projects])

  function addProject({ title, description, tech, link }) {
    setProjects((prev) => {
      const nextId = prev.length ? Math.max(...prev.map((p) => p.id)) + 1 : 1
      return [...prev, { id: nextId, title, description, tech, link }]
    })
  }

  return { projects, addProject }
}
