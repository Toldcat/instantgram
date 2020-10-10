import React, { useState, useEffect, useContext, createContext } from 'react'
import { firebase } from '../config/firebaseClient'

//initialize context
export const UploadContext = createContext()

const reducer = (state = [], action) => {}

export const UploadProvider = ({}) => {
  return <UploadContext.Provider value={}>{children}</UploadContext.Provider>
}
