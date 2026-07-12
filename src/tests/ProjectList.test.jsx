import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import ProjectList from '../components/ProjectList'

const projects = [
  { id: 1, title: 'Weather App', description: 'Shows alerts' },
  { id: 2, title: 'Dictionary', description: 'Looks up words' },
]

describe('ProjectList', () => {
  it('renders a card for each project', () => {
    render(
      <MemoryRouter>
        <ProjectList projects={projects} />
      </MemoryRouter>,
    )

    expect(screen.getByText('Weather App')).toBeInTheDocument()
    expect(screen.getByText('Dictionary')).toBeInTheDocument()
  })

  it('shows an empty state message when there are no projects', () => {
    render(
      <MemoryRouter>
        <ProjectList projects={[]} />
      </MemoryRouter>,
    )

    expect(screen.getByText(/no projects match/i)).toBeInTheDocument()
  })
})
