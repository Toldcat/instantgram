import React, { useCallback, createContext, useReducer, useEffect } from 'react'
import { useAuth } from './userContext'
import database from '../config/firebaseClient'

//initialize context
export const UploadContext = createContext()

const reducer = (state = defaultState, action) => {
  if (action.type === 'GET_POSTS') {
    return action.payload.posts
  }

  return state
}

const defaultState = []

export const UploadProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const { uid } = useAuth()
  const posts = state

  return (
    <UploadContext.Provider value={{ posts }}>
      {children}
    </UploadContext.Provider>
  )
}
