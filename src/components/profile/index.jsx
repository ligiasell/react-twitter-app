import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Profile = ({ onClick, user }) => {
  return (
    <button className="profile" onClick={onClick}>
      <img src={user.url} alt={user.name} className="profile-image" />
      <h1 className="profile-username">{user.username}</h1>
    </button>
  )
}

Profile.propTypes = {
  onClick: PropTypes.func,
  user: PropTypes.shape({}),
}

Profile.defaultProps = {
  onClick: () => {},
  user: {},
}

export default Profile
