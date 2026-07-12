import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="app-header">
      <Link to="/" className="app-title-link">
        <h1>Personal Project Showcase App</h1>
      </Link>
    </header>
  )
}

export default Header
