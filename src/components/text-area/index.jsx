import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../button'
import { MAX_NUMBER_OF_CHARACTERS } from '../../utils/constants'

import './styles.css'

const TextArea = ({ onClick }) => {
  const [counter, setCounter] = useState(0)

  const onCounterChange = (event) => {
    const currentNumberOfCharacters = event.target.value.length
    setCounter(MAX_NUMBER_OF_CHARACTERS - currentNumberOfCharacters)
  }

  return (
    <section className="text-area-wrapper">
      <label>
        <h1 className="text-area-title">Create new Posterr</h1>
      </label>
      <textarea className="text-area" maxLength={MAX_NUMBER_OF_CHARACTERS} onChange={onCounterChange} placeholder="Write your Posterr here..." />
      <p className="text-area-counter">{counter} characters left</p>
      <Button type="button" onClick={onClick}>
        POST
      </Button>
    </section>
  )
}

TextArea.propTypes = {
  onClick: PropTypes.func,
}

TextArea.defaultProps = {
  onClick: () => {},
}

export default TextArea
