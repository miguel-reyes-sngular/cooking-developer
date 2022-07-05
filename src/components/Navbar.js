import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { SearchBar } from './SearchBar'
import { ThemeContext } from '../context/ThemeContext'

import './Navbar.css'

export const Navbar = () => {
  const { color } = useContext(ThemeContext)

  return (
    <div className='navbar' style={{ backgroundColor: color}}>
      <nav>
        <Link to='/' className='brand'>
          <h1>Cooking Developer</h1>
        </Link>
        <SearchBar />
        <Link to='/create'>
          Create Recipe
        </Link>
      </nav>
    </div>
  )
}
