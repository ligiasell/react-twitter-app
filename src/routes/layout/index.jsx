import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Outlet, useNavigate } from 'react-router-dom'

import SwitchButton from '../../components/button/switch-button'
import Profile from '../../components/profile/index'
import { POSTS_VIEW_TYPE } from '../../utils/constants'
import logoColor from '../../assets/logo-color.png'
import USERS from '../../users-data.json'

import './styles.css'

const Layout = () => {
  let navigate = useNavigate()
  const [loggedUser] = useState(USERS[0])
  const [isChecked, setIsChecked] = useState(false)

  const onSwitchButtonChange = (event) => {
    const { checked } = event.target
    setIsChecked(checked)
    if (isChecked) {
      navigate('/')
    } else {
      navigate('/following')
    }
  }

  return (
    <div className="layout">
      <header className="layout__header">
        <img src={logoColor} alt="Posterr logo" className="layout__logo" />
        <h1 className="layout__title">Posterr</h1>
        <SwitchButton checked={isChecked} onChange={onSwitchButtonChange} label={isChecked ? POSTS_VIEW_TYPE.FOLLOWING : POSTS_VIEW_TYPE.ALL} />
        <Profile user={loggedUser} />
      </header>
      <Outlet />
    </div>
  )
}

Layout.propTypes = {
  user: PropTypes.shape({}),
}

Layout.defaultProps = {
  user: {},
}

export default Layout
