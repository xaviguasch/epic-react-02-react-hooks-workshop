import React, { useState, useEffect } from 'react'

function useLocalStorageState(key, defaultValue = '') {
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) || defaultValue
  )

  useEffect(() => {
    window.localStorage.setItem(key, state)

    // adding dependency to avoid too much useEffect calls for every re-render
  }, [key, state])

  return [state, setState]
}

export default useLocalStorageState
