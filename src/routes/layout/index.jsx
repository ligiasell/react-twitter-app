import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, Outlet } from 'react-router-dom'

import SwitchButton from '../../components/button/switch-button'
import Profile from '../../components/profile/index'
import { POSTS_VIEW_TYPE } from '../../utils/constants'
import logoColor from '../../assets/logo-color.png'
import USERS from '../../users-data.json'

import './styles.css'

const Layout = () => {
  const [loggedUser] = useState(USERS[0])
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

  return (
    <div className="layout">
      {/* <img src={logoColor} alt="Posterr logo" className="layout-logo" />
      <h1 className="layout-title">Posterr</h1>
      <SwitchButton checked={isChecked} onChange={onSwitchButtonChange} name="switch-button" label={isChecked ? POSTS_VIEW_TYPE.FOLLOWING : POSTS_VIEW_TYPE.ALL} />
      <Profile user={loggedUser} /> */}
      <nav>
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/following">Following</Link>
          </li>
        </ul>
      </nav>
      <hr />
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
