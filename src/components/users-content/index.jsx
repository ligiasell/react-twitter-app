import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import Card from '../card'
import TextArea from '../text-area'
import POSTS from '../../posts-data.json'
import USERS from '../../users-data.json'
import { LOGGED_USER_ID } from '../../utils/constants'

import './styles.css'

const UsersContent = ({ onPostsCounter }) => {
  let path = useLocation().pathname
  const [posts, setPosts] = useState(POSTS)
  const [text, setText] = useState('')
  const [wasPosted, setWasPosted] = useState(false)
  const [postId, setPostId] = useState(undefined)
  const [originalPost, setOriginalPost] = useState({})
  const [following, setFollowing] = useState([])
  const [postsCounter, setPostsCounter] = useState(undefined)

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

  const handleRepost = () => {
    setPosts([
      ...posts,
      {
        id: posts.length,
        userId: LOGGED_USER_ID,
        type: 'repost',
        postMessage: originalPost[0].postMessage,
        quoteMessage: '',
        originalPostId: posts.length,
      },
    ])
    setOriginalPost({})
  }

  useEffect(() => {
    if (postId !== undefined) {
      setOriginalPost(posts.filter((post) => post.id === postId))
    }
  }, [posts, postId])

  useEffect(() => {
    const loggedUser = USERS.find((user) => user.id === LOGGED_USER_ID)
    setFollowing(loggedUser.following)
  }, [])

  useEffect(() => {
    setPostsCounter(posts.filter((post) => post.userId === LOGGED_USER_ID).length)
    onPostsCounter(posts.filter((post) => post.userId === LOGGED_USER_ID).length)
  }, [posts, onPostsCounter])

  return (
    <div className="users-content">
      <div>
        {posts.map((post) => {
          if (path === '/following') {
            if (following.includes(post.userId)) {
              return (
                <div key={post.id}>
                  <Card
                    key={post.id}
                    post={post}
                    onPostClick={handleCreateQuote}
                    onRepostClick={handleRepost}
                    onTextChange={handleTextChange}
                    wasPosted={wasPosted}
                    onPostId={onPostId}
                    postsCounter={postsCounter}
                  />
                </div>
              )
            }
          } else {
            return (
              <div key={post.id}>
                <Card
                  key={post.id}
                  post={post}
                  onPostClick={handleCreateQuote}
                  onRepostClick={handleRepost}
                  onTextChange={handleTextChange}
                  wasPosted={wasPosted}
                  onPostId={onPostId}
                  postsCounter={postsCounter}
                />
              </div>
            )
          }
        })}
      </div>
      <div>
        <TextArea onPostClick={handleCreatePost} onTextChange={handleTextChange} wasPosted={wasPosted} postsCounter={postsCounter} />
      </div>
    </div>
  )
}

UsersContent.propTypes = {
  onPostsCounter: PropTypes.func,
}

UsersContent.defaultProps = {
  onPostsCounter: () => {},
}

export default UsersContent
