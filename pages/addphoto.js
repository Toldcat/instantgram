import React, { useState } from 'react'
import Header from '../components/Header'
import database from '../config/firebaseClient'
import { useAuth } from '../context/userContext'

const AddPhoto = () => {
  const { user } = useAuth()
  const [caption, setCaption] = useState('')
  const [img, setImg] = useState({})

  const handleCaption = (e) => {
    setCaption(e.target.value)
  }

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg({
        image: URL.createObjectURL(e.target.files[0]),
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const post = { caption, mycustomfield: 'test' }
    database.ref(`users/${user.uid}/posts`).push(post)
  }
  console.log(img)
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          id='file'
          type='file'
          accept='image/*'
          multiple={false}
          className='tweet__input-fileinput'
          onChange={handleImageUpload}
        />
        <input
          type='text'
          placeholder='Write a caption...'
          onChange={handleCaption}
        />
        <button>Post</button>
      </form>
    </div>
  )
}

export default AddPhoto
