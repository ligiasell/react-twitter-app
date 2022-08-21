import React, { useState, useEffect } from 'react'

import Card from '../../components/card'
import TextArea from '../../components/text-area'
import POSTS from '../../posts-data.json'
import { LOGGED_USER_ID } from '../../utils/constants'

import './styles.css'

const AllUsers = () => {
  const [posts, setPosts] = useState(POSTS)
  const [text, setText] = useState('')
  const [wasPosted, setWasPosted] = useState(false)
  const [postId, setPostId] = useState(undefined)
  const [originalPost, setOriginalPost] = useState({})

  const handleTextChange = (textArea) => {
    setText(textArea)
  }

  const onPostId = (id) => {
    setPostId(id)
  }

  const handleCreatePost = () => {
    setPosts([
      ...posts,
      {
        id: posts.length,
        userId: LOGGED_USER_ID,
        type: 'regular',
        postMessage: text,
        quoteMessage: '',
        originalPostId: posts.length,
      },
    ])
    setWasPosted(true)
  }

  const handleCreateQuote = () => {
    setPosts([
      ...posts,
      {
        id: posts.length,
        userId: LOGGED_USER_ID,
        type: 'quote',
        postMessage: originalPost[0].postMessage,
        quoteMessage: text,
        originalPostId: posts.length,
      },
    ])
    setWasPosted(true)
  }

  useEffect(() => {
    if (postId) {
      setOriginalPost(posts.filter((post) => post.id === postId))
    }
  }, [posts, postId])

  return (
    <div className="all-users">
      <div className="all-users__cards">
        {posts.map((post) => (
          <div key={post.id}>
            <Card key={post.id} post={post} onPostClick={handleCreateQuote} onChange={handleTextChange} wasPosted={wasPosted} onPostId={onPostId} />
          </div>
        ))}
      </div>
      <div className="all-users__text-area">
        <TextArea onPostClick={handleCreatePost} onChange={handleTextChange} wasPosted={wasPosted} />
      </div>
    </div>
  )
}

export default AllUsers
