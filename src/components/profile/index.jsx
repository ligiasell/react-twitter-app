import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <img src={user.url} alt={user.name} className="profile-image" />
      <h1 className="profile-username">{user.username}</h1>
    </div>
  )
}

Profile.propTypes = {
  user: PropTypes.shape({}),
}

Profile.defaultProps = {
  user: {},
}

export default Profile
