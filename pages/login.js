import React, { useEffect } from 'react'
import { firebase, googleAuthProvider } from '../config/firebaseClient'
import { useAuth } from '../context/userContext'
import { useRouter } from 'next/router'

const LoginPage = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/photowall')
    } else {
      router.push('/login')
    }
  }, [user])

  return (
    <div>
      <button
        onClick={async () => {
          await firebase.auth().signInWithPopup(googleAuthProvider)
        }}
      >
        Login With Google
      </button>
    </div>
  )
}

export default LoginPage
