import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../button/index'
import Modal from '../../components/modal'

import './styles.css'

const Card = ({ image, imageName, userName, text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleIsModalOpen = () => {
    console.log('click')
    setIsModalOpen((prevState) => !prevState)
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
        <Button>Quote</Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleIsModalOpen}>
        Lalallalal
      </Modal>
    </section>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  imageName: PropTypes.string,
  userName: PropTypes.string,
  text: PropTypes.string,
}

Card.defaultProps = {
  image: '',
  imageName: '',
  userName: '',
  text: '',
}

export default Card
