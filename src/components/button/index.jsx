import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Button = ({ onClick, children, ...otherProps }) => {
  return (
    <button type="button" onClick={onClick} className="button" {...otherProps}>
      <span>{children}</span>
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

Button.defaultProps = {
  onClick: () => {},
  children: null,
}

export default Button
