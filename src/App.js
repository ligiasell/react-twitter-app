import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Layout from '../src/routes/layout'
import AllUsers from '../src/routes/all-users'
import FollowingUsers from '../src/routes/following-users'
import Modal from '../src/components/modal'
import UsersContent from '../src/components/users-content'

const App = () => {
  let location = useLocation()
  let state = location.state
  const [wasPostClicked, setWasModalPostClicked] = useState(false)
  const [modalText, setModalText] = useState('')

  const handlePostClick = () => {
    setWasModalPostClicked(true)
  }

  const handleTextChange = (textArea) => {
    setModalText(textArea)
  }

  useEffect(() => {
    if (state?.backgroundLocation !== null) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [state])

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<AllUsers>{<UsersContent modalText={modalText} wasPostClicked={wasPostClicked} />}</AllUsers>} />
          <Route path="/following" element={<FollowingUsers>{<UsersContent modalText={modalText} wasPostClicked={wasPostClicked} />}</FollowingUsers>} />
        </Route>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/user/:id" element={<Modal onPostClick={handlePostClick} onTextChange={handleTextChange} wasPostClicked={wasPostClicked} />} />
        </Routes>
      )}
    </>
  )
}

export default App
