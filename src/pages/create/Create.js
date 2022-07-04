import { useState } from 'react'

import './Create.css'

export const Create = (props) => {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, method, cookingTime)
  }

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={ (event) => setTitle(event.target.value) }
            value={ title }
            required
          />
        </label>

        {/* ingredients go here */}

        <label>
          <span>Recipe method:</span>
          <textarea
            cols="30"
            rows="10"
            onChange={ (event) => setMethod(event.target.value) }
            value={ method }
            required
          />
        </label>

        <label>
          <span>Cooking time:</span>
          <input
            type="number"
            onChange={ (event) => setCookingTime(event.target.value)}
            value={ cookingTime }
            required
          />
        </label>

        <button className="btn">Submit</button>

      </form>
    </div>
  )
}
