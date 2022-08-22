import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Button from '../button'
import { MAX_NUMBER_OF_CHARACTERS, MAX_NUMBER_OF_POSTS } from '../../utils/constants'

import './styles.css'

const TextArea = ({ onPostClick, onTextChange, wasPosted, postsCounter }) => {
  const [charactersCounter, setCharactersCounter] = useState(MAX_NUMBER_OF_CHARACTERS)
  const [text, setText] = useState('')

  const handleTextChange = (event) => {
    const currentNumberOfCharacters = event.target.value.length
    setCharactersCounter(MAX_NUMBER_OF_CHARACTERS - currentNumberOfCharacters)
    setText(event.currentTarget.value)
    onTextChange(event.currentTarget.value)
  }

  useEffect(() => {
    if (wasPosted) {
      setText('')
    }
  }, [wasPosted])

  return (
    <section className="text-area-wrapper">
      <label>
        <h1 className="text-area-title">Create new Posterr</h1>
      </label>
      {postsCounter >= MAX_NUMBER_OF_POSTS ? (
        <p>You already have 5 posts, write a new one tomorrow!</p>
      ) : (
        <>
          <textarea className="text-area" maxLength={MAX_NUMBER_OF_CHARACTERS} onChange={handleTextChange} placeholder="Write your Posterr here..." value={text} />
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
  onTextChange: PropTypes.func,
  wasPosted: PropTypes.bool,
  postsCounter: PropTypes.number,
}

TextArea.defaultProps = {
  onPostClick: () => {},
  onTextChange: () => {},
  wasPosted: false,
  postsCounter: 0,
}

export default TextArea
