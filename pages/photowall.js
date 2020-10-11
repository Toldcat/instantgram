import React from 'react'
import Link from 'next/link'
import { useAuth } from '../context/userContext'
import Header from '../components/Header'
import database from '../config/firebaseClient'
import nookies from 'nookies'
import { firebaseAdmin } from '../config/firebaseAdmin'

const Photowall = ({ posts }) => {
  const { user } = useAuth()

  return (
    <div>
      <Header />
      <Link href='/addphoto'>
        <a>+++++</a>
      </Link>
      <div>
        Photowall component for user {user ? user.displayName : 'anonymous'}
      </div>

      {posts ? (
        posts.map((post, i) => {
          return (
            <p key={i}>
              {post.caption}, {post.mycustomfield}
            </p>
          )
        })
      ) : (
        <p>loading</p>
      )}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  try {
    const cookies = nookies.get(ctx)
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)

    // the user is authenticated!
    const { uid, email } = token

    // FETCH STUFF HERE!! 🚀
    const posts = []

    const snapshot = await database.ref(`users/${uid}/posts`).once('value')
    snapshot.forEach((childSnapshot) => {
      posts.push({
        id: childSnapshot.key,
        ...childSnapshot.val(),
      })
    })
    return {
      props: { posts },
    }
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
    return { props: {} }
  }
}

export default Photowall
