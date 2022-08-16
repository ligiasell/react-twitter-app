import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import SwitchButton from '../button/switch-button'
import Profile from '../profile/index'
import { POSTS_VIEW_TYPE } from '../../utils/constants'
import logoColor from '../../assets/logo-color.png'

import './styles.css'

const Header = ({ user }) => {
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false)

  const onSwitchButtonChange = (event) => {
    const { checked } = event.target
    setIsChecked(checked)
    // if (isChecked) {
    //   navigate('/all.')
    // } else {
    //   navigate('/following')
    // }
  }

  const handleClick = () => {
    console.log('click')
  }

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className="header">
      <img src={logoColor} alt="Posterr logo" className="header-logo" />
      <h1 className="header-title">Posterr</h1>
      <button type="button" onClick={goToCheckoutHandler}>
        Redirect
      </button>
      <SwitchButton checked={isChecked} onChange={onSwitchButtonChange} name="switch-button" label={isChecked ? POSTS_VIEW_TYPE.FOLLOWING : POSTS_VIEW_TYPE.ALL} />
      <Profile onClick={handleClick} user={user} />
    </div>
  )
}

Header.propTypes = {
  user: PropTypes.shape({}),
}

Header.defaultProps = {
  user: {},
}

export default Header
