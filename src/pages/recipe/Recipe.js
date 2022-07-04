import { useParams } from 'react-router-dom'
import { useFetch } from './../../hooks/useFetch'

import './Recipe.css'

export const Recipe = (props) => {
  const { id } = useParams()
  const url = `http://localhost:3000/recipes/${id}`
  const { data: recipe, isPending, error } = useFetch(url)

  return (
    <div>
      { isPending && <div>Loading...</div> }
      { error && <div>{error}</div> }
      { recipe && (
        <h1>{recipe.title}</h1>
      )}
    </div>
  )
}
