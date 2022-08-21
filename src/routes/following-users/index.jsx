import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const FollowingUsers = ({ children }) => (
  <section className="following-users">
    <h1>Users you are following</h1>
    {children}
  </section>
)

FollowingUsers.propTypes = {
  children: PropTypes.node,
}

FollowingUsers.defaultProps = {
  children: null,
}

export default FollowingUsers
