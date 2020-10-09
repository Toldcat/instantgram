import React from 'react'
import Link from 'next/link'
import { useAuth } from '../context/userContext'
import Header from '../components/Header'

const Photowall = () => {
  const { user } = useAuth()
  console.log(user)
  return (
    <div>
      <Header />
      <Link href='/addphoto'>
        <a>+++++</a>
      </Link>
      <div>
        Photowall component for user {user ? user.displayName : 'anonymous'}
      </div>
    </div>
  )
}

export default Photowall
