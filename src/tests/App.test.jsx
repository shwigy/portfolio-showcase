import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import App from '../App'

beforeEach(() => {
  localStorage.clear()
})

describe('App', () => {
  it('adds a new project through the form and displays it in the list', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )

    await user.type(screen.getByLabelText(/title/i), 'New Project')
    await user.type(screen.getByLabelText(/description/i), 'New description')
    await user.click(screen.getByRole('button', { name: /add/i }))

    expect(screen.getByText('New Project')).toBeInTheDocument()
  })

  it('filters the project list based on the search term', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )

    await user.type(screen.getByPlaceholderText(/search projects/i), 'Weather')

    expect(screen.getByText('Weather Alerts App')).toBeInTheDocument()
    expect(screen.queryByText('Dictionary App')).not.toBeInTheDocument()
  })
})
