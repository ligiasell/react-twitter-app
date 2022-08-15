import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../button'
import UserModal from '../modal/user-modal'
import TextArea from '../text-area'

import './styles.css'

const Card = ({ image, imageName, userName, text, user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  const handleIsModalOpen = () => {
    setIsModalOpen((prevState) => !prevState)
  }

  const handleQuote = () => {
    setIsQuoteOpen((prevState) => !prevState)
  }

  return (
    <section className="card">
      <button className="card-profile-button" onClick={handleIsModalOpen}>
        <img src={image} alt={imageName} className="card-image" />
        <h1 className="card-username">{userName}</h1>
      </button>
      <p className="card-text">{text}</p>
      <div className="card-buttons">
        <Button>Repost</Button>
        <Button onClick={handleQuote}>Quote</Button>
      </div>
      {isQuoteOpen && (
        <div className="card-quote">
          <TextArea />
        </div>
      )}
      <UserModal isOpen={isModalOpen} onClose={handleIsModalOpen} user={user} />
    </section>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  imageName: PropTypes.string,
  userName: PropTypes.string,
  text: PropTypes.string,
  user: PropTypes.shape({}),
}

Card.defaultProps = {
  image: '',
  imageName: '',
  userName: '',
  text: '',
  user: {},
}

export default Card
