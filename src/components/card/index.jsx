import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/index'

import './styles.css'

const Card = ({ image, imageName, userName, text }) => {
  return (
    <section className="card">
      <img src={image} alt={imageName} className="card-image" />
      <h1 className="card-username">{userName}</h1>
      <p className="card-text">{text}</p>
      <div className="card-buttons">
        <Button>Repost</Button>
        <Button>Quote</Button>
      </div>
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
