import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Button from '../button'
import POSTS from '../../posts-data.json'
import { MAX_NUMBER_OF_CHARACTERS } from '../../utils/constants'
import { LOGGED_USER_ID } from '../../utils/constants'

import './styles.css'

const TextArea = ({ onPostClick }) => {
  const [charactersCounter, setCharactersCounter] = useState(MAX_NUMBER_OF_CHARACTERS)
  const [postsCounter, setPostsCounter] = useState(undefined)
  const [text, setText] = useState('')

  const handleTextChange = (event) => {
    const currentNumberOfCharacters = event.target.value.length
    setCharactersCounter(MAX_NUMBER_OF_CHARACTERS - currentNumberOfCharacters)
    setText(event.target.value)
  }

  // const handleCreatePost = () => {
  // {
  //   id: length,
  //   userId: LOGGED_USER_ID,
  //   type: "regular",
  //   postMessage: text,
  //   quoteMessage: "",
  //   originalPostId: length,
  // }
  // }

  useEffect(() => {
    setPostsCounter(POSTS.filter((post) => post.userId === LOGGED_USER_ID).length)
  }, [])

  return (
    <section className="text-area-wrapper">
      <label>
        <h1 className="text-area-title">Create new Posterr</h1>
      </label>
      {postsCounter >= 5 ? (
        <p>You already have 5 posts, write a new one tomorrow!</p>
      ) : (
        <>
          <textarea className="text-area" maxLength={MAX_NUMBER_OF_CHARACTERS} onChange={handleTextChange} placeholder="Write your Posterr here..." />
          <p className="text-area-counter">{charactersCounter} characters left</p>
          <Button type="button" disabled={text.length === 0} onClick={onPostClick}>
            POST
          </Button>
        </>
      )}
    </section>
  )
}

TextArea.propTypes = {
  onPostClick: PropTypes.func,
}

TextArea.defaultProps = {
  onPostClick: () => {},
}

export default TextArea
