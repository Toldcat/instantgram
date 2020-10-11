import React, { useEffect, useCallback, useContext } from 'react'
import { useRouter } from 'next/router'
//import useAuth hook
import { useAuth } from '../context/userContext'
import { UploadContext } from '../context/uploadContext'

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
