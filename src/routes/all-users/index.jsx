import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const AllUsers = ({ children }) => (
  <section className="all-users">
    <h1>All users</h1>
    {children}
  </section>
)

AllUsers.propTypes = {
  children: PropTypes.node,
}

AllUsers.defaultProps = {
  children: null,
}

export default AllUsers
