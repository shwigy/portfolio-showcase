import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import AddProjectForm from '../components/AddProjectForm'

describe('AddProjectForm', () => {
  it('calls onAddProject with trimmed form values on submit', async () => {
    const user = userEvent.setup()
    const onAddProject = vi.fn()
    render(<AddProjectForm onAddProject={onAddProject} />)

    await user.type(screen.getByLabelText(/title/i), '  My Project  ')
    await user.type(screen.getByLabelText(/description/i), '  A cool project  ')
    await user.click(screen.getByRole('button', { name: /add/i }))

    expect(onAddProject).toHaveBeenCalledWith({
      title: 'My Project',
      description: 'A cool project',
      tech: '',
      link: '',
    })
  })

  it('clears the form after a successful submission', async () => {
    const user = userEvent.setup()
    render(<AddProjectForm onAddProject={vi.fn()} />)

    const titleInput = screen.getByLabelText(/title/i)
    await user.type(titleInput, 'Project')
    await user.type(screen.getByLabelText(/description/i), 'Description')
    await user.click(screen.getByRole('button', { name: /add/i }))

    expect(titleInput).toHaveValue('')
  })

  it('shows an error and does not submit when required fields are empty', async () => {
    const user = userEvent.setup()
    const onAddProject = vi.fn()
    render(<AddProjectForm onAddProject={onAddProject} />)

    await user.click(screen.getByRole('button', { name: /add/i }))

    expect(onAddProject).not.toHaveBeenCalled()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
