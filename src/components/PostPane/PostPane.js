import React from 'react'
import "./PostPane.css"
import AddPost from '../AddPost/AddPost'
import Post from '../Post/Post'

export default function PostPane() {
  return (
    <div className='PostPane'>
      <AddPost/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
