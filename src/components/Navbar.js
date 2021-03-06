import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { SearchBar } from './SearchBar'

import './Navbar.css'

export const Navbar = () => {
  const { color } = useTheme()

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
