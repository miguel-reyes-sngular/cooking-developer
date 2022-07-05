import { projectFirestore } from '../../firebase/config'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from './../../hooks/useTheme'

import './Recipe.css'

export const Recipe = () => {
  const { id } = useParams()
  const { mode } = useTheme()

  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').doc(id).get().then(doc => {
      if(doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError('Could not find that recipe')
      }
    })
  }, [id])

  return (
    <div className={`recipe ${mode}`}>
      { isPending && <p className='loading'>Loading...</p> }
      { error && <p className='error'>{error}</p> }
      { recipe && (
        <>
          <h2 className='page-title'>
            { recipe.title }
          </h2>
          <p>Takes { recipe.cookingTime } to cook</p>
          <ul>
            { recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
          </ul>
          <p className='method'>
            { recipe.method }
          </p>
        </>
      )}
    </div>
  )
}
