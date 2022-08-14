import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Profile = ({ onClick, image, imageName, userName }) => {
  return (
    <button className="profile" onClick={onClick}>
      <img src={image} alt={imageName} className="profile-image" />
      <h1 className="profile-username">{userName}</h1>
    </button>
  )
}

Profile.propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.string,
  imageName: PropTypes.string,
  userName: PropTypes.string,
}

Profile.defaultProps = {
  onClick: () => {},
  image: '',
  imageName: '',
  userName: '',
}

export default Profile
