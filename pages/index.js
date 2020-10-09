import React, { useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
//import useAuth hook
import { useAuth } from '../context/userContext'

const App = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/photowall')
    } else {
      router.push('/login')
    }
  }, [user])

  return <p>Loading..</p>
}

export default App
