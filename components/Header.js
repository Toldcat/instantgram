import React from 'react'
import { useAuth } from '../context/userContext'
import { firebase } from '../config/firebaseClient'
import { useRouter } from 'next/router'

const Header = () => {
  const { user } = useAuth()
  const router = useRouter()
  return (
    <div>
      <h1>Instantgram</h1>
      {user && (
        <button
          onClick={async () => {
            await firebase.auth().signOut()
            router.push('/login')
          }}
        >
          Logout
        </button>
      )}
    </div>
  )
}

export default Header
