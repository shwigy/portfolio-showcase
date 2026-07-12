function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search Projects"
        aria-label="Search Projects"
      />
    </div>
  )
}

export default SearchBar
