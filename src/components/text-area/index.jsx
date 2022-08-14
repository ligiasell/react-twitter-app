import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { MAX_NUMBER_OF_CHARACTERS } from '../../utils/constants'

import './styles.css'

const TextArea = ({ onClick }) => {
  const [counter, setCounter] = useState(0)

  const onCounterChange = (event) => {
    const currentNumberOfCharacters = event.target.value.length
    setCounter(MAX_NUMBER_OF_CHARACTERS - currentNumberOfCharacters)
  }

  return (
    <div className="text-area-wrapper">
      <label>
        <h2>Create new Posterr</h2>
      </label>
      <textarea className="text-area" maxLength={MAX_NUMBER_OF_CHARACTERS} onChange={onCounterChange} />
      <span>{counter} characters left</span>
      <button type="button" onClick={onClick}>
        Post
      </button>
    </div>
  )
}

TextArea.propTypes = {
  onClick: PropTypes.func,
}

TextArea.defaultProps = {
  onClick: () => {},
}

export default TextArea
