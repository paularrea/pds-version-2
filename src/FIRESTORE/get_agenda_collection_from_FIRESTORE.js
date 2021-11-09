import React from 'react';

function useIngredients(id) {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [ingredients, setIngredients] = React.useState([])
  
    useEffect(
      () => {
        const unsubscribe = firebase
          .firestore()
          .collection('recipes')
          .doc(id)
          .collection('ingredients')
          .onSnapshot(
            snapshot => {
              const ingredients = []
              snapshot.forEach(doc => {
                ingredients.push(doc)
              })
              setLoading(false)
              setIngredients(ingredients)
            },
            err => {
              setError(err)
            }
          )
  
        return () => unsubscribe()
      },
      [id]
    )
  
    return {
      error,
      loading,
      ingredients,
    }
  }