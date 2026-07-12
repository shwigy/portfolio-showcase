import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import SearchBar from '../components/SearchBar'

describe('SearchBar', () => {
  it('calls onChange as the user types', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<SearchBar value="" onChange={onChange} />)

    await user.type(screen.getByPlaceholderText(/search projects/i), 'app')

    expect(onChange).toHaveBeenCalled()
    expect(onChange.mock.calls.map((call) => call[0]).join('')).toBe('app')
  })
})
