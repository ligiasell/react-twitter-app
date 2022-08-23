import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import Card from '../card'
import TextArea from '../text-area'
import POSTS from '../../posts-data.json'
import USERS from '../../users-data.json'
import { LOGGED_USER_ID } from '../../utils/constants'

import './styles.css'

const UsersContent = ({ modalText, wasPostClicked }) => {
  let path = useLocation().pathname
  const [posts, setPosts] = useState(POSTS)
  const [text, setText] = useState('')
  const [wasPosted, setWasPosted] = useState(false)
  const [postId, setPostId] = useState(undefined)
  const [following, setFollowing] = useState([])
  const [postsCounter, setPostsCounter] = useState(undefined)
  const [wasModalPostClicked, setWasModalPostClicked] = useState(false)

  const handleTextChange = (textArea) => {
    setText(textArea)
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

  const handleRepost = (id) => {
    setPostId(id)
    setPosts([
      ...posts,
      {
        id: posts.length,
        userId: LOGGED_USER_ID,
        type: 'repost',
        postMessage: posts[id].postMessage,
        quoteMessage: '',
        originalPostId: postId,
      },
    ])
  }

  const handleCreateQuote = (id) => {
    setPostId(id)
    setPosts([
      ...posts,
      {
        id: posts.length,
        userId: LOGGED_USER_ID,
        type: 'quote',
        postMessage: posts[id].postMessage,
        quoteMessage: text,
        originalPostId: postId,
      },
    ])
    setWasPosted(true)
  }

  useEffect(() => {
    const loggedUser = USERS.find((user) => user.id === LOGGED_USER_ID)
    setFollowing(loggedUser.following)
  }, [])

  useEffect(() => {
    setPostsCounter(posts.filter((post) => post.userId === LOGGED_USER_ID).length)
  }, [posts])

  useEffect(() => {
    if (modalText !== '') {
      setText(modalText)
    }
  }, [modalText])

  useEffect(() => {
    setWasModalPostClicked(wasPostClicked)
  }, [wasPostClicked])

  useEffect(() => {
    if (wasModalPostClicked) {
      handleCreatePost()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wasModalPostClicked])

  return (
    <div className="users-content">
      <div>
        {posts?.map((post) => {
          if (path === '/following') {
            if (following?.includes(post.userId)) {
              return (
                <div key={post.id}>
                  <Card
                    key={post.id}
                    post={post}
                    onPostClick={handleCreateQuote}
                    onRepostClick={handleRepost}
                    onTextChange={handleTextChange}
                    wasPosted={wasPosted}
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
  modalText: PropTypes.string,
  wasPostClicked: PropTypes.bool,
}

UsersContent.defaultProps = {
  modalText: '',
  wasPostClicked: false,
}

export default UsersContent
