import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBar.css'

export const SearchBar = () => {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    navigate(`/search?food=${term}`)
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(event) => setTerm(event.target.value)}
          required
          placeholder="Taco..."
        />
      </form>
    </div>
  )
}
