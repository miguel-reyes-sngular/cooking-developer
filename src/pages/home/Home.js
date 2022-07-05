import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'

import './Home.css'

import { RecipeList } from './../../components/RecipeList'

export const Home = () => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    //* the collection comes from firestore
    projectFirestore.collection('recipes').get().then((snapshot) => {
      if (snapshot.empty) {
        setError('No recipes to load')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({
            id: doc.id,
            ...doc.data()
          })
        })
        setData(results)
        setIsPending(false)
      }
    }).catch(error => {
      setError(error.message)
      setIsPending(false)
    })
  }, [])

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
