import React, { useState, useEffect, useContext, createContext } from 'react'
import nookies from 'nookies'
import { firebase } from '../config/firebaseClient'

//initialize context
const AuthContext = createContext({
  user: null,
})

//setup a provider wrapper for main app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [uid, setUid] = useState(null)

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null)
        nookies.set(undefined, 'token', '')
        return
      }

      const token = await user.getIdToken()
      setUser(user)
      setUid(user.uid)
      nookies.set(undefined, 'token', token)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user, uid }}>
      {children}
    </AuthContext.Provider>
  )
}

//custom hook to use auth
export const useAuth = () => {
  return useContext(AuthContext)
}
