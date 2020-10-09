import React, { useEffect, useCallback } from 'react'
import Link from 'next/link'
//import useAuth hook
import { useAuth } from '../context/userContext'

const LoginPage = () => {
  const { user } = useAuth()
  return (
    <div>
      <p>{`User ID: ${user ? user.uid : 'no user signed in'}`}</p>
      <p>
        <Link href='/photowall'>
          <a>Go to authenticated route</a>
        </Link>
      </p>
      <p>
        <Link href='/login'>
          <a>Login</a>
        </Link>
      </p>
    </div>
  )
}

export default LoginPage
