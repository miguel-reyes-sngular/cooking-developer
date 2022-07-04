import { Link } from 'react-router-dom'

import './Navbar.css'

export const Navbar = (props) => {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'>
          <h1>Cooking Developer</h1>
        </Link>
        <Link to='/create'>
          Create Recipe
        </Link>
      </nav>
    </div>
  )
}
