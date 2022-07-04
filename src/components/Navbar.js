import { Link } from 'react-router-dom'

import { SearchBar } from './SearchBar'

import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
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
