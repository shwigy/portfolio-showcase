import { useState } from 'react'

const EMPTY_FORM = { title: '', description: '', tech: '', link: '' }

function AddProjectForm({ onAddProject }) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [error, setError] = useState('')

  function handleChange(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const title = form.title.trim()
    const description = form.description.trim()

    if (!title || !description) {
      setError('Title and description are required.')
      return
    }

    onAddProject({
      title,
      description,
      tech: form.tech.trim(),
      link: form.link.trim(),
    })

    setForm(EMPTY_FORM)
    setError('')
  }

  return (
    <section className="card add-project-card">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={form.title}
          onChange={handleChange('title')}
          placeholder="Project title"
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={form.description}
          onChange={handleChange('description')}
          placeholder="Project description"
          rows={4}
        />

        <label htmlFor="tech">Tech Stack (optional)</label>
        <input
          id="tech"
          type="text"
          value={form.tech}
          onChange={handleChange('tech')}
          placeholder="React, CSS, Fetch API..."
        />

        <label htmlFor="link">Link (optional)</label>
        <input
          id="link"
          type="url"
          value={form.link}
          onChange={handleChange('link')}
          placeholder="https://github.com/..."
        />

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit">Add</button>
      </form>
    </section>
  )
}

export default AddProjectForm
