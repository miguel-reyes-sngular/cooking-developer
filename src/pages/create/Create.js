import { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import './Create.css'

export const Create = () => {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientsInput = useRef(null)
  const history = useHistory()

  const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')

  const handleSubmit = (event) => {
    event.preventDefault();
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' minutes'
    })
  }

  //* redirect user when we have new data
  useEffect(() => {
    if (data) {
      history.push('/')
    }
  }, [data, history])

  const handleAdd = (event) => {
    event.preventDefault();
    const ingredient = newIngredient.trim() //* deletes spaces before and after

    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients(prevIngredients => [...prevIngredients, ingredient])
    }
    setNewIngredient('')
    ingredientsInput.current.focus()
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

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(event) => setNewIngredient(event.target.value)}
              value={newIngredient}
              ref={ingredientsInput}
            />
            <button
              className="btn"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </label>
        <p>Current ingredients: { ingredients.map(
          ingredient => <em key={ingredient}>{ingredient}, </em>
        ) }</p>

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

        <button className="btn">
          Submit
        </button>

      </form>
    </div>
  )
}
