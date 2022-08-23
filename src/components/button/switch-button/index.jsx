import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const SwitchButton = ({ label, checked, onChange, id, name }) => (
  <div className="switch-button">
    <input type="checkbox" id="label" className="switch-button__input" checked={checked} onChange={onChange} name={name} data-id={id} />
    <label htmlFor="label" className="switch-button__label">
      {label}
    </label>
  </div>
)

SwitchButton.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.number,
}

SwitchButton.defaultProps = {
  label: '',
  checked: false,
  onChange: () => {},
  name: '',
  id: undefined,
}

export default SwitchButton
